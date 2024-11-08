<template>
  <div class="background-page">
      <div class="sponsor-logos">
          <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
      </div>
      <div class="content-container">
          <h2>Syarat dan Ketentuan</h2>
          <ul class="terms-list">
              <li>Peserta: Terbuka untuk siswa/siswi aktif di sekolah.</li>
              <li>Waktu pendaftaran: Pendaftaran akan dibuka pada tanggal 15 November 2024 - 22 November 2024.</li>
              <li>Pendaftaran: Pendaftaran dapat dilakukan pada website CegahDBD.com.</li>
              <li>Perangkat: Peserta dapat menggunakan HP masing-masing atau dapat melalui website.</li>
              <li>Waktu Pengerjaan: Waktu pengerjaan akan dimulai pada pukul 13.00 - 15.00 setiap hari dari tanggal 15 November 2024 sampai tanggal 23 November 2024.</li>
              <li>Kontak: Jika mengalami kendala dan pertanyaan seputar ini bisa menghubungi nomor 0813 9999 7218.</li>
          </ul>
      </div>
      <div class="button-container-term">
          <label class="checkbox-container">
              <input type="checkbox" class="checkbox" @change="handleCheckboxChange" />
              <span class="checkmark"></span>
              Kamu sudah siap untuk ikut Clash Of Dengue? Pahami misinya, kuatkan aksi nyata, dan tunjukkan bahwa kamu bisa jadi pahlawan DBD!
          </label>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TermPage',
  methods: {
      handleCheckboxChange(event) {
          if (event.target.checked) {
              this.$router.push('/regis');
          }
      },
  },
};
</script>

<style scoped>
.background-page {
  height: 100vh;
  height: 100dvh; /* new browsers */
  width: 100%;
  background-image: url('@/assets/cod/bg-mobile.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.sponsor-logos {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.sponsor-logos img {
  max-width: 1000px;
  height: auto;
}

.content-container {
  background-color: white;
  border-radius: 45px;
  padding: 30px 50px;
  max-width: 90vw; /* Maintain this size */
  max-height: 60vh; /* Maintain height limit */
  overflow-y: auto; /* Enable vertical scrolling */
  margin: 40px; /* Maintain margin */
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  position: relative; /* Change to relative */
  left: auto;
  z-index: 2;
}

.content-container h2 {
  font-size: 50px;
  font-weight: 1000;
  margin-bottom: 20px;
  text-align: center; /* Center the heading */
}

.terms-list {
  font-size: 20px; /* Adjust font size for the list */
  list-style-type: disc; /* Add bullets */
  margin: 0; /* Remove default margin */
  padding-left: 20px; /* Add padding for list items */
}

.terms-list li {
  margin-bottom: 10px; /* Space between list items */
}

.button-container-term {
  display: flex;
  justify-content: center;
  position: relative; /* Change to relative positioning */
  bottom: 2%;
  z-index: 999;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer; /* Mengubah pointer saat hover */
  margin-bottom: 10px; /* Jarak bawah untuk checkbox */
  background-color: var(--secondary-color);
  color: white;
  font-weight: 700;
  padding: 10px 30px;
  border: none;
  border-radius: 20px;
  margin: 20px;
  width: 80vw; /* Tetap dengan lebar yang konsisten */
  font-size: 15px;
}

.checkbox {
  display: none; /* Sembunyikan checkbox default */
}

.checkmark {
  height: 30px; /* Tinggi kotak centang */
  width: 30px; /* Lebar kotak centang */
  background-color: #eee; /* Warna latar belakang kotak */
  border: 2px solid #ccc; /* Border kotak */
  border-radius: 0; /* Kotak, bukan bulat */
  margin-right: 10px; /* Jarak antara checkbox dan teks */
  position: relative; /* Posisi relatif untuk checkmark */
}

.checkbox:checked + .checkmark {
  background-color: var(--primary-color); /* Ganti warna saat dicentang */
  border-color: var(--primary-color); /* Ganti warna border saat dicentang */
}

.checkmark:after {
  content: ""; /* Membuat konten kosong */
  display: none; /* Sembunyikan konten awal */
  position: absolute; /* Posisi absolut untuk centang */
  left: 9px; /* Posisikan centang lebih ke kanan */
  top: 3px; /* Atur posisi vertikal centang */
  width: 5px; /* Lebar centang */
  height: 12px; /* Tinggi centang */
  border: solid white; /* Warna centang */
  border-width: 0 2px 2px 0; /* Tepi centang */
  transform: rotate(45deg); /* Memutar centang */
}

.checkbox:checked + .checkmark:after {
  display: block; /* Tampilkan centang saat dicentang */
}


/* Animasi untuk efek floating */
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

/* Media Query untuk tampilan mobile */
@media (max-width: 768px) {
  .sponsor-logos img {
      max-width: 80%;
  }

  .content-container {
      padding: 20px 30px;
      margin: 20px;
      max-height: 70vh; /* Maintain height limit for mobile */
      overflow-y: auto; /* Enable vertical scrolling */
  }

  .content-container h2 {
      font-size: 30px;
  }
}
</style>
