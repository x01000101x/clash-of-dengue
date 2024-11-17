<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="content-container">
            <form @submit.prevent="submitForm" class="registration-form">
                <div class="form-group">
                    <label for="name">Nama</label>
                    <input type="text" id="name" v-model="formData.name" placeholder="Nama" @input="toUpperCase('name')" required autocomplete="off"/>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" v-model="formData.username" placeholder="Username" required autocomplete="off"/>
                </div>
                <div class="form-group">
                    <label for="institutionType">Pilih Jenis Institusi</label>
                    <!-- Gantikan radio button dengan select dropdown -->
                    <select v-model="formData.institutionType" id="institutionType" required>
                        <option value="" disabled>Pilih Institusi</option>
                        <option value="school">Sekolah Dasar</option>
                        <option value="company">Perusahaan</option>
                    </select>
                </div>
                <div class="form-group" v-if="formData.institutionType === 'school'">
                    <label for="school">Nama Sekolah</label>
                    <select v-model="formData.school" id="school" required>
                        <option value="" disabled>Pilih Nama Sekolah</option>
                        <option v-for="school in schools" :key="school" :value="school">{{ school }}</option>
                    </select>
                </div>
                <div class="form-group" v-if="formData.institutionType === 'company'">
                    <label for="company">Nama Perusahaan</label>
                    <select v-model="formData.company" id="company" required>
                        <option value="" disabled>Pilih Nama Perusahaan</option>
                        <option v-for="company in companies" :key="company" :value="company">{{ company }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="password">Kata Sandi</label>
                    <input type="password" id="password" v-model="formData.password" placeholder="Kata Sandi" required />
                </div>
                <div class="form-group">
                    <label for="confirm-password">Konfirmasi Kata Sandi</label>
                    <input type="password" id="confirm-password" v-model="formData.confirmPassword" placeholder="Konfirmasi Kata Sandi" required />
                </div>
                <div v-if="!formData.institutionType"></div>
                <div class="button-container-regis">
                    <button type="submit" class="register-button">DAFTAR</button>
                </div>
            </form>
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
                name: '',
                username: '',
                school: '',
                company: '',  // Menambah field untuk perusahaan
                password: '',
                confirmPassword: '',
                institutionType: '',  // school or company
            },
            schools: [
                "Panca Budi Medan",
                "Namira International Islamic School",
                "Darma Bangsa Medan",
                "High Scope School Medan",
                "Chandra Kumala School",
                "Al-Azhar Model"
            ],
            companies: [
                "Bank Permata",
                "Manulife",
                "Vision",
                "Nodigon Land",
                "Bakrie Renewable Chemical",
                "Purnama Suryani Panjaitan",
                "Juncai",
                "PT Galileo Indonesia Perdana",
                "Hive Five"
            ]
        };
    },
    methods: {
        async submitForm() {
            if (!this.formData.name || !this.formData.username || !this.formData.password || !this.formData.confirmPassword) {
                this.$store.commit("ClashOfDengue/setCreateDialog", {
                    show: true,
                    message: "Harap lengkapi seluruh data",
                    icon: "fa-solid fa-circle-exclamation",
                });
                return;
            }
            if (this.formData.confirmPassword !== this.formData.password) {
                this.$store.commit("ClashOfDengue/setCreateDialog", {
                    show: true,
                    message: "Password dan Konfimasi Password tidak sama!",
                    icon: "fa-solid fa-circle-exclamation",
                });
                return;
            }
            const userData = {
                name: this.formData.name,
                username: this.formData.username,
                school_name: this.formData.institutionType === 'school' ? this.formData.school : this.formData.company,
                password: this.formData.password,
                type: this.formData.institutionType,
            };
            try {
                await this.$store.dispatch("ClashOfDengue/registerUser", userData);
                this.$router.push('/regis/success');
            } catch (error) {
                console.error('Registration error:', error.message);
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

/* Style untuk select dropdown */
select {
    width: 100%;
    padding: 15px; /* Sama seperti padding untuk input */
    border: 1px solid #ccc; /* Border konsisten dengan input */
    border-radius: 5px; /* Rounded corners */
    font-size: 18px;
    font-weight: 400;
    color: white; /* Menggunakan warna yang sama */
    background-color: var(--primary-color); /* Warna latar belakang untuk dropdown */
    box-sizing: border-box; /* Menjaga padding tidak mempengaruhi lebar */
}

select:focus {
    outline: none; /* Menghilangkan outline saat fokus */
    border-color: var(--primary-color); /* Ganti border color saat fokus */
}

option {
    font-size: 16px;
    padding: 10px;
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
    max-height: 65vh; /* Batasi tinggi kontainer di mobile */
    overflow-y: auto; /* Aktifkan scroll vertikal */
    margin: 5% 0px;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    z-index: 2;
}

.content-container h2 {
    font-size: 30px;
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
    color: white;
    background-color: var(--primary-color);
    font-size: 18px; 
    font-weight: 400;
}

.button-container-regis {
    display: flex;
    justify-content: flex-start;
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
    top: 2%;
    right: 5%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-female img {
    max-width: 180px;
    height: auto;
}

.maskot-male {
    position: absolute;
    top: 6%;
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
        max-width: 60%;
    }

    .background-page {
    background-image: url('@/assets/cod/backmob2.jpg');
}
    
    .content-container {
        padding: 10px 30px;
        margin: 10px;
        max-height: 80vh; /* Batasi tinggi kontainer di mobile */
        overflow-y: auto; /* Aktifkan scroll vertikal */
        margin-top: 17%; /* Space below sponsor logos */
    }

    input {
        width: 100%; /* Full width */
        border: 1px solid #ccc; /* Border */
        border-radius: 5px; /* Rounded corners */
        color: var(--secondary-color);
        font-size: 15px; 
        font-weight: 400;
        padding: 5px;
    }

    .registration-form {
        grid-template-columns: 1fr;
        gap: 10px 10px;
        margin-bottom: 20px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
        color: white;
        margin: 0;
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
        font-size: 15px;
    }

    .content-container h2 {
        font-size: 0px;
    }

    .button-container-regis {
        justify-content: center;
        margin-top: 10px;
    }

    .register-button {
        padding: 8px 20px;
    }

    .maskot-female {
        top: 6%;
    }

    .maskot-male {
        top: 9%;
    }
    .maskot-female img {
        max-width: 80px;
    }

    .maskot-male img {
        width: 100px;
    }
}

@media (max-height: 800px) {
    input {
        width: 100%; /* Full width */
        border: 1px solid #ccc; /* Border */
        border-radius: 5px; /* Rounded corners */
        color: white;
        font-size: 15px; 
        font-weight: 400;
        padding: 5px;
    }
    select {
    padding: 5px; /* Sama seperti padding untuk input */

}


}
</style>
