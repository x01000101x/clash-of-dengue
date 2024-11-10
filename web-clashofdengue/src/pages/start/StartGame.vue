<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="mosquito-logo">
            <img src="@/assets/cod/logo-border.png" alt="Logo Nyamuk" />
        </div>

        <div class="welcome-text">
            <img src="@/assets/cod/welcome-text.png" alt="Welcome text" />
        </div>

        <div class="button-start">
            <button type="submit" class="start-button" @click="StartGame">START</button>
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
        };
    },
    computed: {
    },
    methods: {
        StartGame(){
            this.$router.push('/start/login');
        }
    },
    mounted() {
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
    height: 100dvh; /* new browsers */
    width: 100%;
}
.button-start {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.start-button {
    background-color: var(--secondary-color);
    color: white;
    font-weight: 700;
    padding: 10px 60px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
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
  animation: floating 3s ease-in-out infinite;
}

.mosquito-logo img {
  max-width: 200px;
  height: auto;
}

.maskot-female {
    position: absolute;
    bottom: -25%;
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
    bottom: -25%;
    left: 00%;
    transform: translateX(-50%);
    animation: floating 3s ease-in-out infinite;
}

.maskot-male img {
    width: 350px; 
    height: auto;
}

.welcome-text{
    max-width: 75vw;
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
        max-width: 150px;
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
.background-page {
    background-image: url('@/assets/cod/bg-mobile.png');
}
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
    .welcome-text img{
        height: 13vh;
        width: auto;
    }
    .mosquito-logo img {
        max-width: 300px;
      }
}
</style>
