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
            <div class="diagram-pie">
                <PieChart/>
            </div>
            </div>
        </div>
        <div class="maskot-female">
            <img src="@/assets/cod/logo-family2.png" alt="Maskot Perempuan" />
        </div>
        <div class="maskot-male">
            <img src="@/assets/cod/logo-family1.png" alt="Maskot Laki-laki" />
        </div>
        <div class="logo-dbd">
            <img src="@/assets/cod/logo-dbd.png" alt="Logo DBD" />
        </div>
        <div class="featuring-by">
            <h2>Peringkat Anda Saat Ini : {{ getUserRank? getUserRank : "0" }}</h2>
        </div>
    </div>
</template>

<script>
import PieChart from '@/components/PieChart.vue'

export default {
    name: 'DashboardGame',
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
            this.$router.push('/start/profile');
          },
    async goToQuiz() {
      try {
          await this.$store.dispatch("ClashOfDengue/getQuizBySession");
          this.$store.commit("ClashOfDengue/resetQuiz");
          await this.$store.dispatch("ClashOfDengue/getProfileUser");
          
          if(this.profileUser.session_id && this.profileUser.session_id === String(this.session.id)) {
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
            // const sesiUser = this.profileUser.session_id  && !isNaN(parseInt(this.profileUser.session_id)) ? parseInt(this.profileUser.session_id) : 0 
            // if(sesiUser + 1 < this.session.id) {
            //     this.$store.commit("ClashOfDengue/setCurrentQuiz",  0);
            // }
            this.$router.push('/start/quiz');
          }
      } catch (error) {
        console.debug("error", error);
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
    console.debug("active session", activeSessions);
    
      if (activeSessions.length === 0) {
        return null; // Tidak ada sesi aktif
      }           
      this.$store.commit("ClashOfDengue/setLastSession", activeSessions[0]);
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
        try {
            await this.$store.dispatch("ClashOfDengue/getProfileUser");
            await this.$store.dispatch("ClashOfDengue/getScoreUser");
            await this.$store.dispatch("ClashOfDengue/getRank");
            await this.$store.dispatch("ClashOfDengue/getSession");
        } catch (error) {
            this.$store.commit("ClashOfDengue/setCreateDialog", {
            show: true,
            message: error.message,
            icon: "fa-solid fa-circle-exclamation",
          });
        }
      this.checkSession();
    },
};
</script>

<style scoped>
.background-page {
    height: 100vh;
    background-image: url('@/assets/cod/back-web-mid.png');
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
    gap: 20px;
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
  width: 300px;
  height: auto;
}

.welcome-text{
    max-width: 75vw;
}

.logo-dbd {
position: absolute;
bottom: 25%;
right: 3%;
z-index: 999;
}

.logo-dbd img {
max-width: 200px;
height: auto;
}

.game-status {
    background-color: white; /* White background for the main container */
    border-radius: 20px; /* Rounded corners */
    text-align: center; /* Center align text */
    display: flex;
    flex-direction: row;
    max-width: 80vw; /* Adjust width as needed */
    max-height: 40vh;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow effect */
    padding: 10px;
    gap: 20px;
}

.points {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 20px;
}

.points h2 {
    font-size: 24px; /* Font size for the points label */
    color: #00bcd4; /* Color for the label */
}

.points-value {
    font-size: 48px; /* Font size for the points value */
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
    font-size: 24px; /* Font size for the button text */
    padding: 10px 20px; /* Padding inside the button */
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
}

.icon {
  background-color: var(--secondary-color);
  width: 70px;
  height: 70px;
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

.icon-container {
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.diagram-pie {
    max-width: 100%;
}

.maskot-female {
    position: absolute;
    bottom: -5%;
    right: 0%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-female img {
    max-width: 200px;
    height: auto;
}

.maskot-male {
    position: absolute;
    bottom: -1%;
    left: 0%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-male img {
    width: 250px; 
    height: auto;
}

.featuring-by {
    position: absolute;
    bottom: -1%;
    left: auto;
    width: auto;
    background: white;
    padding: 10px 60px;
    border: none;
    border-radius: 20px;
}

.featuring-by h2 {
    font-size: 40px; /* Font size for the points value */
    color: #00bcd4; /* Color for the value */
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
        max-width: 150px;
    }
}

@media (max-height: 800px) {
    .mosquito-logo img {
  width: 200px;
  height: auto;
}
}
</style>
