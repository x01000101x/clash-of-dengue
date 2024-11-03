<template>
  <div class="container">
    <!-- Header Section -->
    <div class="header flex flex-col items-center">
      <img src="@/assets/logo.png" alt="Clash Dengue" class="logo-home" />
    </div>
    
    <!-- Button Section -->
    <div class="button-container flex flex-col items-center">
      <template v-if="!viewProfile">
        <h2>POINT SAAT INI:</h2>
        <p class="points">180</p>
        <button @click="goToQuiz" class="new-game-button">NEW GAME</button>
      </template>
      <!-- Icons Section -->
      <div class="icons">
        <div class="icon-container">
          <div class="icon">
            <i class="fas fa-chart-simple"></i>
          </div>
          <p>Top List</p>
        </div>
        <div v-if="!viewProfile" class="icon-container">
          <div @click="toggleProfile" class="icon">
            <i class="fas fa-user-group"></i>
          </div>
          <p>Profil</p>
        </div>
        <div v-if="viewProfile" class="icon-container">
          <div @click="toggleMenu" class="icon">
            <img src="@/assets/School.png" alt="Menu Utama Icon" class="icon-image-dashboard" />
          </div>
          <p>Menu Utama</p>
        </div>
      </div>

      <!-- Ranking Section -->
      <div v-if="!viewProfile" class="ranking">
        <h2>Peringkat Anda Saat Ini :</h2>
        <p class="rank">205</p>

        <!-- Pie Chart -->
        <PieChart />
      </div>
      <div v-if="viewProfile" class="profile">
        <ProfileForm />
      </div>
    </div>
    
  </div>
</template>

<script>
import '@/css/Dashboard.css';
import PieChart from '@/components/PieChart.vue'
import ProfileForm from '@/components/formProfile.vue';

export default {
  name: 'ClashDengue',
  components : {
    PieChart,
    ProfileForm,
  },
  data() {
    return {
      viewProfile: false,
    };
  },
  methods: {
    toggleProfile() {
      this.viewProfile = true;
    },
    toggleMenu() {
      this.viewProfile = false;
    },
    goToQuiz() {
      this.$router.push('/quiz');
    },
  },
};
</script>
