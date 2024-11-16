<template>
  <div class="background-page container-reset flex flex-col items-center">
    <div class="mosquito-logo">
          <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
      </div>
    <div class="reset-logo flex flex-col items-center">
      <img src="@/assets/cod/pasword2.png" alt="Clash Dengue" class="logo-reset" />
    </div>
      <h1 class="call-admin">LUPA PASSWORD?</h1>
      <!-- <p>Hubungi admin Clash Of Dengue</p> -->
       <div>
         <button class="reset-button" @click="RequestPassword">Reset Password</button>
       </div>
      <p class="back" @click="backToLogin">
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
        const phoneNumber = '+6281399997218';
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
    height: 100dvh; /* new browsers */
    width: 100%;
}

.call-admin {
  color: white;
}
  .back {
    margin-top: 10px;
    cursor: pointer;
    color: white;
  }

  .reset-button {
  background-color: var(--secondary-color);
  color: white;
  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
}

.mosquito-logo {

}

.mosquito-logo img {
  max-width: 0px;
  height: auto;
}


@media (max-width: 800px) {
  .background-page {
    background-image: url('@/assets/cod/backmob2.jpg');
}

.mosquito-logo {

}

.mosquito-logo img {
  max-width: 100px;
  height: auto;
}

.logo-reset {
  margin: 0px;
  margin-top: 10%;
}


}
  </style>