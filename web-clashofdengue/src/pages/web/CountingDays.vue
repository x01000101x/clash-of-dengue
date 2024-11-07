<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="mosquito-logo">
            <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
        </div>
        <div class="highlight-logo">
            <img src="@/assets/cod/event-highlight.png" alt="Logo Highlight" />
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
            <div class="button-profile">
                <button @click="goToProfile" class="profile-button">{{token? "Lihat Profile": "Login"}}</button>
            </div>
        </div>
        <div class="maskot-female">
            <img src="@/assets/cod/maskot-woman.png" alt="Maskot Perempuan" />
        </div>
        <div class="maskot-male">
            <img src="@/assets/cod/maskot-man.png" alt="Maskot Laki-laki" />
        </div>
 
    </div>
</template>

<script>
export default {
    name: 'RegistrationPage',
    data() {
        return {
            targetDate: new Date('2024-12-01T00:00:00'), // Set your target date here
            days: 0,
            hours: 0,
            minutes: 0,
        };
    },
    computed: {
        token(){
            return this.$store.getters["ClashOfDengue/getToken"];
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
    mounted() {
        this.updateCountdown();
        setInterval(this.updateCountdown, 10000); // Update every minute
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
  top: 10%;
  left: 75%; /* Pusatkan logo nyamuk di tengah */
  transform: translate(-50%, 0); /* Pusatkan secara horizontal */
  animation: floating 3s ease-in-out infinite;
  z-index: 999;
}

.mosquito-logo img {
  max-width: 200px;
  height: auto;
}

.button-profile {
    position: relative;
    display: flex;
    justify-content: flex-end;
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

.highlight-logo {
  position: absolute;
  top: 20%;
  left: 23%; /* Pusatkan logo nyamuk di tengah */
  transform: translate(-50%, -50%); /* Pusatkan secara horizontal */
  z-index: 999;
}

.highlight-logo img {
  max-width: 150px;
  height: auto;
}

.content-container {
    background-color: white;
    border-radius: 45px;
    padding: 30px 50px;
    max-width: 90vw;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 0;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%);
    z-index: 2;
}

.poster {
    width: 50vw;
    height: auto;
    overflow: hidden;
}

.content-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
}
</style>
