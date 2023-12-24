const jwt = require('jsonwebtoken');
const User = require('../model/user');
const { SECRET } = require("../consts")

module.exports.requireLogin = (req, res, next) => {
    const token = req.cookies.auth;
    if (token) {
        try {
            const _id = jwt.verify(token, SECRET).payload;
            User.findOne({ _id })
                .then((user) => {
                    if (user) {
                        req.user = user;
                        next();
                    } else {
                        return res.status(403).json({ message: "error", code: "unauthenticated-access" });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    return res.status(500).json({ message: "error", code: "server-error" });
                })
        } catch (error) {
            console.error(error);
            return res.status(400).json({ message: "error", code: "token-expired", error });
        }
    } else {
        return res.status(403).json({ message: "error", code: "unauthenticated-access" });
    }
};
