<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        
        <!-- Profile Section -->
        <div class="profile-card">
            <QuizDisplayMobile
                class="question"
                :key="currentQuestionIndex"
                :questionNumber="currentQuestionIndex + 1"
                :question="currentQuestion.question"
                :choices="currentChoices"
                :initialTime="duration"
                :maxQuestion="getQuiz.length"
                @answer-selected="handleAnswer"
            />
        </div>
    </div>
</template>

<script>
import QuizDisplayMobile from '@/components/mobile/QuizDisplayMobile.vue';


export default {
  name: 'QuizPage',
  components: {
    QuizDisplayMobile
  },
  data() {
    return {
      duration: 30,
      lastQuestion: false,
    };
  },
  computed: {
    getQuiz(){
      return this.$store.getters["ClashOfDengue/getQuiz"]
    },
    currentQuestionIndex(){
      return this.$store.getters["ClashOfDengue/getCurrentQuiz"]
    },
    currentQuestion() {
      return this.getQuiz[this.currentQuestionIndex];
    },
    currentChoices() {
      const choices = [];
      if (this.currentQuestion.option_a) choices.push(this.currentQuestion.option_a);
      if (this.currentQuestion.option_b) choices.push(this.currentQuestion.option_b);
      if (this.currentQuestion.option_c) choices.push(this.currentQuestion.option_c);
      if (this.currentQuestion.option_d) choices.push(this.currentQuestion.option_d);
      return choices;
    },
  },
  methods: {
    async handleAnswer({ selectedAnswer, timeLeft }) {
      const isLastQuestion = this.currentQuestionIndex >= this.getQuiz.length - 1;
      if (selectedAnswer !== null) {
        const selectedChoice = this.currentChoices[selectedAnswer];
        const score = parseInt(this.currentQuestion.point) || 0;
        console.log("selected Choice", selectedChoice);
        console.log("bandingkan", this.currentQuestion[this.currentQuestion.answer]);
        
        if(selectedChoice === this.currentQuestion[this.currentQuestion.answer]){
            await this.$store.dispatch("ClashOfDengue/sendScore", {correct: true, score: score*timeLeft, question_no: isLastQuestion? 0 : this.currentQuestionIndex+1});
        } else{
            await this.$store.dispatch("ClashOfDengue/sendScore", {correct: false, score:"0", question_no: isLastQuestion? 0 : this.currentQuestionIndex+1});
        }
      } else {
        await this.$store.dispatch("ClashOfDengue/sendScore", {correct: false, score:"0", question_no: isLastQuestion? 0 : this.currentQuestionIndex+1});
      }
      
      if (!isLastQuestion) {
        this.$store.commit("ClashOfDengue/addCurrentQuiz",);
        this.resetTimer();
      } else {
        await this.$store.dispatch("ClashOfDengue/endGame");
        this.$router.push('/start/finish');
      }
    },
    resetTimer() {
      this.duration = 30;
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },
  },
  watch: {
    currentQuestion: {
      handler() {
        this.resetTimer();
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.background-page {
    height: 100vh;
    background-image: url('@/assets/cod/bg-web.png');
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

.question {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
}

.sponsor-logos {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px; /* Space between logos and content */
}

.sponsor-logos img {
    height: auto;
    max-width: 80%;
}

/* Profile Card Styles */
.profile-card {
    background-color: white;
    border-radius: 20px;
    width: 80vw;
    height: 80vh;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: absolute; /* Positioning for overlay effect */
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Adjust for centering */
    z-index: 2;
    display: flex;
    justify-content: center;
    overflow-y: auto; /* Aktifkan scroll vertikal */


}
</style>
