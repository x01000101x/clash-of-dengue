<template>
    <div class="background-page">
      <!-- Konten halaman Anda di sini -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'BackgroundPage',
  };
  </script>
  
  <style scoped>
  .background-page {
    height: 100vh; /* Mengatur tinggi halaman */
    background-image: url('@/assets/cod/bg-mobile.png'); /* Ganti dengan jalur gambar Anda */
    background-size: cover; /* Menutupi seluruh area */
    background-position: center; /* Pusat gambar */
  }
  </style>
  