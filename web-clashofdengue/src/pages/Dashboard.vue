<template>
  <div class="container">
    <!-- Header Section -->
        <div class="menu-logout">
          <div class="icon-logout" @click="logOut">
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
        </div>
      <img src="@/assets/logo.png" alt="Clash Dengue" class="logo-home" />

    
    <!-- Button Section -->
    <div class="button-container flex flex-col items-center">
        <h2 class="header-point">POINT SAAT INI:</h2>
        <p class="points">{{scoreUser.total_score}}</p>
        <button @click="goToQuiz" class="new-game-button">NEW GAME</button>
      <!-- Icons Section -->
      <div class="icons">
        <div class="icon-container">
          <div class="icon" @click="goToRankList">
            <i class="fas fa-chart-simple"></i>
          </div>
          <p>Top List</p>
        </div>
        <div class="icon-container">
          <div @click="toggleProfile" class="icon">
            <i class="fas fa-user-group"></i>
          </div>
          <p>Profil</p>
        </div>
      </div>

      <!-- Ranking Section -->
      <div class="ranking">
        <h3 class="title-rank">Peringkat Anda Saat Ini :</h3>
        <p class="rank">{{ getUserRank? getUserRank : "0" }}</p>

        <!-- Pie Chart -->
        <PieChart v-if="isScoreEmpty !== '0'"/>
        <div v-else class="empty-chart">
          <img src="@/assets/logo-wrong.png" alt="Clash Dengue" class="logo-home" />
          <!-- <h1>Silahkan Memulai Game Untuk mendapatkan score !!!</h1> -->
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import '@/css/Dashboard.css';
import PieChart from '@/components/PieChart.vue'

export default {
  name: 'ClashDengue',
  components : {
    PieChart,
  },
  data() {
    return {
    };
  },
  computed: {
    scoreUser(){
      return this.$store.getters["ClashOfDengue/getScoreUser"];
    },
    getUserRank(){
      return this.$store.getters["ClashOfDengue/getUserRank"];
    },
    sessions(){
      return this.$store.getters["ClashOfDengue/getSession"];
    },
    sessionNow(){
      return this.$store.getters["ClashOfDengue/getLastSession"];
    },
    token(){
      return this.$store.getters["ClashOfDengue/getToken"];
    },
    isScoreEmpty(){
      return this.scoreUser.correct_answer && this.scoreUser.false_answer
    }
  },
  async mounted() {
    console.log("token", this.token);
    
    if(!this.token){
      this.$router.push('/splash');
    } else {
      await this.$store.dispatch("ClashOfDengue/getScoreUser");
      await this.$store.dispatch("ClashOfDengue/getSession");
      await this.$store.dispatch("ClashOfDengue/getRank");
      this.checkSession();
    }
  },
  methods: {
    async toggleProfile() {
      await this.$store.dispatch("ClashOfDengue/getProfileUser");
      this.$router.push('/profile');
    },
    async goToQuiz() {
      try {
        await this.$store.dispatch("ClashOfDengue/getQuizBySession");
        await this.$store.dispatch("ClashOfDengue/startGame");
        this.$router.push('/quiz');
      } catch (error) {
        console.log("error", error);
        
        return
      }
    },
    goToRankList() {
      this.$router.push('/rank');
    },
    getActiveSession(sessions) {
      const currentDateTime = new Date();
      return sessions.filter(session => {
        const dateFrom = new Date(session.dateFrom);
        const dateTo = new Date(session.dateTo);
        return currentDateTime >= dateFrom && currentDateTime <= dateTo;
    });
    },
    checkSession() {
      const activeSessions = this.getActiveSession(this.sessions);

      if (activeSessions.length === 0) {
        return null; // Tidak ada sesi aktif
      }
      const lastSession = this.sessions && this.sessions.reduce((latest, session) => {
          const sessionUpdatedAt = new Date(session.updated_at);
          return sessionUpdatedAt > latest.updatedAt ? {
              session,
              updatedAt: sessionUpdatedAt
          } : latest;
      }, { session: null, updatedAt: new Date(0) }).session;
      console.log("last session", lastSession);
      
      this.$store.commit("ClashOfDengue/setLastSession", lastSession);
    },
    async logOut() {
        try {
          await this.$store.dispatch("ClashOfDengue/logoutUser");
          this.$store.commit("ClashOfDengue/resetStore")
          this.$router.push('/login');
        } catch (error) {
          console.error('logOut error:', error.message);
          this.$store.commit("ClashOfDengue/setCreateDialog", {
            show: true,
            message: error.message,
            icon: "fa-solid fa-circle-exclamation",
          });
        }
      },
  },
};
</script>
