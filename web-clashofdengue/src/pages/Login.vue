<template>
    <div class="container-result">
      <div class="flex flex-col items-center">
        <img src="@/assets/logo.png" alt="Clash Dengue" class="logo-home" />
      </div>
      
      <div class="content-container-result flex flex-col items-center">
        <form @submit.prevent="Submit">
          <!-- Name Field -->
          <div v-if="isRegister" class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Name" ref="name" v-model="name" @input="toUpperCase('name')" required/>
          </div>

          <!-- Username Field -->
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Username"  v-model="username" required/>
          </div>

          <!-- School Field -->
          <div v-if="isRegister" class="form-group">
              <label for="school_name">School Name</label>
              <input type="text" id="school_name" placeholder="School Name" ref="school_name" v-model="school_name" @input="toUpperCase('school_name')" required/>
          </div>

          <!-- Email Field -->
          <div v-if="isRegister" class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Email" v-model="email" required />
          </div>

          <!-- Password Field -->
          <div class="form-group">
            <label for="password">Password</label>
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
            <a v-if="!isRegister" href="#" class="forgot-password">Lupa Password</a>
          </div>

          <div class="login-options">
            <button class="login-button" type="submit">{{isRegister ? "Sign Up" : "Log In"}}</button>
            <!-- <div class="divider">
              <span>Or</span>
            </div>

            <button class="google-login-button">
              <img src="path/to/google-icon.png" alt="Google Icon" class="google-icon" />
              Sign In With Google
            </button> -->
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
        email: '',       
        school_name: '', 
        password: '',    
      };
    },
    computed: {
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      toggleRegister(){
        this.isRegister = !this.isRegister;
      },
      toUpperCase(field) {
        if (field === 'name') {
            this.name = this.name.toUpperCase(); // Mengubah input nama menjadi uppercase
        } else if (field === 'school_name') {
            this.school_name = this.school_name.toUpperCase(); // Mengubah input nama sekolah menjadi uppercase
        }
      },
      async Submit() {
        
        if (this.isRegister) {
            if (!this.name || !this.email || !this.school_name || !this.username || !this.password) {
              alert("Harap lengkapi seluruh field");
              return;
            }
        } else {
            if (!this.username || !this.password) {
              alert("Harap lengkapi seluruh field");
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
          try {
              await this.$store.dispatch("ClashOfDengue/registerUser", userData);
              alert('User registered successfully!');
              window.location.reload();
          } catch (error) {
              console.error('Registration error:', error.message);
              alert(error.message);
          }
        } else {
          try {
              await this.$store.dispatch("ClashOfDengue/loginUser", userData);
              this.$router.push('/');
          } catch (error) {
              console.error('login error:', error.message);
              alert(error.message);
          }
        }
      }
    },
  };
  </script>
  