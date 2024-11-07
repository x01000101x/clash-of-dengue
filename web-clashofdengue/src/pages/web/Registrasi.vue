<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="content-container">
            <h2>Registrasi</h2>
            <form @submit.prevent="submitForm" class="registration-form">
                <div class="form-group">
                    <label for="name">Nama</label>
                    <input type="text" id="name" v-model="formData.name" placeholder="Nama" required />
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" v-model="formData.username" placeholder="Username" required />
                </div>
                <div class="form-group">
                    <label for="school">Nama Sekolah</label>
                    <input type="text" id="school" v-model="formData.school" placeholder="Nama Sekolah" required />
                </div>
                <div class="form-group">
                    <label for="password">Kata Sandi</label>
                    <input type="password" id="password" v-model="formData.password" placeholder="Kata Sandi" required />
                </div>
                <div class="form-group">
                    <label for="confirm-password">Konfirmasi Kata Sandi</label>
                    <input type="password" id="confirm-password" v-model="formData.confirmPassword" placeholder="Konfirmasi Kata Sandi" required />
                </div>
                <div class="button-container-regis">
                    <button type="submit" class="register-button">DAFTAR</button>
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
                name: '',
                username: '',
                school: '',
                password: '',
                confirmPassword: '',
            },
        };
    },
    methods: {
        submitForm() {
            // Logic for handling form submission
            console.log(this.formData);
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
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two columns for larger screens */
    gap: 10px 40px;
    margin-bottom: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--secondary-color);
    font-size: 20px;
}

input {
    width: 100%; /* Full width */
    padding: 10px; /* Padding inside input */
    border: 1px solid #ccc; /* Border */
    border-radius: 5px; /* Rounded corners */
    background-color:var(--primary-color) ;
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
    .sponsor-logos img {
        max-width: 80%;
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
        max-width: 100px;
    }

    .maskot-male img {
        width: 150px;
    }
}
</style>
