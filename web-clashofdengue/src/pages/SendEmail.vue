<template>
    <div class="container-reset flex flex-col items-center">
      <div class="flex flex-col items-center">
        <img src="@/assets/reset-pass.png" alt="Clash Dengue" class="logo-reset" />
      </div>
        <h1 class="call-admin">LUPA PASSWORD?</h1>
        <!-- <p>Hubungi admin Clash Of Dengue</p> -->
         <div>
           <button class="login-button" @click="RequestPassword">Request Password</button>
         </div>
        <p class="sign-up" @click="backToLogin">
          Kembali ke Halaman Login
        </p>
      
    </div>
  </template>
  
  <script>
  import '@/css/login.css';
  
  export default {
    name: 'UserLogin',
    components : {
    },
    data() {
      return {
      };
    },
    computed: {
    },
    methods: {
      async RequestPassword() {
        const message = encodeURIComponent("Halo Admin Clash Of Dengue, saya request untuk reset password");
        const phoneNumber = '+6285172220432';
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
        this.$router.push('/login'); 
      },
      backToLogin(){
        this.$router.push('/'); 
      }
    },
  };
  </script>
  