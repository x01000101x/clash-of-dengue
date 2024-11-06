<template>
    <div class="container-result">
      <div class="flex flex-col items-center">
        <img src="@/assets/logo.png" alt="Clash Dengue" class="logo-home" />
      </div>
      
      <div class="content-container-result flex flex-col items-center">
        <form @submit.prevent="Submit">
          <!-- Name Field -->
          <div v-if="isRegister" class="form-group">
            <label for="name">Nama</label>
            <input type="text" id="name" placeholder="Name" ref="name" v-model="name" @input="toUpperCase('name')" required/>
          </div>

          <!-- Username Field -->
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Username"  v-model="username" required/>
          </div>

          <!-- School Field -->
          <div v-if="isRegister" class="form-group">
              <label for="school_name">Nama Sekolah</label>
              <input type="text" id="school_name" placeholder="School Name" ref="school_name" v-model="school_name" @input="toUpperCase('school_name')" required/>
          </div>

          <!-- Password Field -->
          <div class="form-group">
            <label for="password">Kata Sandi</label>
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
            <a v-if="!isRegister" href="#" @click="forgotPassword" class="forgot-password">Lupa Password</a>
          </div>
          
          <!-- Konfirmasi Password -->
          <div v-if="isRegister" class="form-group">
            <label for="password">Konfirmasi Kata Sandi</label>
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
            <button class="login-button" type="submit">{{isRegister ? "Daftar" : "Masuk"}}</button>
            <p class="sign-up">
              {{ isRegister? "Sudah memiliki akun?" : "Belum memiliki akun?"}} <a @click="toggleRegister">{{isRegister? "Masuk": "Daftar"}}</a>
            </p>
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
        isRegister: false,
        name: '',        
        username: '',    
        school_name: '', 
        password: '',    
        showPasswordConfirm: false, 
        passwordConfirm: '',  
      };
    },
    computed: {
    },
    mounted() {
      this.$store.commit("ClashOfDengue/resetStore");
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      togglePasswordVisibilityConfirm(){
        this.showPasswordConfirm = !this.showPasswordConfirm;
      },
      toggleRegister(){
        this.isRegister = !this.isRegister;
        this.resetForm();
      },
      resetForm(){
        this.name= ''       
        this.username= ''   
        this.school_name= '' 
        this.password= ''   
      },
      toUpperCase(field) {
        if (field === 'name') {
            this.name = this.name.toUpperCase();
        } else if (field === 'school_name') {
            this.school_name = this.school_name.toUpperCase();
        }
      },
      async Submit() {
        if (this.isRegister) {
            if (!this.name || !this.school_name || !this.username || !this.password || !this.passwordConfirm) {
              this.$store.commit("ClashOfDengue/setCreateDialog", {
                show: true,
                message: "Harap lengkapi seluruh data",
                icon: "fa-solid fa-circle-exclamation",
              });
              return;
            }
        } else {
            if (!this.username || !this.password) {
              this.$store.commit("ClashOfDengue/setCreateDialog", {
                show: true,
                message: "Harap lengkapi seluruh data",
                icon: "fa-solid fa-circle-exclamation",
              });
              return;
            }
        }
        const userData = {
            name: this.name,
            username: this.username,
            school_name: this.school_name,
            password: this.password,
        };
        if(this.isRegister){
          if(this.passwordConfirm !== this.password){
            this.$store.commit("ClashOfDengue/setCreateDialog", {
              show: true,
              message: "Password dan Konfimasi Password tidak sama!",
              icon: "fa-solid fa-circle-exclamation",
            });
            return;
          }
          try {
              await this.$store.dispatch("ClashOfDengue/registerUser", userData);
              this.$store.commit("ClashOfDengue/setCreateDialog", {
                show: true,
                message: "Registrasi Berhasil",
                icon: "fa-solid fa-thumbs-up",
              });
              window.location.reload();
          } catch (error) {
              console.error('Registration error:', error.message);
              this.$store.commit("ClashOfDengue/setCreateDialog", {
                show: true,
                message: error.message,
                icon: "fa-solid fa-circle-exclamation",
              });
          }
        } else {
          await this.$store.dispatch("ClashOfDengue/loginUser", userData);
          this.$router.push('/');
        }
      },
      forgotPassword(){
        this.$router.push('/reset');
      }
    },
  };
  </script>
  