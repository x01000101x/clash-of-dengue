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
              <li>1. Peserta: Terbuka untuk peserta undangan Clash of Dengue (sekolah/office terpilih)</li>
              <li>2. Waktu pendaftaran: Pendaftaran akan dibuka pada tanggal 15 November 2024 - 22 November 2024</li>
              <li>3. Pendaftaran: Pendaftaran dapat dilakukan pada website CegahDBD.com</li>
              <li>4. Perangkat: Peserta dapat menggunakan HP masing-masing atau dapat melalui website</li>
              <li>5. Waktu Pengerjaan: Waktu pengerjaan akan dimulai pada pukul 13.00 - 15.00 setiap hari dari tanggal 23 November 2024 sampai tanggal 28 November 2024</li>
              <li>6. Kontak: Jika mengalami kendala dan pertanyaan seputar ini bisa menghubungi nomor 0813 9999 7218</li>
          </ul>
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
  position: absolute;
  top: 25%;
  left: auto; 
  z-index: 2;
  overflow-y: auto;
}

.content-container h2 {
  font-size: 50px;
  font-weight: 1000;
  margin-bottom: 20px;
  text-align: center;
}

.button-container-term {
  position: absolute; /* Keep absolute positioning */
  bottom: 5%; /* Adjust this value to move it above the bottom edge */
  left: 50%; /* Position it from the left side */
  transform: translateX(-50%); /* Center it horizontally */
  display: flex;
  justify-content: center; /* Center any children inside */
  z-index: 999; /* Ensure it's above other elements */
  width: auto; /* Allow width to be determined by content */
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
  bottom: -1%;
  left: 0%;
}

.maskot-female img {
  max-width: 250px;
  height: auto;
}

/* Maskot Male */
.maskot-male {
  position: absolute;
  top: 10%;
  left: 30%;
  transform: translateX(-50%);
  animation: floating 3s ease-in-out infinite;
  z-index: 1;
}

.maskot-male img {
  width: 200px; 
  height: auto;
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

@media (max-height: 780px) {
  .content-container {
    top: 15%;
    height: 60vh;
  }

  .mosquito-logo img {
  max-width: 200px;
  height: auto;
}
}
</style>
