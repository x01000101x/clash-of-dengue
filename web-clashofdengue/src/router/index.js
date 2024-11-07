import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import PieChart from "../components/PieChart.vue";
import Quiz from "../pages/Quiz.vue";
import LeaderBoard from "@/pages/LeaderBoard.vue";
import ResultAnswer from "@/components/ResultAnswer.vue";
import ForgotPassword from "@/pages/ForgotPassword.vue";
import SendEmail from "@/pages/SendEmail.vue";
import DialogComponent from "@/components/dialogComponent.vue";
import LoadingSpiner from "@/components/loadingSpiner.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import LandingPage from "@/pages/web/LandingPage.vue";
import LandingPageMobile from "@/pages/mobile/LandingPageMobile.vue";
import Registrasi from "@/pages/web/Registrasi.vue";
import RegistSuccess from "@/pages/web/RegistSuccess.vue";
import ProfileRegis from "@/pages/web/ProfileRegis.vue";
import HalamanLanding from "@/pages/controllerPage/HalamanLanding.vue";
import LoginWeb from "@/pages/web/LoginWeb.vue";
import HalamanKetentuan from "@/pages/controllerPage/HalamanKetentuan.vue";
import HalamanHitung from "@/pages/controllerPage/HalamanHitung.vue";
import HalamanEdit from "@/pages/controllerPage/HalamanEdit.vue";

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
    },
    {
        path: "/pie",
        name: "Pie",
        component: PieChart,
    },
    {
        path: "/quiz",
        name: "Quiz",
        component: Quiz,
    },
    {
        path: "/rank",
        name: "Rank",
        component: LeaderBoard,
    },
    {
        path: "/result",
        name: "Result",
        component: ResultAnswer,
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
        path: "/dialog",
        name: "Dialog",
        component: DialogComponent,
    },
    {
        path: "/loading",
        name: "Loading",
        component: LoadingSpiner,
    },
    {
        path: "/profile",
        name: "Profile",
        component: ProfilePage,
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
        component: LoginWeb,
    },
    {
        path: "/edit",
        name: "Edit",
        component: HalamanEdit,
    },
    {
        path: "/edit/control",
        name: "EditControl",
        component: HalamanEdit,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
