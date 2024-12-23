<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="mosquito-logo">
            <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
        </div>
        <div class="content-container">
            <p>Selamat kamu telah berhasil terdaftar dan ikut mendukung kampanye</p>
            <h2>Indonesia Bebas Kematian Akibat DBD Tahun 2030</h2>
        </div>
        <div class="content-container-date">
            <p>Tanggal Periode pertandingan: 24 - 28 November 2024 Pukul 13.00 – 21.00 WIB</p>
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
    name: 'RegistrationSucessPage',
    data() {
        return {};
    },
    mounted() {
        setTimeout(() => {
            this.$router.push({ path: '/count' });
        }, 8000);
    },
};
</script>

<style scoped>
.background-page {
    height: 100vh;
    background-image: url('@/assets/cod/backweb3.jpg');
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

.content{
    max-width: 40vw;
    max-height: 90vh;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, 0);
}

.content-container {
    background-color: white;
    border-radius: 25px;
    padding: 30px 50px;
    max-width: 90vw;
    max-height: 60vh; /* Limit height for mobile */
    overflow-y: auto; /* Enable vertical scrolling */
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
    text-align: center; /* Center text */
    max-width: 50vw;
    margin-top: 25vh;
}

.content-container-date {
    background-color: white;
    border-radius: 25px;
    padding: 30px 50px;
    max-width: 50vw;
    max-height: 60vh; /* Limit height for mobile */
    overflow-y: auto; /* Enable vertical scrolling */
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
    text-align: center; /* Center text */
    margin-top: 20px;
}

.content-container-date p {
    font-size: 25px; /* Make the text larger */
    font-weight: bold; /* Bold text for emphasis */
    color: var(--primary-color) ;
}

.content-container p {
    font-size: 25px; /* Make the text larger */
    font-weight: bold; /* Bold text for emphasis */
}

.content-container h2 {
    font-size: 20px; /* Make the text larger */
    font-weight: bold; /* Bold text for emphasis */
    color: var(--secondary-color) ;
}

/* Other styles remain unchanged */
.sponsor-logos {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.sponsor-logos img {
    max-width: 1000px;
    height: auto;
}

.mosquito-logo {
    position: absolute;
    top: 20%;
    transform: translate(-50%, 0); /* Center horizontally */
    animation: floating 3s ease-in-out infinite;
    z-index: 999;
}

.mosquito-logo img {
    max-width: 150px;
    height: auto;
}

.maskot-female {
    position: absolute;
    bottom: -5%;
    right: 0%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-female img {
    max-width: 250px;
    height: auto;
}

.maskot-male {
    position: absolute;
    bottom: -5%;
    left: 0%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-male img {
    width: 350px; 
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

/* Floating animation */
@keyframes floating {
    0% {
        transform: translate(0, 0); 
    }
    50% {
        transform: translate(0, -10px);
    }
    100% {
        transform: translate(0, 0);
    }
}

/* Media Query for mobile view */
@media (max-width: 1185px) {
    .sponsor-logos img {
        max-width: 80%;
    }

    .content{
    max-width: 50vw;
    max-height: 90vh;
}

.background-page {
    background-image: url('@/assets/cod/backmob2.jpg');
}

    .content-container {
        padding: 20px 30px;
        margin: 20px;
        max-height: 70vh; /* Limit height for mobile */
        overflow-y: auto; /* Enable vertical scrolling */
        max-width: 80vw;
        margin-top: 20vh;
    }

    .content-container p {
        font-size: 15px; /* Adjust font size for mobile */
    }

    .content-container-date {
        padding: 20px 30px;
        margin: 20px;
        max-height: 70vh; /* Limit height for mobile */
        overflow-y: auto; /* Enable vertical scrolling */
        max-width: 80vw;
        margin-top: 20px;
    }

    .content-container-date p {
        font-size: 15px; /* Adjust font size for mobile */
    }

    .maskot-female img {
        max-width: 100px;
    }
    .maskot-male {
        right: 0%;
        bottom: 3%;
    }

    .maskot-male img {
        width: 150px;
    }

    .maskot-female {
        bottom: 0%;
        right: 0%;
    }

    .mosquito-logo img {
        max-width: 100px;
    }

    .mosquito-logo {
    top: 15%;
}
}

@media (max-height: 850px) {
    .content img {
    max-height: 500px;
    max-width:  500px;
}
}
</style>
