<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="mosquito-logo">
            <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
          </div>
        <div class="content-container">
            <form @submit.prevent="submitForm" class="registration-form">
                <div class="question">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" v-model="formData.username" placeholder="Username" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Kata Sandi</label>
                        <input type="password" id="password" v-model="formData.password" placeholder="Kata Sandi" required />
                    </div>
                </div>
                <div class="forgotPassword">
                    <p @click="goToForgetPass">
                        Lupa Password
                    </p>
                </div>
                <div class="button-container-regis">
                    <button class="register-button" @click="submitLogin">LOGIN</button>
                    <!-- <p>
                        Belum memiliki akun? <a @click="goToSPlash">Daftar</a>
                    </p> -->
                </div>
            </form>
        </div>
        <div class="logo-dbd">
            <img src="@/assets/cod/logo-dbd.png" alt="Logo DBD" />
        </div>
        <div class="maskot-female">
            <img src="@/assets/cod/logo-family2.png" alt="Maskot Perempuan" />
        </div>
        <div class="maskot-male">
            <img src="@/assets/cod/logo-family1.png" alt="Maskot Laki-laki" />
        </div>
        <div class="featuring-by">
            <img src="@/assets/cod/Sponsor.png" alt="Featuring by" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegistrationPage',
    data() {
        return {
            formData: {
                username: '',
                password: '',
            },
        };
    },
    methods: {
        goToSPlash(){
            this.$router.push('/splash');
        },
        async submitLogin() {
            if (!this.formData.username || !this.formData.password) {
            this.$store.commit("ClashOfDengue/setCreateDialog", {
                show: true,
                message: "Harap lengkapi seluruh data",
                icon: "fa-solid fa-circle-exclamation",
            });
            return;
            }
            const userData = {
                username: this.formData.username,
                password: this.formData.password,
            };
            try {
                await this.$store.dispatch("ClashOfDengue/loginUser", userData);
                this.$router.push('/count');
            } catch (error) {
                console.error('Login error:', error.message);
                this.$store.commit("ClashOfDengue/setCreateDialog", {
                    show: true,
                    message: error.message,
                    icon: "fa-solid fa-circle-exclamation",
                });
            }
        },
        toUpperCase(field) {
            if (field === 'name') {
                this.formData.name = this.formData.name.toUpperCase();
            } else if (field === 'school') {
                this.formData.school = this.formData.school.toUpperCase();
            }
        },
        goToForgetPass(){
            this.$router.push('/forgot');
        }
    },
};
</script>

<style scoped>
.background-page {
height: 100vh;
height: 100dvh; /* new browsers */
width: 100%;
background-image: url('@/assets/cod/back-web-mid.png');
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
margin-bottom: 20px; /* Space between logos and content */
}

.sponsor-logos img {
max-width: 500px;
height: auto;
}

.question {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two columns for larger screens */
    gap: 10px 40px;
    margin-bottom: 20px;
    width: 100%;
}

.content-container {
background-color: white;
border-radius: 45px;
padding: 30px 50px;
max-width: 70vw;
max-height: 60vh; /* Batasi tinggi kontainer di mobile */
overflow-y: auto;
width: 100%;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
color: var(--secondary-color);  
display: flex;
flex-direction: column;
z-index: 2;
position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, 0); /* Center horizontally */

}

.content-container h2 {
font-size: 50px;
font-weight: 1000;
text-align: center; /* Center the heading */
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
  width: auto;
  height: auto;
}

/* Style untuk form */
.registration-form {
display: flex; /* Change from grid to flex */
flex-direction: column; /* Stack the form elements vertically */
margin-bottom: 20px;
}


.form-group {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    color: white;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--secondary-color);
    font-size: 20px;
}

.form-group input {
    width: 100%; /* Full width */
    padding: 15px; /* Increased padding for better appearance */
    border: 1px solid #ccc; /* Border */
    border-radius: 5px; /* Rounded corners */
    color: white;
    background-color: var(--secondary-color);
    font-size: 18px; 
    font-weight: 400;
}

.button-container-regis {
display: flex;
justify-content: center;
flex-direction: column; /* Stack the form elements vertically */
margin-top: 20px;
}

.forgotPassword {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.forgotPassword p{
    display: flex;
    justify-content: flex-end;
    color: var(--secondary-color);
cursor: pointer;
}

.button-container-regis p{
color: white;
cursor: pointer;
margin-top: 10px;
color: var(--secondary-color);
}

.button-container-regis a{
font-weight: bold;
}

.register-button {
background-color: var(--primary-color);
color: white;
font-weight: 700;
padding: 10px 60px;
border: none;
border-radius: 20px;
cursor: pointer;
}

.maskot-female {
position: absolute;
bottom: -4%;
right: 0%;
z-index: 999;
}

.maskot-female img {
max-width: 200px;
height: auto;
}

.logo-dbd {
position: absolute;
bottom: 25%;
right: 3%;
z-index: 999;
}

.logo-dbd img {
max-width: 200px;
height: auto;
}


.maskot-male {
position: absolute;
bottom: -1%;
left: 0%;
}

.maskot-male img {
width: 250px; 
height: auto;
}

.featuring-by {
position: absolute;
bottom: 0%;
z-index: 2;
}

.featuring-by img {
width: auto; 
max-height: 75px;
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
.background-page {
background-image: url('@/assets/cod/mob-up.jpg');
}
.sponsor-logos img {
    max-width: 70%;
}

.content-container {
    top: 25%;

}

.question {
    grid-template-columns: 1fr; /* Two columns for larger screens */
    gap: 10px 0px;
    width: 100%;
}

.mosquito-logo img {
    max-width: 150px;
  }

.content-container {
    padding: 20px 30px;
    max-height: 70vh; /* Batasi tinggi kontainer di mobile */
    overflow-y: auto; /* Aktifkan scroll vertikal */
    margin-top: 20px; /* Space below sponsor logos */
}

.form-group input {
    padding: 10px; /* Increased padding for better appearance */
    font-size: 13px; 
    font-weight: 400;
}

.content-container h2 {
    font-size: 30px;
}

.register-button {
    padding: 8px 20px;
}

.maskot-female img {
    max-width: 100px;
}

.logo-dbd img {
    width: 0px;
}

.maskot-female {
bottom: 2%;
right: 5%;
z-index: 1;
}

.maskot-male {
bottom: 3%;
left: 5%;
z-index: 1;
}


.maskot-male img {
    width: 120px;
}
}

@media (max-width: 500px){
    .content-container {
        max-width: 70vw;
        max-height: 50vh;
    }
    .mosquito-logo img {
    max-width: 100px;
  }
  label {
margin-bottom: 0px;
font-size: 15px;
}

input {
padding: 0px; /* Increased padding for better appearance */
font-size: 15px; 
}
.question {
    grid-template-columns: 1fr; /* Two columns for larger screens */
    gap: 0px 0px;
    margin-bottom: 10px;
    width: 100%;
}
.button-container-regis p{
font-size: 10px;
margin-top: 5px;
}

.button-container-regis a{
font-size: 10px;
}
}

@media (max-height: 650px){
    .forgotPassword p{
    font-size: 10px;
}
.button-container-regis p{
font-size: 10px;
margin-top: 5px;
}

.button-container-regis a{
font-size: 10px;
}
}
</style>
