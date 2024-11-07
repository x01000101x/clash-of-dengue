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
        <p>{{lorem}}</p>
      </div>
      <div class="button-container-term">
          <label class="checkbox-container">
            <input type="checkbox" class="checkbox" @change="handleCheckboxChange" />
            <span class="checkmark"></span>
            Kamu sudah siap untuk ikut Clash Of Dengue? Pahami misinya, kuatkan aksi nyata, dan tunjukkan bahwa kamu bisa jadi pahlawan DBD!
          </label>
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
export default {
  name: 'TermPage',
  computed: {
    lorem() {
      return this.$store.getters["ClashOfDengue/getLorem"];
    },
  },
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
  max-width: 1000px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 40px;
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  position: absolute; /* Tetap absolute untuk tampilan web */
  top: 30%;
  left: auto; 
  z-index: 2;
}


.content-container h2 {
  font-size: 50px;
  font-weight: 1000;
  margin-bottom: 20px;
}

.content-container p {
    max-height: 30vh; /* Batasi tinggi kontainer */
    overflow-y: auto; /* Aktifkan scroll vertikal */
  font-size: 20px; 
  margin-bottom: 20px;
}

.button-container-term {
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 22%;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}

.mosquito-logo {
  position: absolute;
  top: 10%;
  left: 50%;
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
  bottom: -10%;
  left: 0%;
}

.maskot-female img {
  max-width: 150px;
  height: auto;
}

.maskot-male {
  position: absolute;
  bottom: -10%;
  right: 0%;
}

.maskot-male img {
  width: 250px; 
  height: auto;
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
  cursor: pointer;
  margin: 20px;
  width: 80vw;
  font-size: 15px;
}

.checkbox {
  display: none; /* Sembunyikan checkbox default */
}

.checkmark {
  height: 20px; /* Tinggi checkmark */
  width: 20px; /* Lebar checkmark */
  background-color: #eee; /* Warna latar belakang */
  border-radius: 4px; /* Sudut membulat */
  margin-right: 10px; /* Jarak antara checkbox dan teks */
  position: relative; /* Posisi relatif untuk centang */
}

.checkbox:checked + .checkmark {
  background-color: var(--primary-color); /* Ganti warna saat dicentang */
}

.checkmark:after {
  content: ""; /* Membuat konten kosong */
  display: none; /* Sembunyikan konten awal */
  position: absolute; /* Posisi absolut untuk centang */
  left: 6px; /* Posisikan centang */
  top: 2px; /* Atur posisi vertikal centang */
  width: 5px; /* Lebar centang */
  height: 10px; /* Tinggi centang */
  border: solid white; /* Warna centang */
  border-width: 0 2px 2px 0; /* Menentukan tepi yang diinginkan */
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
    max-height: 70vh; /* Batasi tinggi kontainer di mobile */
    overflow-y: auto; /* Aktifkan scroll vertikal */
    top: 20%; /* Sesuaikan posisi untuk mobile */
  }

  .content-container h2 {
    font-size: 30px;
  }

  .register-term {
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

@media (max-height: 667px) {
    .checkbox-container {
        font-size: 10px;
      }

      .content-container h2 {
    font-size: 25px;
  }
  .mosquito-logo img {
    max-width: 100px;
  }
}
</style>
