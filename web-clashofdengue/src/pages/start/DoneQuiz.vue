<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="mosquito-logo">
            <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
        </div>
        <div class="content-container">
            <p>Selamat kamu telah berhasil menyelesaikan tantangan</p>
            <h2>Clash Of Dengue</h2>
        </div>
        <div class="container-countdown">
            <div class="countdown">
                <h2>Next Game</h2>
                <div class="countdown-timer">
                    <div class="time">
                        <span>{{ days }}</span> 
                        <p>Days</p>
                    </div>
                    <div class="time">
                        <span>{{ hours }}</span>
                        <p>Hours</p>
                    </div>
                    <div class="time">
                        <span>{{ minutes }}</span> 
                        <p>Minutes</p>
                    </div>
                </div>
            </div>
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
            days: 0,
            hours: 0,
            minutes: 0,
        };
    },
    computed: {
        targetDate() {
            const now = new Date();
            const target = new Date(now);

            // Cek apakah waktu saat ini sudah melewati jam 15:00
            if (now.getHours() >= 15) {
                // Jika sudah lewat jam 15, targetkan keesokan hari jam 15:00
                target.setDate(now.getDate() + 1); // Setel tanggal ke hari berikutnya
            }

            // Setel jam menjadi 15:00 (3 sore) pada hari yang sudah ditentukan
            target.setHours(15, 0, 0, 0);
            return target;
        },
    },
    methods: {
        updateCountdown() {
            const now = new Date();
            const timeDifference = this.targetDate - now;

            if (timeDifference > 0) {
                this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            } else {
                this.days = 0;
                this.hours = 0;
                this.minutes = 0;
            }
        },
    },
    async created() {
        this.updateCountdown();
    },
    mounted() {
        this.updateCountdown();
        setInterval(this.updateCountdown, 10000);
        setTimeout(() => {
            this.$router.push({ path: '/start/count' });
        }, 8000);
    },
};
</script>


<style scoped>
.background-page {
    height: 100vh;
    background-image: url('@/assets/cod/back-web-mid.png');
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

.background-page::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* hitam dengan opacity 50% */
    z-index: 1; /* memastikan ini di atas gambar latar belakang */
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
    max-height: 60vh; /* Limit height for mobile */
    overflow-y: auto; /* Enable vertical scrolling */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
    text-align: center; /* Center text */
    width: 40vw;
    margin-top: 25vh;
    z-index: 2;
}

.container-countdown {
    display: flex;
    position: absolute;
    bottom: 15%;
    left: 50%; 
    transform: translate(-50%, 0);
    color: white;
    z-index: 2;
}

.countdown {
    text-align: center;
    margin-top: 20px;
}

.countdown-timer {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.time {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.time span {
    font-size: 50px;
    padding: 0px;
    margin: 0px;
}

.content-container-date {
    background-color: white;
    border-radius: 25px;
    padding: 30px 50px;
    max-width: 80vw;
    max-height: 60vh; /* Limit height for mobile */
    overflow-y: auto; /* Enable vertical scrolling */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
    text-align: center; /* Center text */
    max-width: 80vw;
    margin-top: 20px;
    z-index: 2;
}

.content-container-date h2 {
    font-size: 20px; /* Make the text larger */
    font-weight: bold; /* Bold text for emphasis */
    color: var(--secondary-color) ;
}

.content-container p {
    font-size: 25px; /* Make the text larger */
    font-weight: bold; /* Bold text for emphasis */
}

.content-container h2 {
    font-size: 30px; /* Make the text larger */
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
    max-width: 200px;
    height: auto;
}

.maskot-male {
    position: absolute;
    bottom: -2%;
    left: 0%;
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

    .content-container {
        padding: 20px 30px;
        margin: 20px;
        max-height: 70vh; /* Limit height for mobile */
        overflow-y: auto; /* Enable vertical scrolling */
        width: 90vw;
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

    .content-container-date h2 {
        font-size: 15px; /* Adjust font size for mobile */
    }

    .maskot-female img {
        max-width: 100px;
    }

    .maskot-male img {
        width: 150px;
    }

    .maskot-male {
        bottom: 0%;
        left: 10%;
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
@media (max-width: 765px){
    .background-page {
        background-image: url('@/assets/cod/backmob2.jpg');
    }
    .container-countdown {
    display: flex;
    position:fixed;
    bottom: 25%;
    left: 50%; 
    transform: translate(-50%, 0);
    color: white;
    z-index: 2;
}
}
@media (max-height: 715px) {
    .sponsor-logos img {
    max-width: 70%
}
.mosquito-logo {
    top: 13%;
}
}
</style>
