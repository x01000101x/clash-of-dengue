<template>
    <div>
      <QuestionDisplay
        :questionNumber="currentQuestionIndex + 1"
        :question="questions[currentQuestionIndex].question"
        :choices="questions[currentQuestionIndex].choices"
        :remainingTime="remainingTime"
        :progress="progress"
        @answer-selected="handleAnswer"
      />
    </div>
  </template>
  
  <script>
    import QuestionDisplay from '@/components/QuestionDisplay.vue';

  export default {
    name: 'QuizPage',
    components: {
        QuestionDisplay,
    },
    data() {
      return {
        questions: [
          {
            question: 'Siapakah Presiden Pertama Republik Indonesia?',
            choices: ['WR. Supratman', 'Sutan Sjahrir', 'Ir. Sukarno', 'Moh. Hatta'],
          },
          // Add more questions as needed
        ],
        currentQuestionIndex: 0,
        remainingTime: '00:30',
        progress: 80,
      };
    },
    methods: {
      handleAnswer(selectedAnswer) {
        console.log('Selected Answer:', selectedAnswer);
        // Move to the next question or process the answer here
        if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++;
          this.resetTimer();
        } else {
          // End the quiz
          alert('Quiz selesai!');
        }
      },
      resetTimer() {
        // Reset timer logic if necessary
        this.remainingTime = '00:30';
        this.progress = 100;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional styling for the page */
  </style>
  