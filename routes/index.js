const { Router } = require("express");
const User = require("../model/user");
const Kursi = require("../model/kursi");
const reservasiKursi = require("../model/reservasiKursi");
const jwt = require("jsonwebtoken");
const { SECRET, MAX_AGE } = require("../consts")
const { requireLogin } = require("../middleware/authentication");

const router = Router();

const createJwt = (payload) => {
    return jwt.sign({ payload }, SECRET, { expiresIn: MAX_AGE });
}

/**
 * @route POST api/users/register
 * @desc Register new user
 * @access Private
 */
router.post("/users/register", (req, res) => {
    const { username, email, password } = req.body;
    User.create({ username, email, password })
        .then(() => {
            return res.status(200).json({ message: "success" })
        })
        .catch(error => {
            console.log(error);
            return res.status(400).json({ message: "failed", error })
        });
});

/**
 * @route POST api/users/login
 * @desc Login user
 * @access Public
 */
router.post("/users/login", (req, res) => {
    const { email, password, role } = req.body;

    User.findOne({ email: email, password: password })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: "failed", error: "wrong-credentials" });
            }

            // Mengizinkan pengguna dengan peran 'admin' untuk langsung login
            if (role === 'admin' && user.role !== 'admin') {
                return res.status(401).json({ message: "failed", error: "unauthorized" });
            }

            const maxAge = 3 * 24 * 60 * 60;
            const token = createJwt(user._id, maxAge);
            res.cookie("auth", token, { httpOnly: true, maxAge: maxAge * 10 });

            user.role = role;

            // Simpan perubahan role ke database jika diperlukan
            // user.save();

            return res.status(200).json({ message: "success", data: user });
        })
        .catch(err => {
            return res.status(400).json({ message: "failed", err });
        });
});

/**
 * @route POST api/users/logout
 * @desc Log user out
 * @access Public
 */
router.post("/users/logout", (req, res) => {
    res.clearCookie("auth");
    return res.status(200).json({ message: "success" })
});

/**
 * @route GET api/users
 * @desc Get authenticated user
 * @access Private
 */
router.get("/users", requireLogin, (req, res) => {
    const token = req.cookies.auth;
    const _id = jwt.verify(token, SECRET).payload;
    User.findOne({ _id }, { username: 1, email: 1, role: 1, registrationDate: 1 })
        .then(user => {
            return res.status(200).json({ message: "success", data: user })
        })
        .catch((err) => {
            console.log(err);
            return res.status(401).json({ message: "error", code: "unauthenticated-access" });
        })
});

/**
 * @route GET api/kursi
 * @desc Get data kursi
 * @access Private
 */
router.get("/kursi", requireLogin, (req, res) => {
    Kursi.find()
        .then((kursiList) => {
            const formattedData = kursiList.map((kursi) => {
                return {
                    id: kursi.id,
                    kolomKursi: kursi.kolomKursi,
                    barisKursi: kursi.barisKursi,
                };
            });

            return res.status(200).json({ message: "success", data: formattedData });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ message: "error", error: "internal-server-error" });
        });
});
/**
 * @route GET api/kursi
 * @desc Get data kursi
 * @access Private
 */
