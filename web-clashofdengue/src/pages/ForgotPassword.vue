<template>
    <div class="container-result">
      <div class="flex flex-col items-center">
        <img src="@/assets/reset-pass.png" alt="Clash Dengue" class="logo-home" />
      </div>
      
      <div class="content-container-result flex flex-col items-center">
        <form @submit.prevent="Submit">
          <!-- Password Field -->
          <div class="form-group">
            <label for="password">Password Baru</label>
            <div class="password-container">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                placeholder="Password"
                v-model="password"
                required
                autocomplete="current-password"
              />
              <span class="toggle-password" @click="togglePasswordVisibility">
                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </span>
            </div>
          </div>

          <div class="form-group">
            <label for="password">Konfirmasi Password</label>
            <div class="password-container">
              <input
                :type="showPasswordConfirm ? 'text' : 'password'"
                id="password"
                placeholder="Password"
                v-model="passwordConfirm"
                required
                autocomplete="current-password"
              />
              <span class="toggle-password" @click="togglePasswordVisibilityConfirm">
                <i :class="showPasswordConfirm ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </span>
            </div>
          </div>

          <div class="login-options">
            <button class="login-button" type="submit">Ganti Password</button>
          </div>
        </form>
      </div>
      
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
        showPassword: false, 
        password: '',    
        showPasswordConfirm: false, 
        passwordConfirm: '',    
      };
    },
    computed: {
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      togglePasswordVisibilityConfirm(){
        this.showPasswordConfirm = !this.showPasswordConfirm;
      },
      async Submit() {
            if (!this.password || !this.passwordConfirm) {
              this.$store.commit("ClashOfDengue/setCreateDialog", {
                show: true,
                message: "Harap lengkapi seluruh data",
                icon: "fa-solid fa-circle-exclamation",
              });
              return;
            }
            if(this.password !== this.passwordConfirm){
              this.$store.commit("ClashOfDengue/setCreateDialog", {
                show: true,
                message: "Password dan Konfimasi Password tidak sama!",
                icon: "fa-solid fa-circle-exclamation",
              });
              this.password = "";
              this.passwordConfirm = "";
              return;
            }
            this.$store.commit("ClashOfDengue/setCreateDialog", {
            show: true,
            message: "Perubahan Password berhasil",
            icon: "fa-solid fa-thumbs-up",
          });
      }
    },
  };
  </script>
  