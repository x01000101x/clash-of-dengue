<template>
  <div class="leaderboard-page">
    <!-- Header -->
    <div class="header-rank">
        <div class="header-right">
          <div class="menu-icon">
              <div class="icon-circle" @click="backToMenu">
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
        v-for="(entry, index) in paginatedEntries"
        :key="entry.id"
        :rank="(currentPage - 1) * entriesPerPage + index + 1"
        :photo="entry.photo || require('@/assets/user.png')"
        :name="entry.name"
        :school="entry.school_name"
        :answerScore="entry.answerScore || 0"
        :totalScore="entry.total_score || 0"
      />
    </div>

    <!-- Pagination Controls -->
    <div class="pagination-controls">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <h2 class="page-info">{{ currentPage }} dari {{ totalPages }}</h2>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
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
          currentPage: 1, // Halaman saat ini
          entriesPerPage: 5, // Jumlah entri per halaman
      };
  },
  computed: {
      entries() {
          const rankData = this.getAllRank || []; // Ambil data dari computed
          console.log("rank data", rankData);

          return rankData.map(user => {
              return {
                  id: user.id,
                  photo: user.image, // Gambar jika ada
                  name: user.name,
                  school_name: user.school_name,
                  answerScore: user.correct_answer || 0, // Atur skor jawaban jika diperlukan
                  total_score: user.total_score || 0, // Total skor
              };
          });
      },
      paginatedEntries() {
          const start = (this.currentPage - 1) * this.entriesPerPage; // Hitung index mulai
          const end = start + this.entriesPerPage; // Hitung index akhir
          return this.entries.slice(start, end); // Mengambil subset dari entries
      },
      totalPages() {
          return Math.ceil(this.entries.length / this.entriesPerPage); // Menghitung total halaman
      },
      getAllRank() {
          return this.$store.getters["ClashOfDengue/getAllRank"];
      },
  },
  methods: {
      backToMenu() {
          this.$router.push('/'); 
      },
      nextPage() {
          if (this.currentPage < this.totalPages) {
              this.currentPage++;
          }
      },
      prevPage() {
          if (this.currentPage > 1) {
              this.currentPage--;
          }
      },
  },
};
</script>

<style scoped>
.pagination-controls {
    display: flex;
    justify-content: center;
    align-items: center; /* Tambahkan untuk meratakan vertikal */
    margin-top: 20px;
    padding: 10px; /* Tambahkan padding untuk mempercantik */
    background-color: #ff007f; /* Warna latar belakang untuk kontrol */
    border-radius: 8px; /* Membuat sudut lebih bulat */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Tambahkan bayangan untuk efek kedalaman */
}

.pagination-controls button {
    width: 100px; /* Tetapkan lebar tombol agar sama */
    padding: 10px; /* Menambah padding untuk tombol */
    background-color: #0097a7; /* Warna tombol */
    color: white; /* Warna teks */
    border: none; /* Hapus border default */
    border-radius: 5px; /* Sudut bulat untuk tombol */
    cursor: pointer; /* Ubah kursor saat hover */
    transition: background-color 0.3s ease, transform 0.2s; /* Transisi halus untuk hover */
}

.pagination-controls button:hover {
    background-color: #008080; /* Warna saat hover */
    transform: scale(1.05); /* Efek sedikit memperbesar saat hover */
}

.pagination-controls button:disabled {
    background-color: #035761; /* Warna untuk tombol yang dinonaktifkan */
    cursor: not-allowed; 
}

.page-info {
    margin: 0 20px; /* Memberikan jarak horizontal */
    color: white; /* Warna teks informasi halaman */
}
</style>
