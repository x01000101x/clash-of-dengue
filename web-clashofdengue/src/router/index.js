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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
