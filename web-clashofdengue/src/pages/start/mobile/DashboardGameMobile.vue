<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="mosquito-logo">
            <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
        </div>
        
        <div class="welcome-text">
            <div class="game-status">
            <div class="points">
                <div class="point-title">
                    <h2>POINT SAAT INI</h2>
                </div>
                <span class="points-value">{{ scoreUser.total_score }}</span>
            </div>
            <div class="menu">
                <button class="new-game" @click="goToQuiz">New Game</button>
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
            </div>
            <div>
                <div class="point-rank">
                    <h2>Peringkat Anda Saat Ini</h2>
                </div>
                <span class="point-rank-value">{{ getUserRank? getUserRank : "0" }}</span>
            </div>
            <div class="diagram-pie">
                <PieChart/>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import PieChart from '@/components/PieChart.vue'

export default {
    name: 'RegistrationPage',
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
        },
        profileUser(){
            return this.$store.getters["ClashOfDengue/getUserProfile"];
        },
        session(){
            return this.$store.getters["ClashOfDengue/getLastSession"];
        },
    },
    methods: {
        async toggleProfile() {
            await this.$store.dispatch("ClashOfDengue/getProfileUser");
            this.$router.push('/start/profile');
          },
    async goToQuiz() {
      try {
          await this.$store.dispatch("ClashOfDengue/getQuizBySession");
          this.$store.commit("ClashOfDengue/resetQuiz");
          await this.$store.dispatch("ClashOfDengue/getProfileUser");
          if(this.profileUser.session_id && this.profileUser.session_id === this.session) {
            this.$store.commit("ClashOfDengue/setCreateDialog", {
            show: true,
            message: "Anda sudah menyelesaikan quiz di sesi saat ini",
            icon: "fa-solid fa-circle-exclamation",
          });
          } else {
            if(this.scoreUser.question_no !== null && this.scoreUser.question_no !== "0") {
                let questionNo = parseInt(this.scoreUser.question_no, 10);
                this.$store.commit("ClashOfDengue/setCurrentQuiz",  questionNo);
            }
            this.$router.push('/start/quiz');
          }
      } catch (error) {
        console.log("error", error);
        return
      }
    },
    goToRankList() {
      this.$router.push('/start/rank');
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
    async mounted() {
      await this.$store.dispatch("ClashOfDengue/getScoreUser");
      await this.$store.dispatch("ClashOfDengue/getRank");
      await this.$store.dispatch("ClashOfDengue/getSession");
      this.checkSession();

    },
};
</script>

<style scoped>
.background-page {
    height: 100vh;
    background-image: url('@/assets/cod/bg-mobile.png');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 100dvh; /* new browsers */
    width: 100%;
}

.sponsor-logos {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px; /* Space between logos and content */
}

.sponsor-logos img {
    max-width: 1000px;
    height: auto;
}

.mosquito-logo {
  animation: floating 3s ease-in-out infinite;
}

.mosquito-logo img {
  max-width: 200px;
  height: auto;
}

.welcome-text {
    width: 100%;   /* Pastikan elemen ini mengambil lebar penuh dari induknya */
    flex: 1;       /* Ini akan membuat elemen ini mengisi ruang yang tersisa di dalam container */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Jika Anda ingin memusatkan konten di dalam welcome-text */
    align-items: center;     /* Memastikan semua konten di dalam welcome-text tetap berada di tengah */
    padding: 20px;  /* Opsional: menambahkan sedikit padding di sekeliling welcome-text */
}

.game-status {
    background-color: white; /* White background for the main container */
    border-radius: 20px; /* Rounded corners */
    text-align: center; /* Center align text */
    display: flex;
    flex-direction: column;
    max-width: 80vw; /* Adjust width as needed */
    max-height: 60vh;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow effect */
    padding: 10px;
    overflow-y: auto; /* Aktifkan scroll vertikal */

}

.points {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 20px;
}

.points h2 {
    font-size: 20px; /* Font size for the points label */
    color: #00bcd4; /* Color for the label */
}

.points-value {
    font-size: 40px; /* Font size for the points value */
    color: #00bcd4; /* Color for the value */
}

.menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.new-game {
    background-color: #ff4081; /* Pink background for the button */
    color: white; /* White text */
    font-size: 20px; /* Font size for the button text */
    padding: 5px 10px; /* Padding inside the button */
    border: none; /* No border */
    border-radius: 10px; /* Rounded corners for the button */
    cursor: pointer; /* Pointer on hover */
    transition: background-color 0.3s; /* Smooth transition */
}

.new-game:hover {
    background-color: #e91e63; /* Darker pink on hover */
}

.icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.icon {
  background-color: var(--secondary-color);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 30px;
  margin-bottom: 0.5rem;
  color: white;
  position: relative;
}

.icon-container p {
    color: var(--primary-color);
    font-weight: 500;
}

.point-rank {
    color: var(--primary-color);
    font-size: 15px;
}

.point-rank-value {
    color: var(--primary-color);
    font-size: 25px;
}

.diagram-pie {
    width: 100%; /* Lebar penuh dari kontainer induk */
    max-width: 500px; /* Membatasi lebar maksimal */
    max-height: 500px; /* Membatasi tinggi maksimal */
    height: auto; /* Menyesuaikan tinggi secara otomatis agar proporsional */
}

/* Animasi untuk efek floating */
@keyframes floating {
    0% {
        transform: translate(0, 0); 
    }
    50% {
        transform: translate(0, -10px);
    }
    100% {
        transform: translate(0, 0);
    }
}

@media (max-width: 1031px) {
    .sponsor-logos img {
        max-width: 80%;
    }

    .maskot-female img {
        max-width: 200px;
    }

    .maskot-male img {
        width: 250px;
    }

    .mosquito-logo img {
        max-width: 125px;
    }
}

@media (max-height: 666px) {
    .mosquito-logo img {
        max-width: 100px;
    }
}
</style>