router.post("/reservasi", async (req, res) => {
    const { name, kolomKursi, barisKursi } = req.body;

    try {
        if (!name) {
            return res.status(400).json({ message: "failed", error: "Username is required." });
        }

        const allowedTimings = [
            { start: 8, end: 10 },    // Jadwal pagi
            { start: 10, end: 12 },   // Jadwal siang
            { start: 12, end: 14 },
            { start: 14, end: 16 }   // Jadwal sore
        ];

        const currentHour = new Date().getHours();

        // Periksa apakah waktu saat ini berada dalam rentang waktu yang diizinkan
        const isAllowedTiming = allowedTimings.some(({ start, end }) => {
            return currentHour >= start && currentHour < end;
        });

        if (!isAllowedTiming) {
            return res.status(400).json({ message: "failed", error: "Reservation not allowed at this time." });
        }

        const reservasiData = {
            username: name,
            kolomKursi,
            barisKursi,
            registrationDate: Date.now()
        };

        await reservasiKursi.create(reservasiData);

        return res.status(200).json({ message: "success" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error", error: "internal-server-error" });
    }
});



router.post("/reservasi/check", async (req, res) => {
    const { kolomKursi, barisKursi } = req.body;

    try {
        const existingReservation = await reservasiKursi.findOne({ kolomKursi });

        if (existingReservation && existingReservation.barisKursi === barisKursi) {
            return res.status(200).json({ available: false });
        }

        return res.status(200).json({ available: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error", error: "internal-server-error" });
    }
});

router.get("/reservasi", requireLogin, (req, res) => {
    reservasiKursi.find()
        .then((reservasiList) => {
            const formattedData = reservasiList.map((reservasi) => {
                return {
                    name: reservasi.username,
                    kolomKursi: reservasi.kolomKursi,
                    barisKursi: reservasi.barisKursi,
                };
            });

            return res.status(200).json({ message: "success", data: formattedData });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ message: "error", error: "internal-server-error" });
        });
});

router.get("/kursiAvail", requireLogin, async (req, res) => {
    try {
        const semuaKursi = await Kursi.find();
        const semuaReservasi = await reservasiKursi.find();

        const kursiTerreservasi = semuaReservasi.flatMap((reservasi) => {
            if (Array.isArray(reservasi.kolomKursi)) { // Periksa apakah kolomKursi adalah array
                return reservasi.kolomKursi.map((kolom, index) => ({
                    kolomKursi: kolom,
                    barisKursi: reservasi.barisKursi[index]
                }));
            } else { // Jika bukan array, kembalikan objek tunggal
                return [{
                    kolomKursi: reservasi.kolomKursi,
                    barisKursi: reservasi.barisKursi
                }];
            }
        });

        const kursiBelumTereservasi = semuaKursi.filter((kursi) => {
            const sudahTereservasi = kursiTerreservasi.some(
                (reservasi) =>
                    reservasi.kolomKursi === kursi.kolomKursi && reservasi.barisKursi === kursi.barisKursi
            );
            return !sudahTereservasi;
        });

        const formattedData = kursiBelumTereservasi.map((kursi) => ({
            kolomKursi: kursi.kolomKursi,
            barisKursi: kursi.barisKursi,
        }));

        return res.status(200).json({ message: "success", data: formattedData });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error", error: "internal-server-error" });
    }
});

module.exports = router;

// router.post("/reservasi", (req, res) => {
//     const { name, kolomKursi, barisKursi, available } = req.body;
//     reservasiKursi.create({ name, kolomKursi, barisKursi, available })
//     const newKursi = {
//         if(kolomKursi = kursi.kolomKursi || available != true){

//         }
//     }
//         .then(() => {
//             return res.status(200).json({ message: "success" })
//         })
//         .catch(error => {
//             console.log(error);
//             return res.status(400).json({ message: "failed", error })
//         });
// });


// --><--


// router.post("/reservasi", async (req, res) => {
//     const { name, kolomKursi, barisKursi } = req.body;

//     try {
//         const existingReservation = await reservasiKursi.findOne({ kolomKursi });

//         if (existingReservation && existingReservation.barisKursi === barisKursi) {
//             return res.status(400).json({ message: "failed", error: "Kursi sudah direservasi" });
//         }

//         await reservasiKursi.create({ name, kolomKursi, barisKursi, available: true });
//         return res.status(200).json({ message: "success" });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "error", error: "internal-server-error" });
//     }
// });

// --><--

// router.post("/reservasi/check", async (req, res) => {
//     const { kolomKursi, barisKursi } = req.body;

//     try {
//         const existingReservation = await reservasiKursi.findOne({ kolomKursi, barisKursi });

//         return res.status(200).json({ available: !existingReservation });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "error", error: "internal-server-error" });
//     }
// });