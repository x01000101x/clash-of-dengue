<template>
    <div class="container-result">
       <!-- Header Section -->
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
      
      <!-- Button Section -->
      <div class="content-container-result flex flex-col items-center">
          <h2>POINT SAAT INI:</h2>
          <p class="points">180</p>
          <button class="result-answer">JAWABAN BENAR</button>
          <button class="next-question">LANJUT PERTANYAAN</button>
      </div>
      
    </div>
  </template>
  
  <script>
  import '@/css/ResultAnswer.css';
  
  export default {
    name: 'AnswerResult',
    components : {
    },
    data() {
      return {
      };
    },
    methods: {
    },
  };
  </script>
  