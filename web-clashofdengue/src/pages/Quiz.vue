<template>
  <div>
    <template v-if="!resultPage">
      <QuestionDisplay
        :questionNumber="currentQuestionIndex + 1"
        :question="currentQuestion.question"
        :choices="currentChoices"
        :initialTime="duration"
        :maxQuestion="getQuiz.length"
        @answer-selected="handleAnswer"
      />
    </template>
    <template v-if="resultPage">
      <ResultComponent 
        :isCorrect="resultAnswer"
        :isLast="lastQuestion"
        @next-question = "handleNext"
      />
    </template>
  </div>
</template>

<script>
import QuestionDisplay from '@/components/QuestionDisplay.vue';
import ResultComponent from '@/components/ResultAnswer.vue';

export default {
  name: 'QuizPage',
  components: {
    QuestionDisplay,
    ResultComponent,
  },
  data() {
    return {
      duration: '30',
      resultPage: false,
      resultAnswer: false,
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
      if (this.currentQuestion.option_e) choices.push(this.currentQuestion.option_e);
      return choices;
    },
  },
  methods: {
    async handleAnswer({ selectedAnswer, timeLeft }) {
      console.log("handle answer", selectedAnswer);
      console.log("Time left", timeLeft);
      
      
      if (selectedAnswer !== null) {
        const selectedChoice = this.currentChoices[selectedAnswer];
        const score = parseInt(this.currentQuestion.point) || 0;
        console.log("selected Choice", selectedChoice);
        console.log("bandingkan", this.currentQuestion[this.currentQuestion.answer]);
        
        if(selectedChoice === this.currentQuestion[this.currentQuestion.answer]){
            await this.$store.dispatch("ClashOfDengue/sendScore", {correct: true, score: score*timeLeft,});
          this.resultAnswer= true;
        } else{
          await this.$store.dispatch("ClashOfDengue/sendScore", {correct: false, score:"0"});
          this.resultAnswer= false;
        }
      }
      console.log("current", this.currentQuestionIndex);
      console.log("length quiz", this.getQuiz.length - 1);
      
      
      if (this.currentQuestionIndex < this.getQuiz.length - 1) {
        this.$store.commit("ClashOfDengue/addCurrentQuiz",);
        this.resetTimer();
      }
      this.resultPage = true
    },
    handleNext(){
      this.resultPage = false;
      this.resultAnswer= false;
      if (this.currentQuestionIndex === this.getQuiz.length - 1) {
        this.lastQuestion = true;
      }
    },
    resetTimer() {
      const timeInSeconds = this.currentQuestion.time;
      this.duration = timeInSeconds;
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
/* Optional styling for the page */
</style>
