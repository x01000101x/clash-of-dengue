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
          <ol class="terms-list">
              <li>Kompetisi ini terbuka untuk peserta undangan Clash of Dengue dari sekolah/kantor terpilih</li>
              <li>Pendaftaran akan dibuka mulai tanggal 15 - 22 November 2024</li>
              <li>Peserta dapat mendaftar melalui situs website <a href="https://www.cegahdbd.com/" target="_blank">www.CegahDBD.com</a></li>
              <li>Peserta dapat mengikuti kompetisi menggunakan ponsel/perangkat pribadi atau melalui situs website</li>
              <li>Kompetisi akan berlangsung setiap hari pada pukul 13.00 - 15.00, dimulai tanggal 23-28 November 2024.</li>
              <li>Jika mengalami kendala atau memiliki pertanyaan, silahkan hubungi nomor 0813 9999 7218</li>
          </ol>
      </div>
      <div class="button-container-term">
          <label class="checkbox-container">
              <input type="checkbox" class="checkbox" @change="handleCheckboxChange" />
              <span class="checkmark"></span>
              <span> Kamu sudah siap untuk ikut Clash Of Dengue? <a href="https://www.takeda.com/id-id/pemberitahuan-privasi/" target="_blank">Pahami</a> misinya, kuatkan aksi nyata, dan tunjukkan bahwa kamu bisa jadi pahlawan DBD!</span>
            </label>
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
  name: 'TermPage',
  computed: {
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
  height: 100dvh;
  width: 100%;
  background-image: url('@/assets/cod/backmob2.jpg');
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
  border-radius: 40px;
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

.checkbox-container a {
  text-decoration: underline; /* Menambahkan garis bawah pada tautan */
  color: white; /* Menjaga warna tautan sesuai dengan tema */
  font-weight: bold; /* Menambahkan ketebalan pada teks agar lebih terlihat */

}

.checkbox-container a:hover {
  text-decoration: underline; /* Menjaga garis bawah saat hover */
  color: var(--primary-color); /* Ubah warna tautan saat hover */
}

.content-container h2 {
  font-size: 50px;
  font-weight: 1000;
  margin-bottom: 20px;
  text-align: center; /* Center the heading */
}

.terms-list {
  font-size: 15px; /* Adjust font size for the list */
  list-style-type: disc; /* Add bullets */
  margin: 0; /* Remove default margin */
  padding-left: 20px; /* Add padding for list items */
  list-style-type: decimal; 
}

.terms-list a{
  cursor: pointer;
  text-decoration: underline;
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

/* Checkbox and checkmark styles */
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
  font-size: 9px;
}

.checkbox {
  display: none; /* Sembunyikan checkbox default */
}

.checkmark {
  height: 25px; /* Tinggi checkmark */
  width: 25px; /* Lebar checkmark */
  background-color: #eee; /* Warna latar belakang */
  border: 2px solid #ccc; /* Border kotak centang */
  /* Hapus border-radius agar kotaknya menjadi kotak, bukan bundar */
  border-radius: 0; 
  margin-right: 10px; /* Jarak antara checkbox dan teks */
  position: relative; /* Posisi relatif untuk centang */
}

.checkbox:checked + .checkmark {
  background-color: var(--primary-color); /* Ganti warna saat dicentang */
  border-color: var(--primary-color); /* Ganti warna border saat dicentang */
}

.checkmark:after {
  content: ""; /* Membuat konten kosong */
  display: none; /* Sembunyikan konten awal */
  position: absolute; /* Posisi absolut untuk centang */
  left: 8px; /* Posisikan centang sedikit lebih ke kanan */
  top: 3px; /* Atur posisi vertikal centang */
  width: 5px; /* Lebar centang */
  height: 10px; /* Tinggi centang */
  border: solid white; /* Warna centang */
  border-width: 0 2px 2px 0; /* Menentukan tepi yang diinginkan */
  transform: rotate(45deg); /* Memutar centang */
}

.checkbox:checked + .checkmark:after {
  display: block; /* Tampilkan centang saat dicentang */
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
  width: 150px; 
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

  .maskot-female {
    bottom: -1%;
  }

  .maskot-female img {
  max-width: 190px;
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
      margin-top: 13%;

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

.maskot-female {
  bottom: -1%;
}

.maskot-female img {
  max-width: 120px;
  height: auto;
}
.maskot-male {
  bottom: -2%;
}
.maskot-male img {
  max-width: 90px;
  height: auto;
}

  .content-container {
      padding: 20px 30px;
      margin-top:30%;
      max-height: 50vh; /* Sesuaikan max-height dengan kondisi viewport */
      overflow-y: auto;
  }

  .content-container h2 {
      font-size: 30px;
      margin-top: 10%;
  }

  .accept-button {
      font-size: 14px;
      padding: 8px 20px;
  }
}
</style>
