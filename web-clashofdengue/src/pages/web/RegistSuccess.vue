<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="mosquito-logo">
            <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
        </div>
        <div>
            <img src="@/assets/cod/sucess-regis-new.png" alt="Sukses Regis" />
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
    name: 'RegistrationSucessPage',
    data() {
        return {};
    },
    mounted() {
        setTimeout(() => {
            this.$router.push({ path: '/' });
        }, 8000);
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

.mosquito-logo {
    position: absolute;
    top: 20%;
    left: 50%; /* Pusatkan logo nyamuk di tengah */
    transform: translate(-50%, 0); /* Pusatkan secara horizontal */
    animation: floating 3s ease-in-out infinite;
    z-index: 999;
}

.mosquito-logo img {
    max-width: 250px;
    height: auto;
}

.maskot-female {
    position: absolute;
    bottom: -25%;
    right: -5%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-female img {
    max-width: 250px;
    height: auto;
}

.maskot-male {
    position: absolute;
    bottom: -25%;
    left: 10%;
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

    .maskot-female img {
        max-width: 100px;
    }

    .maskot-male img {
        width: 150px;
    }
    .mosquito-logo img {
    max-width: 100px;
    height: auto;
}
}
</style>
