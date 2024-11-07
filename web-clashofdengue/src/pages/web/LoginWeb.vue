    <template>
        <div class="background-page">
            <div class="sponsor-logos">
                <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
            </div>
            <div class="content-container">
                <h2>LOGIN</h2>
                <form @submit.prevent="submitForm" class="registration-form">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" v-model="formData.username" placeholder="Username" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Kata Sandi</label>
                        <input type="password" id="password" v-model="formData.password" placeholder="Kata Sandi" required />
                    </div>
                    <div class="button-container-regis">
                        <button class="register-button" @click="submitLogin">LOGIN</button>
                        <button class="register-button" @click="goToSPlash">DAFTAR</button>
                    </div>
                </form>
            </div>
            <div class="maskot-female">
                <img src="@/assets/cod/maskot-woman.png" alt="Maskot Perempuan" />
            </div>
            <div class="maskot-male">
                <img src="@/assets/cod/maskot-man.png" alt="Maskot Laki-laki" />
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
                console.log(this.formData);
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
                    this.$router.push('/');
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
        },
    };
    </script>

<style scoped>
.background-page {
    height: 100vh;
    background-image: url('@/assets/cod/bg-web.png');
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
    max-width: 1000px;
    height: auto;
}

.content-container {
    background-color: white;
    border-radius: 45px;
    padding: 30px 50px;
    max-width: 90vw;
    max-height: 60vh; /* Batasi tinggi kontainer di mobile */
    overflow-y: auto; /* Aktifkan scroll vertikal */
    margin: 60px 0px;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    z-index: 2;
}

.content-container h2 {
    font-size: 50px;
    font-weight: 1000;
    text-align: center; /* Center the heading */
}

/* Style untuk form */
.registration-form {
    display: flex; /* Change from grid to flex */
    flex-direction: column; /* Stack the form elements vertically */
    gap: 20px; /* Add gap between form groups */
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

input {
    width: 100%; /* Full width */
    padding: 15px; /* Increased padding for better appearance */
    border: 1px solid #ccc; /* Border */
    border-radius: 5px; /* Rounded corners */
    background-color: var(--button-bg);
    color: var(--secondary-color);
    font-size: 18px; 
    font-weight: 400;
}

.button-container-regis {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.register-button {
    background-color: var(--secondary-color);
    color: white;
    font-weight: 700;
    padding: 10px 60px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 20px;
}

.maskot-female {
    position: absolute;
    top: 10%;
    right: 5%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-female img {
    max-width: 150px;
    height: auto;
}

.maskot-male {
    position: absolute;
    top: 10%;
    left: 25%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-male img {
    width: 250px; 
    height: auto;
}

.featuring-by {
    position: absolute;
    bottom: 0%;
    left: auto;
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
    background-image: url('@/assets/cod/bg-mobile.png');
}
    .sponsor-logos img {
        max-width: 70%;
    }
    
    .content-container {
        padding: 20px 30px;
        margin: 20px;
        max-height: 70vh; /* Batasi tinggi kontainer di mobile */
        overflow-y: auto; /* Aktifkan scroll vertikal */
        margin-top: 20px; /* Space below sponsor logos */
    }

    .content-container h2 {
        font-size: 30px;
    }

    .register-button {
        padding: 8px 20px;
    }

    .maskot-female img {
        max-width: 0;
    }

    .maskot-male img {
        width: 0;
    }
}
</style>
