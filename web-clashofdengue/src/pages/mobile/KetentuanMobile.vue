<template>
  <div class="background-page">
      <div class="sponsor-logos">
          <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
      </div>
      <div class="mosquito-logo">
        <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
      </div>
      <div class="content-container">
          <h2>Syarat & Ketentuan</h2>
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
          <button class="accept-button" @click="handleButtonClick">
              Register
          </button>
      </div>
      <div class="maskot-female">
          <img src="@/assets/cod/logo-fam5.png" alt="Maskot Perempuan" />
      </div>
      <div class="maskot-male">
          <img src="@/assets/cod/logo-fam4.png" alt="Maskot Laki-laki" />
      </div>
  </div>
</template>


<script>
export default {
  name: 'TermPage',
  methods: {
    handleButtonClick() {
          this.$router.push('/regis');
      },
  },
};
</script>

<style scoped>
.background-page {
  height: 100vh;
  height: 100dvh;
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

.mosquito-logo {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}

.mosquito-logo img {
  max-width: 150px;
  height: auto;
}

.content-container {
  background-color: white;
  border-radius: 45px;
  padding: 30px 30px;
  max-width: 90vw; /* Maintain this size */
  max-height: 60vh; /* Maintain height limit */
  overflow-y: auto; /* Enable vertical scrolling */
  margin-top: 10%;
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

/* New styles for the button */
.accept-button {
  background-color: var(--secondary-color);
  color: white;
  font-weight: 700;
  padding: 10px 30px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  width: 80vw; /* Maintain consistent width */
  text-align: center;
  max-width: 90%; /* Allow some space on smaller screens */
}


/* Maskot Female */
.maskot-female {
  position: absolute;
  bottom: -5%;
  left: 0%;
}

.maskot-female img {
  max-width: 100px;
  height: auto;
}

/* Maskot Male */
.maskot-male {
  position: absolute;
  bottom: -2%;
  right: 0%;
}

.maskot-male img {
  width: 100px; 
  height: auto;
}

/* Animasi untuk efek floating */
@keyframes floating {
  0% {
      transform: translate(0, 0); 
  }
  50% {
      transform: translate(0, -10px);
  }
  100% {
      transform: translate(0, 0);
  }
}

/* Media Query untuk tampilan mobile */
@media (max-width: 768px) {
  .sponsor-logos img {
      max-width: 80%;
  }

  .maskot-female img {
  max-width: 100px;
  height: auto;
}
.maskot-male img {
  max-width: 150px;
  height: auto;
}

.mosquito-logo img {
  max-width: 150px;
  height: auto;
}

  .content-container {
      padding: 20px 30px;
      margin-top: 27%;
      max-height: 60vh; /* Maintain height limit for mobile */
      overflow-y: auto; /* Enable vertical scrolling */
  }

  .content-container h2 {
      font-size: 30px;
  }

  .accept-button {
      font-size: 14px;
      padding: 8px 20px;
  }
}

@media (max-width: 768px) and (max-height: 670px) {
  .sponsor-logos img {
      max-width: 70%;
      margin-bottom: 20px;
  }

  .mosquito-logo img {
  max-width: 150px;
  height: auto;
}

.maskot-female img {
  max-width: 70px;
  height: auto;
}
.maskot-male img {
  max-width: 70px;
  height: auto;
}

  .content-container {
      padding: 20px 30px;
      margin-top:35%;
      max-height: 50vh; /* Sesuaikan max-height dengan kondisi viewport */
      overflow-y: auto;
  }

  .content-container h2 {
      font-size: 30px;
  }

  .accept-button {
      font-size: 14px;
      padding: 8px 20px;
  }
}
</style>
