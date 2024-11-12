<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="content-container">
            <div class="poster">
              <img src="@/assets/cod/Poster.png" alt="Gambar Poster" />
            </div>
            <div class="countdown">
                <h2>Counting the Days</h2>
                <div class="countdown-timer">
                    <div>
                        <span>{{ days }}</span> Days
                    </div>
                    <div>
                        <span>{{ hours }}</span> Hours
                    </div>
                    <div>
                        <span>{{ minutes }}</span> Minutes
                    </div>
                </div>
            </div>
        </div>
        <div class="button-profile">
            <button @click="goToProfile" class="profile-button">{{token? "Lihat Profile": "Login"}}</button>
        </div>
        <div class="maskot-female">
            <img src="@/assets/cod/logo-fam4.png" alt="Maskot Perempuan" />
        </div>
        <div class="maskot-male">
            <img src="@/assets/cod/logo-fam5.png" alt="Maskot Laki-laki" />
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
        token(){
            return this.$store.getters["ClashOfDengue/getToken"];
        },
        targetDate(){
            return this.$store.getters["ClashOfDengue/getCountDown"];
        },
    },
    methods: {
        goToProfile() {
            if(!this.token){
                this.$router.push('/login');
            } else {
                this.$router.push('/regis/profile');
            }
        },
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
        await this.$store.dispatch("ClashOfDengue/getCountDown");
        this.updateCountdown();
    },
    mounted() {
        this.updateCountdown();
        setInterval(this.updateCountdown, 10000); // Update every minute
    },
};
</script>

<style scoped>
.background-page {
    height: 100vh;
    background-image: url('@/assets/cod/bg-mobile.png');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 100dvh;
    width: 100%;
}

.sponsor-logos {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}

.sponsor-logos img {
    max-width: 1000px;
    height: auto;
}

.button-profile {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 2px;
}

.profile-button {
    background-color: var(--secondary-color);
    color: white;
    font-weight: 700;
    padding: 10px 20px; /* Adjust padding for the button */
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 150px;
}

.content-container {
    background-color: white;
    border-radius: 15px;
    padding: 15px 15px;
    width: 90vw;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 20px 0; /* Menambahkan margin untuk jarak antara konten */
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center; /* Agar elemen di dalam container terpusat */
}

.poster {
    height: auto;
    overflow: hidden;
}

.content-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
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

.countdown-timer div {
    font-size: 24px;
    font-weight: bold;
}

.maskot-female {
    position: absolute;
    bottom: -10%;
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
    bottom: -10%;
    left: 0%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-male img {
    width: 200px; 
    height: auto;
}

/* Animasi untuk efek floating */
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

/* Media Query untuk tampilan mobile */
@media (max-width: 768px) {
    .sponsor-logos img {
        max-width: 80%;
    }

    .maskot-female img {
        max-width: 125px;
    }

    .maskot-male img {
        width: 100px;
    }

    .mosquito-logo img {
        max-width: 200px;
        height: auto;
    }
}

@media (max-width: 450px) {
       .mosquito-logo img {
        max-width: 150px;
        height: auto;
    }
}

@media (max-height: 750px) {
       .mosquito-logo img {
        max-width: 150px;
        height: auto;
    }
}

@media (max-width: 320px) {
       .mosquito-logo img {
        max-width: 100px;
        height: auto;
    }
}

</style>
