<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="mosquito-logo">
          <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
      </div>
        <div class="posisi-icon-menu">
                    <div class="icon-container">
                        <div @click="toggleMenu" class="icon">
                          <img src="@/assets/School.png" alt="Menu Utama Icon" class="icon-image-menu" />
                        </div>
                    </div>
                </div>
        <div class="content-container">
            <div class="entries-section">
                <LeaderboardEntry
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
            <!-- <div>
        <button class="button-share" @click="captureAndShare">Share on IG</button>
    </div> -->
    </div>
</template>

<script>
import LeaderboardEntry from '@/components/LeaderBoardItem.vue';
import html2canvas from "html2canvas";

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
  async mounted(){
    await this.$store.dispatch("ClashOfDengue/getRank");
  },
  methods: {
    captureAndShare() {
      const elementToCapture = document.body; // Anda bisa mengubahnya menjadi elemen spesifik yang ingin di-capture

      html2canvas(elementToCapture).then(canvas => {
        // Mengonversi screenshot menjadi URL gambar
        const imageUrl = canvas.toDataURL("image/png");

        // Menyediakan opsi untuk mengunduh gambar
        this.downloadImage(imageUrl);

        // Arahkan pengguna ke Instagram untuk mengunggah gambar secara manual
        this.openInstagram(imageUrl);
      });
    },

        // Metode untuk mengunduh gambar
        downloadImage(imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "screenshot.png"; // Nama file untuk diunduh
      link.click();
    },
    openInstagram() {
     window.open('https://www.instagram.com/', '_blank');
    },
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
    background-image: url('@/assets/cod/mob-up.jpg');
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
  overflow-y: auto; /* Agar konten bisa digulir ke bawah jika melebihi batas */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}

.button-share {
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 5%;
}

.posisi-icon-menu {
    position: fixed;
    top: 2%;
    left: 2%;
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
    display: flex;
    flex-direction: column; /* Mengatur item agar tampil dalam satu kolom */
    gap: 10px; /* Jarak antar item */
    width: 100%;
    padding: 10px;
    align-items: center;
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

}

.mosquito-logo img {
    max-width: 100px;
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
@media (max-width: 480px) {
    .entries-section {
        gap: 0px; /* Menyesuaikan jarak antar elemen */
    }
}

@media (max-height: 625px) {
    .entries-section {
    }
}

@media (max-width: 765px) {
    .sponsor-logos img {
        max-width: 60%;
    }

    .icon {
  width: 30px;
  height: 30px;
  font-size: 20px;
  color: white;
}
.your-rank {
    width: 100%;
}
.icon-container p {
    font-size: 10px;
}

.icon-image-menu {
  width: 20px !important;
  height: auto;
}

.content-container {
        width: 80vw; /* Menyesuaikan lebar kontainer pada perangkat mobile */
        max-height: none;
    }
    .pagination-controls {
    font-size: 10px;
}
.your-rank {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
}
</style>
