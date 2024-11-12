<template>
  <div class="background-page">
      <div class="sponsor-logos">
          <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
      </div>
      <div class="mosquito-logo">
          <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
      </div>
      <div class="content-container">
          <h2>Syarat dan Ketentuan</h2>
          <ul class="terms-list">
              <li>Peserta: Terbuka untuk siswa/siswi aktif di sekolah</li>
              <li>Waktu pendaftaran: Pendaftaran akan dibuka pada tanggal 15 November 2024 - 22 November 2024</li>
              <li>Pendaftaran: Pendaftaran dapat dilakukan pada website CegahDBD.com</li>
              <li>Perangkat: Peserta dapat menggunakan HP masing-masing atau dapat melalui website</li>
              <li>Waktu Pengerjaan: Waktu pengerjaan akan dimulai pada pukul 13.00 - 15.00 setiap hari dari tanggal 15 November 2024 sampai tanggal 23 November 2024</li>
              <li>Kontak: Jika mengalami kendala dan pertanyaan seputar ini bisa menghubungi nomor 0813 9999 7218</li>
          </ul>
          <div class="button-container-term">
              <button class="accept-button" @click="handleButtonClick">
                  Register
              </button>
          </div>
      </div>
      <div class="maskot-female">
          <img src="@/assets/cod/logo-fam5.png" alt="Maskot Perempuan" />
      </div>
      <div class="maskot-male">
          <img src="@/assets/cod/logo-fam3.png" alt="Maskot Laki-laki" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'TermPage',
  computed: {
  },
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
  background-image: url('@/assets/cod/bg-web.png');
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
  max-width: 1000px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 40px;
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 25%;
  left: auto; 
  z-index: 2;
}

.content-container h2 {
  font-size: 50px;
  font-weight: 1000;
  margin-bottom: 20px;
  text-align: center;
}

.terms-list {
  font-size: 20px;
  margin: 0;
  padding-left: 20px;
}

.terms-list li {
  margin-bottom: 10px;
}

.button-container-term {
  position: absolute;
  bottom: 5%;
  right: 0%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 999;
}

.accept-button {
  background-color: var(--secondary-color);
  color: white;
  font-weight: 700;
  padding: 10px 30px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  max-width: 90%; /* Adjust for mobile view */
  text-align: center;
}

/* Mosquito logo */
.mosquito-logo {
  position: absolute;
  top: 10%;
  left: 75%;
  transform: translateX(-50%);
  animation: floating 3s ease-in-out infinite;
  z-index: 999;
}

.mosquito-logo img {
  max-width: 250px;
  height: auto;
}

/* Maskot Female */
.maskot-female {
  position: absolute;
  bottom: -10%;
  left: 0%;
}

.maskot-female img {
  max-width: 150px;
  height: auto;
}

/* Maskot Male */
.maskot-male {
  position: absolute;
  top: 10%;
  left: 25%;
  transform: translateX(-50%);
  animation: floating 3s ease-in-out infinite;
  z-index: 1;
}

.maskot-male img {
  width: 200px; 
  height: auto;
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
      max-height: 70vh;
      overflow-y: auto;
      top: 15%;
  }

  .content-container h2 {
      font-size: 30px;
  }

  .accept-button {
      font-size: 14px;
      padding: 8px 20px;
  }

  .mosquito-logo img {
      max-width: 150px;
  }

  .maskot-female img {
      max-width: 100px;
  }

  .maskot-male img {
      width: 150px;
  }
}
</style>
