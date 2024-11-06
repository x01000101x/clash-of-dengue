<template>
    <div class="container-result">
        <div class="header-result">
            <div class="menu-icon">
                <div class="icon-circle">
                    <img src="@/assets/School.png" alt="Menu Utama Icon" class="icon-image" />
                </div>
            </div>
        </div>
      <div class="flex flex-col items-center">
        <img src="@/assets/logo.png" alt="Clash Dengue" class="logo-result" />
      </div>
      
      <div class="content-container-result flex flex-col items-center">
          <h2>POINT SAAT INI:</h2>
          <p class="points">{{scoreUser.total_score}}</p>
          <button class="result-answer">{{isCorrect ? "JAWABAN BENAR" : "JAWABAN SALAH"}}</button>
          <button class="next-question" @click="nextQuestion">{{isLast ? "KEMBALI KE MENU" : "LANJUT PERTANYAAN"}}</button>
      </div>
      
    </div>
  </template>
  
  <script>
  import '@/css/ResultAnswer.css';
  
  export default {
    name: 'AnswerResult',
    props: {
        isCorrect: Boolean,
        isLast: Boolean,
    },
    data() {
      return {
      };
    },
    computed: {
      scoreUser(){
        return this.$store.getters["ClashOfDengue/getScoreUser"];
      },
    },
    methods: {
      nextQuestion() {
        this.$emit('next-question');
        if(this.isLast){
          this.$router.push('/');
        }
      }
    },
  };
  </script>
  