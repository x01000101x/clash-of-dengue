import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import PieChart from "../components/PieChart.vue";
import Quiz from "../pages/Quiz.vue";
import LeaderBoard from "@/pages/LeaderBoard.vue";
import ResultAnswer from "@/components/ResultAnswer.vue";
import Login from "@/pages/Login.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
