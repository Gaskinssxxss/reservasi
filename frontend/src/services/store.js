import { createStore } from "vuex";
import Api from "@/services/api";

const store = createStore({
    state: {
        user: null,
        userLoggedIn: false,
        isStoreUpdated: false,
        kursiList: [],
        reservasiKursi: []
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setUserIsLoggedIn(state, payload) {
            state.userLoggedIn = payload;
        },
        setIsStoreUpdated(state, payload) {
            state.isStoreUpdated = payload;
        },
        setKursiList(state, payload) {
            state.kursiList = payload;
        },
        setreservasiKursi(state, payload) {
            state.reservasiKursi = payload;
        },
        setUserRole(state, role) {
            state.userRole = role;
        },
    },
    actions: {
        async setUserRole({ commit }, role) {
            commit('SET_USER_ROLE', role);
        },
        async login(context, { email, password, role }) {
            const res = await Api.post("/users/login", { email, password, role }) // Mengirim data peran ke backend
                .catch((err) => {
                    throw new Error(err);
                })
            if (res && res.data) {
                context.commit("setUser", res.data.data);
                context.commit("setUserIsLoggedIn", true);
                context.commit("setUserRole", res.data.data.role); // Tambahkan baris ini
            } else {
                context.commit("setUser", null);
                context.commit("setUserIsLoggedIn", false);
                context.commit("setUserRole", null); // Tambahkan baris ini
                throw new Error("unknown error");
            }
        },

        async KursiData(context) {
            try {
                const res = await Api.get("/kursi");
                context.commit("setKursiList", res.data.data);
                context.commit("setUserIsLoggedIn", true);
            } catch (error) {
                console.error('Error fetching kursi data in action:', error);
                throw error;
            }
        },
        async reservasiData(context) {
            try {
                const res = await Api.post("/reservasi");
                context.commit("setreservasiKursi", res.data.data);
                context.commit("setUserIsLoggedIn", true);
            } catch (error) {
                console.error('Error fetching kursi data in action:', error);
                throw error;
            }
        },
        async updateStore(context) {
            try {
                const res = await Api.get("/users");
                context.commit("setUser", res.data.data);
                context.commit("setUserIsLoggedIn", true);
            } catch (e) {
                context.commit("setUser", null);
                context.commit("setUserIsLoggedIn", false);
            } finally {
                context.commit("setIsStoreUpdated", true);
            }
        },
        async logout(context) {
            const res = await Api.post("/users/logout")
                .catch((err) => {
                    throw new Error(err);
                });
            if (res) {
                context.commit("setUser", null);
                context.commit("setUserIsLoggedIn", false);
            }
        }
    }
})

export default store;
