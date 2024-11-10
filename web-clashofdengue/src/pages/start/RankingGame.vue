<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="posisi-icon-menu">
                    <div class="icon-container">
                        <div @click="toggleMenu" class="icon">
                          <img src="@/assets/School.png" alt="Menu Utama Icon" class="icon-image-menu" />
                        </div>
                        <p>Menu</p>
                    </div>
                </div>
        <div class="content-container">
            <div class="entries-section">
                <LeaderboardEntry
                class="leaderboard"
                  v-for="(entry, index) in paginatedEntries"
                  :key="entry.id"
                  :rank="(currentPage - 1) * entriesPerPage + index + 1"
                  :name="entry.name"
                  :school="entry.school_name"
                  :totalScore="entry.total_score || 0"
                  :ava="entry.image? entry.image : '0'"
                />
              </div>
          
              <!-- Pagination Controls -->
              <div class="pagination-controls">
                <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
                <h2 class="page-info">{{ currentPage }} dari {{ totalPages }}</h2>
                <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
              </div>
        </div>
        <div class="your-rank">
            <LeaderboardEntry
                  :rank="getUserRank? getUserRank : 0"
                  :name="profileUser.name"
                  :school="profileUser.school_name"
                  :totalScore="scoreUser.total_score? scoreUser.total_score : 0"
                  :ava="userAva? userAva : '0'"
                />
        </div>
        <div class="maskot-female">
            <img src="@/assets/cod/maskot-woman.png" alt="Maskot Perempuan" />
        </div>
        <div class="maskot-male">
            <img src="@/assets/cod/maskot-man.png" alt="Maskot Laki-laki" />
        </div>
    </div>
</template>

<script>
import LeaderboardEntry from '@/components/LeaderBoardItem.vue';

export default {
  name: 'LeaderboardPage',
  components: {
      LeaderboardEntry,
  },
  data() {
      return {
          currentPage: 1, // Halaman saat ini
          entriesPerPage: 8, // Jumlah entri per halaman
      };
  },
  computed: {
    scoreUser(){
          return this.$store.getters["ClashOfDengue/getScoreUser"];
        },
    profileUser(){
        return this.$store.getters["ClashOfDengue/getUserProfile"];
      },
        getUserRank(){
            return this.$store.getters["ClashOfDengue/getUserRank"];
        },
        userAva() {
        return this.profileUser.image ? this.profileUser.image : "0";
      },
      avatars() {
        return this.$store.getters["ClashOfDengue/getAvatars"];
      },
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
                  image: user.image
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
      toggleMenu(){
        this.$router.push('/start/dashboard');
      }
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


.content-container {
    background-color: white;
    border-radius: 25px;
    width: 60vw;
    max-height: auto; /* Limit height for mobile */
    overflow-y: auto; /* Enable vertical scrolling */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
    text-align: center; /* Center text */
    margin-top: 20px;
}

.posisi-icon-menu {
    position: fixed;
    top: 0;
    left: 0;
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
    color: white;
    font-weight: 500;
}

.icon-image-menu {
  width: 45px !important;
  height: auto;
}

.your-rank {
    width: 30vw;
}

.entries-section {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two columns for larger screens */
    gap: 10px 40px;
    width: 100%;
    padding: 10px
}

/* Other styles remain unchanged */
.sponsor-logos {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.sponsor-logos img {
    max-width: 1000px;
    height: auto;
}

.mosquito-logo {
    position: absolute;
    top: 20%;
    left: 50%; /* Center the mosquito logo */
    transform: translate(-50%, 0); /* Center horizontally */
    animation: floating 3s ease-in-out infinite;
    z-index: 999;
}

.mosquito-logo img {
    max-width: 150px;
    height: auto;
}

.maskot-female {
    position: absolute;
    bottom: -25%;
    right: -5%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-female img {
    max-width: 250px;
    height: auto;
}

.maskot-male {
    position: absolute;
    bottom: -25%;
    left: 10%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-male img {
    width: 350px; 
    height: auto;
}

.pagination-controls {
    display: flex;
    justify-content: center;
    align-items: center; /* Tambahkan untuk meratakan vertikal */
    padding: 10px; /* Tambahkan padding untuk mempercantik */
    border-radius: 8px; /* Membuat sudut lebih bulat */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Tambahkan bayangan untuk efek kedalaman */
    margin-bottom: 25px;
}

.pagination-controls h2{
    color: var(--secondary-color);
    margin: 10px;
    font-weight: 600;
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
/* Floating animation */
@keyframes floating {
    0% {
        transform: translate(-50%, 0); 
    }
    50% {
        transform: translate(-50%, -10px);
    }
    100% {
        transform: translate(-50%, 0);
    }
}

/* Media Query for mobile view */
@media (max-width: 1080px) {
    .maskot-male img {
    width: 250px; 
    height: auto;
}
.maskot-female img {
    width: 200px; 
    height: auto;
}
}

@media (max-height: 625px) {
    .entries-section {
        margin-top: 20px;
    }
}
</style>
