<template>
  <div class="background-page">
    <div class="sponsor-logos">
      <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
    </div>
    <div class="mosquito-logo">
      <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
    </div>
    <div class="content-container">
      <h2>Makna dan Tujuan</h2>
      <ul>
        <li>
          Meningkatkan kesadaran masyarakat tentang bahaya Demam Berdarah
          Dengue (DBD) dan pentingnya pencegahan dini
        </li>
        <li>
          Melalui kompetisi yang interaktif dan menyenangkan, peserta
          diharapkan tidak hanya memahami cara-cara pencegahan DBD tetapi
          juga menjadi agen perubahan di lingkungan masyarakat dan rumah mereka
        </li>
      </ul>
      <div class="button-container-regis">
        <button class="register-button" @click="pushToRegis">REGISTER</button>
      </div>
    </div>
    <div class="maskot-female">
      <img src="@/assets/cod/logo-family1.png" alt="Maskot Perempuan" />
    </div>
    <div class="maskot-male">
      <img src="@/assets/cod/logo-family2.png" alt="Maskot Laki-laki" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundPage',
  methods: {
    async pushToRegis() {
        this.$router.push('/term');
    },
  }
};
</script>

<style scoped>
.background-page {
  height: 100vh;
  background-image: url('@/assets/cod/backweb2.png');
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
  position: absolute; /* Tetap absolute untuk tampilan web */
  top: 25%;
  left: auto; 
  z-index: 2;
}

.content-container h2 {
  font-size: 50px;
  font-weight: 1000;
  margin-bottom: 20px;
}

.content-container ul {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 30px;
}

.content-container li {
  font-size: 25px;
}

.button-container-regis {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
}

.register-button {
  background-color: var(--secondary-color);
  color: white;
  font-weight: 700;
  padding: 10px 30px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

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

.maskot-female {
  position: absolute;
  bottom: 0%;
  left: 0%;
  z-index: 999;
}

.maskot-female img {
  max-width: 250px;
  height: auto;
}

.maskot-male {
  position: absolute;
  bottom: -5%;
  right: 0%;
}

.maskot-male img {
  width: 250px; 
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
    max-height: 70vh; /* Batasi tinggi kontainer di mobile */
    overflow-y: auto; /* Aktifkan scroll vertikal */
    top: 15%; /* Sesuaikan posisi untuk mobile */
  }

  .content-container h2 {
    font-size: 30px;
  }

  .content-container li {
    font-size: 20px;
  }

  .register-button {
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
