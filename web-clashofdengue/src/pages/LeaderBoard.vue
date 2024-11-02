<template>
    <div class="leaderboard-page">
      <!-- Header -->
       <div class="header-rank">
           <div class="header-right">
             <div class="menu-icon">
                 <div class="icon-circle">
                     <img src="@/assets/School.png" alt="Menu Icon" class="icon-image" />
                   </div>
               </div>
           </div>
           <div class="header-logo">
               <img src="@/assets/logo.png" alt="Clash Dengue Logo" class="logo" />
           </div>
           
           <!-- Title Section -->
           <div class="title-section">
               <h2 class="title">TOP 100 SEMENTARA</h2>
            </div>
        </div>
            
      <!-- Leaderboard Entries -->
      <div class="entries-section">
        <LeaderboardEntry
          v-for="entry in entries"
          :key="entry.rank"
          :rank="entry.rank"
          :photo="entry.photo"
          :name="entry.name"
          :school="entry.school"
          :answerScore="entry.answerScore"
          :totalScore="entry.totalScore"
        />
      </div>
  
      <!-- Next Button -->
      <button class="next-button">Next >></button>
    </div>
  </template>
  
  <script>
  import '@/css/Leaderboard.css';
  import LeaderboardEntry from '@/components/LeaderBoardItem.vue';
  
  export default {
    name: 'LeaderboardPage',
    components: {
      LeaderboardEntry,
    },
    data() {
      return {
        entries: [
          { rank: 1, photo: require('@/assets/user.png'), name: 'Nama Siswa', school: 'Asal Sekolah', answerScore: 20, totalScore: 1000 },
          { rank: 2, photo: require('@/assets/user.png'), name: 'Nama Siswa', school: 'Asal Sekolah', answerScore: 19, totalScore: 950 },
          { rank: 3, photo: require('@/assets/user.png'), name: 'Nama Siswa', school: 'Asal Sekolah', answerScore: 18, totalScore: 900 },
          // Add more entries as needed
        ],
      };
    },
  };
  </script>