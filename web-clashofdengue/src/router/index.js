import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import ForgotPassword from "@/pages/ForgotPassword.vue";
import SendEmail from "@/pages/SendEmail.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import LandingPage from "@/pages/web/LandingPage.vue";
import LandingPageMobile from "@/pages/mobile/LandingPageMobile.vue";
import Registrasi from "@/pages/web/Registrasi.vue";
import RegistSuccess from "@/pages/web/RegistSuccess.vue";
import ProfileRegis from "@/pages/web/ProfileRegis.vue";
import HalamanLanding from "@/pages/controllerPage/HalamanLanding.vue";
import HalamanKetentuan from "@/pages/controllerPage/HalamanKetentuan.vue";
import HalamanHitung from "@/pages/controllerPage/HalamanHitung.vue";
import HalamanEdit from "@/pages/controllerPage/HalamanEdit.vue";
import LoginNew from "@/pages/web/LoginNew.vue";
import ForgotPass from "@/pages/web/ForgotPass.vue";
import StartGame from "@/pages/start/StartGame.vue";
import LoginGame from "@/pages/start/LoginGame.vue";
import ForgotPassGame from "@/pages/start/ForgotPassGame.vue";
import DoneQuiz from "@/pages/start/DoneQuiz.vue";
import store from "../store";
import HalamanDashboard from "@/pages/start/controllerPage/HalamanDashboard.vue";
import HalamanQuiz from "@/pages/start/controllerPage/HalamanQuiz.vue";
import HalamanEditFame from "@/pages/start/controllerPage/HalamanEdit.vue";
import HalamanRanking from "@/pages/start/controllerPage/HalamanRanking.vue";
import HalamanCountGame from "@/pages/start/controllerPage/HalamanCountGame.vue";
import HalamanProfile from "@/pages/start/controllerPage/HalamanProfile.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HalamanHitung,
    },
    {
        path: "/dashboard",
        name: "Dashobard",
        component: Dashboard,
        meta: { requiresAuth: true },
    },
    {
        path: "/password",
        name: "Password",
        component: ForgotPassword,
    },
    {
        path: "/reset",
        name: "Reset",
        component: SendEmail,
    },
    {
        path: "/profile",
        name: "Profile",
        component: ProfilePage,
        meta: { requiresAuth: true },
    },
    {
        path: "/landing",
        name: "Landing",
        component: LandingPage,
    },
    {
        path: "/term",
        name: "Term",
        component: HalamanKetentuan,
    },
    {
        path: "/regis",
        name: "Regis",
        component: Registrasi,
    },
    {
        path: "/regis/profile",
        name: "RegisProfile",
        component: ProfileRegis,
        meta: { requiresAuth: true },
    },
    {
        path: "/regis/success",
        name: "RegisSuccess",
        component: RegistSuccess,
    },
    {
        path: "/landing/mobile",
        name: "LandingMobile",
        component: LandingPageMobile,
    },
    {
        path: "/count",
        name: "CountDay",
        component: HalamanHitung,
    },
    {
        path: "/splash",
        name: "SplashScreen",
        component: HalamanLanding,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginNew,
    },
    {
        path: "/edit",
        name: "Edit",
        component: HalamanEdit,
        meta: { requiresAuth: true },
    },
    {
        path: "/edit/control",
        name: "EditControl",
        component: HalamanEdit,
        meta: { requiresAuth: true },
    },
    {
        path: "/forgot",
        name: "ForgotPassword",
        component: ForgotPass,
    },
    {
        path: "/start",
        name: "StartGame",
        component: StartGame,
    },
    {
        path: "/start/login",
        name: "LoginGame",
        component: LoginGame,
    },
    {
        path: "/start/forgot",
        name: "ForgotAccount",
        component: ForgotPassGame,
    },
    {
        path: "/start/dashboard",
        name: "DashboardGame",
        component: HalamanDashboard,
        meta: { requiresAuth: true },
    },
    {
        path: "/start/profile",
        name: "ProfileGame",
        component: HalamanProfile,
        meta: { requiresAuth: true },
    },
    {
        path: "/start/quiz",
        name: "StartQuiz",
        component: HalamanQuiz,
        meta: { requiresAuth: true },
    },
    {
        path: "/start/finish",
        name: "FinishQuiz",
        component: DoneQuiz,
    },
    {
        path: "/start/count",
        name: "CountQuiz",
        component: HalamanCountGame,
    },
    {
        path: "/start/rank",
        name: "LeaderBoard",
        component: HalamanRanking,
        meta: { requiresAuth: true },
    },
    {
        path: "/start/edit",
        name: "EditProfileGame",
        component: HalamanEditFame,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = store.getters["ClashOfDengue/getToken"];
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!token) {
            // Jika tidak ada token, arahkan ke halaman login
            next({ name: "Login" });
        } else {
            next(); // Token ada, lanjutkan navigasi
        }
    } else {
        next(); // Halaman tanpa autentikasi, lanjutkan
    }
});

export default router;
