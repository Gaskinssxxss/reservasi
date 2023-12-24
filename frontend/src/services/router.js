import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import store from "@/services/store";
import UserView from "@/views/UserView";
import kursi from "@/views/kursiCollection";
import Admin from "@/views/AdminDashboard";
import Gallery from "@/views/GalleryView";
import About from "@/views/aboutView";
import prof from "../components/userProf"

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            title: "The Gade",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
        meta: {
            title: "The Gade - Login",
            authRequired: false,
            authForbidden: true
        },
    },
    {
        path: "/register",
        name: "register",
        component: RegisterView,
        meta: {
            title: "The Gade - Register",
            authRequired: false,
            authForbidden: true
        },
    },
    {
        path: "/user",
        name: "user",
        component: UserView,
        meta: {
            title: "The Gade - User profile",
            authRequired: true,
            authForbidden: false
        }
    },
    {
        path: "/kursi",
        name: "kursi",
        component: kursi,
        meta: {
            title: "The Gade - Reservasi",
            authRequired: true,
            authForbidden: false
        }
    },
    {
        path: "/profile",
        name: "profile",
        component: prof,
        meta: {
            title: "The Gade - Reservasi",
            authRequired: true,
            authForbidden: false
        }
    },
    {
        path: "/admin",
        name: "admin",
        component: Admin,
        meta: {
            title: "The Gade - Admin",
            authRequired: true,
            authForbidden: false
        },
    },

    {
        path: "/gallery",
        name: "gallery",
        component: Gallery,
        meta: {
            title: "The Gade - Gallery",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/about",
        name: "about",
        component: About,
        meta: {
            title: "The Gade - About",
            authRequired: false,
            authForbidden: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

// routes protection
router.beforeEach(async (to, from, next) => {
    // update store if needed
    if (!store.state.isStoreUpdated) {
        await store.dispatch("updateStore");
    }

    // control routes
    const isAuthenticated = store.state.userLoggedIn;
    if (!isAuthenticated && to.meta.authRequired) {
        next({ name: "login" });
    } else if (isAuthenticated && to.meta.authForbidden) {
        next({ name: "user" });
    } else {
        next();
    }
});

router.afterEach((to) => {
    document.title = to.meta.title;
});
export default router;