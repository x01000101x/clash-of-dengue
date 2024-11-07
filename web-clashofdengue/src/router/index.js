import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import PieChart from "../components/PieChart.vue";
import Quiz from "../pages/Quiz.vue";
import LeaderBoard from "@/pages/LeaderBoard.vue";
import ResultAnswer from "@/components/ResultAnswer.vue";
import Login from "@/pages/Login.vue";
import ForgotPassword from "@/pages/ForgotPassword.vue";
import SendEmail from "@/pages/SendEmail.vue";
import DialogComponent from "@/components/dialogComponent.vue";
import LoadingSpiner from "@/components/loadingSpiner.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import LandingPage from "@/pages/web/LandingPage.vue";
import LandingPageMobile from "@/pages/mobile/LandingPageMobile.vue";
import Ketentuan from "@/pages/web/Ketentuan.vue";
import Registrasi from "@/pages/web/Registrasi.vue";

const routes = [
    {
        path: "/",
        name: "Home",
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
        path: "/login",
        name: "Login",
        component: Login,
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
        component: Ketentuan,
    },
    {
        path: "/regis",
        name: "Regis",
        component: Registrasi,
    },
    {
        path: "/landing/mobile",
        name: "LandingMobile",
        component: LandingPageMobile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
