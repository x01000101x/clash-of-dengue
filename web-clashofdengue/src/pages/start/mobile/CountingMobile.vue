<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="mosquito-logo">
            <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
        </div>
        <div class="content-container">
            <i class="fa-solid fa-arrow-left" @click="prevImage"></i>
            <div class="poster">
              <img :src="currentPoster" alt="Gambar Poster" />
            </div>
            <i class="fa-solid fa-arrow-right" @click="nextImage"></i>
        </div>
        <div class="container-countdown">
            <div class="countdown">
                <h2>Counting the Days</h2>
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
        <div class="button-profile">
            <button @click="goToProfile" class="profile-button">{{token? "Lihat Profile": "Login"}}</button>
        </div>
        <div class="maskot-female">
            <img src="@/assets/cod/logo-family2.png" alt="Maskot Perempuan" />
        </div>
        <div class="maskot-male">
            <img src="@/assets/cod/logo-family1.png" alt="Maskot Laki-laki" />
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
            posters: [
                require("@/assets/cod/poster-nyamuk.png"),
                require("@/assets/cod/Poster.png")
            ],
            currentIndex: 0,
        };
    },
    computed: {
        token(){
            return this.$store.getters["ClashOfDengue/getToken"];
        },
        targetDate() {
            const now = new Date();
            const target = new Date(now);
            
            target.setHours(13, 0, 0, 0);

           if (now > target) {
                target.setDate(now.getDate() + 1); // Tambah 1 hari ke target
            }

            return target;
        },
        currentPoster() {
            return this.posters[this.currentIndex]; // Menampilkan gambar berdasarkan currentIndex
        }
    },
    methods: {
        goToProfile() {
            if(!this.token){
                this.$router.push('/start/login');
            } else {
                this.$router.push('/start/profile');
            }
        },
        goToNewGame() {
            this.$router.push('/start');
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
        nextImage() {
            if (this.currentIndex < this.posters.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0; // Jika sudah di gambar terakhir, kembali ke gambar pertama
            }
        },
        // Fungsi untuk menampilkan gambar sebelumnya
        prevImage() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.posters.length - 1; // Jika sudah di gambar pertama, kembali ke gambar terakhir
            }
        }
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
    background-image: url('@/assets/cod/mob-up.jpg');
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
    padding: 5px 10px; /* Adjust padding for the button */
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 150px;
    margin-left: 10px;
    font-size: 10px;
}

.container-countdown {
    display: flex;
    color: white;
}

.content-container {
    background-color: white;
    border-radius: 15px;
    padding: 15px 15px;
    width: 90vw;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center; /* Agar elemen di dalam container terpusat */
    flex-direction: row;
    align-items: center;
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
    margin-top: 2px;
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

.time p {
    font-size: 15px;
}

.countdown-timer div {
    font-size: 24px;
    font-weight: bold;
}

.maskot-female {
    position: absolute;
    bottom: -3%;
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
    bottom: -3%;
    left: 0%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-male img {
    width: 250px; 
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

    .maskot-female {
        bottom: -4%;
    }
    .maskot-male {
        bottom: -2%;
    }

    .maskot-female img {
        max-width: 100px;
    }

    .maskot-male img {
        width: 120px;
    }

    .mosquito-logo img {
        max-width: 150px;
        height: auto;
    }
}

@media (max-width: 450px) {
       .mosquito-logo img {
        max-width: 70px;
        height: auto;
    }
}

@media (max-height: 750px) {
       .mosquito-logo img {
        max-width: 80px;
        height: auto;
    }
    .maskot-female img {
        max-width: 70px;
    }

    .maskot-male img {
        width: 80px;
    }

}

</style>
