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
        <div class="posisi-icon-rank">
            <div class="icons">
                <div class="icon-container">
                    <div class="icon" @click="goToCallCenter">
                        <i class="fa-brands fa-whatsapp"></i>
                    </div>
                    <p>Contact Person</p>
                </div>
            </div>
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
        <div class="button-newgame">
            <button @click="goToRegis" class="profile-button">Daftar Sekarang</button>
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
        targetDate(){
            return this.$store.getters["ClashOfDengue/getCountDown"];
        },
        currentPoster() {
            return this.posters[this.currentIndex]; // Menampilkan gambar berdasarkan currentIndex
        }
    },
    methods: {
        goToRegis(){
            this.$router.push('/splash');
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
        },
        async goToCallCenter() {
            const message = encodeURIComponent("Halo Admin Clash Of Dengue, saya bertanya");
            const phoneNumber = '+6281399997218';
            const url = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(url, '_blank');
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
    background-image: url('@/assets/cod/bg-count-web.png');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    opacity: 0.9;
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

.sponsor-logos img {
    max-width: 70%;
}

.mosquito-logo {
  position: absolute;
  top: 10%;
  left: 75%; /* Pusatkan logo nyamuk di tengah */
  transform: translate(-50%, -50%); /* Pusatkan secara horizontal */
  animation: floating 3s ease-in-out infinite;
  z-index: 999;
}

.mosquito-logo img {
  max-width: 140px;
  height: auto;
}

.posisi-icon-rank {
    position: absolute;
    top: 1%;
    left: 1%;
    z-index: 999;
    cursor: pointer;
}

.icon {
  background-color: var(--primary-color);
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 30px;
  margin-bottom: 0.5rem;
  color: white;
  position: relative;
}
.icon-container p {
    color: white;
    font-weight: 500;
}

.icon-container {
    margin: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.button-profile {
    position: absolute;
    bottom: 10%;
    left: 67%;
    display: flex;
    flex-direction: column;
}

.button-newgame{
    position: absolute;
    bottom: 10%;
    right: 67%;
    display: flex;
    flex-direction: column;
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
    padding: 30px 10px;
    max-width: 90vw;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 0;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 48%;
    left: 50%; 
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.content-container i {
    font-size: 30px;
    margin:20px
}

.container-countdown {
    display: flex;
    position: absolute;
    bottom: 1%;
    left: 50%; 
    transform: translate(-50%, 0);
    color: white;
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

.countdown h2{
    font-size: 20px;
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
    bottom: -8%;
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

@media (max-width: 1024px) {
    .sponsor-logos img {
        max-width: 60%;
    }

    .maskot-female img {
        max-width: 200px;
    }

    .maskot-male img {
        width: 250px;
    }

    .mosquito-logo img {
        max-width: 100px;
      }

    .highlight-logo img {
        max-width: 100px;
        height: auto;
    }
    .highlight-logo {
        top: 15%;
    }
    .profile-button {
        font-size: 15px;
        padding: 8px 8px; /* Adjust padding for the button */

    }
}

/* Media Query untuk tampilan mobile */
@media (max-width: 800px) {
    .sponsor-logos img {
        max-width: 50%;
    }

    .maskot-female img {
        max-width: 100px;
    }

    .maskot-male img {
        width: 150px;
    }
    .mosquito-logo {
        top: 25%;
      }
      .highlight-logo {
        top: 30%;
    }
}

@media (max-height:750px) {
    .content-container {
        top: 45%;
    }
}
</style>
