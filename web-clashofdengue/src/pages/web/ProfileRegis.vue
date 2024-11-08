<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        
        <div class="maskot-female">
            <img src="@/assets/cod/maskot-woman.png" alt="Maskot Perempuan" />
        </div>
        
        <div class="maskot-male">
            <img src="@/assets/cod/maskot-man.png" alt="Maskot Laki-laki" />
        </div>

        <!-- Profile Section -->
        <div class="profile-card">
            <div class="profile-picture" @click="openAvatarDialog">
                <img :src="avatars[parseInt(userAva)]" alt="Profile"/> <!-- Use parseInt to convert the string to an integer -->
            </div>
            <div class="profile-info">
                <h2>{{profileUser.name}}</h2>
                <p>{{ profileUser.school_name }}</p>
                <div class="button-container-edit">
                    <button class="edit-button" @click="goToEditProfile">EDIT</button>
                    <button class="edit-button" @click="logOut">LOG OUT</button>
                </div>
            </div>
        </div>
        <AvatarDialog
          :isOpen="isAvatarDialogOpen"
          :avatars="avatars"
          @close="isAvatarDialogOpen = false"
          @avatar-selected="updateAvatar"
        />
    </div>
</template>

<script>
import AvatarDialog from '@/components/avatarDialog.vue';

export default {
    name: 'RegistrationPage',
    data() {
        return {
            fields: [],
            isAvatarDialogOpen: false,
        };
    },
    components: {
        AvatarDialog,
    },
    computed: {
      profileUser(){
        return this.$store.getters["ClashOfDengue/getUserProfile"];
      },
      userAva() {
        return this.profileUser.image ? this.profileUser.image : "0";
      },
      avatars() {
        return this.$store.getters["ClashOfDengue/getAvatars"];
      },
    },
    async mounted() {
        try {
            await this.$store.dispatch("ClashOfDengue/getProfileUser");
        } catch (error) {
            this.$store.commit("ClashOfDengue/setCreateDialog", {
                show: true,
                message: error.message,
                icon: "fa-solid fa-circle-exclamation",
            });
        }
    },
    methods: {
        openAvatarDialog() {
            console.log("open dialog");
            this.isAvatarDialogOpen = true;
        },
        submitForm() {
            // Logic for handling form submission
            console.log(this.formData);
        },
        async updateAvatar(value) {
        try {
            const updateData = {
                "image": value.index.toString(),
            };
            await this.$store.dispatch("ClashOfDengue/updateUser", updateData);
                this.$store.commit("ClashOfDengue/setCreateDialog", {
                show: true,
                message: "Profile Berhasil Diupdate",
                icon: "fa-solid fa-thumbs-up",
            });
        } catch (error) {
            console.error('Error updating profile:', error);
            this.$store.commit("ClashOfDengue/setCreateDialog", {
                show: true,
                message: error.message,
                icon: "fa-solid fa-circle-exclamation",
            });
        }
      },
      async logOut() {
        try {
          await this.$store.dispatch("ClashOfDengue/logoutUser");
          this.$store.commit("ClashOfDengue/resetStore")
          this.$router.push('/');
        } catch (error) {
          console.error('logOut error:', error.message);
          this.$store.commit("ClashOfDengue/setCreateDialog", {
            show: true,
            message: error.message,
            icon: "fa-solid fa-circle-exclamation",
          });
        }
      },
      goToEditProfile(){
        this.$router.push('/edit');
      }
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
    height: auto;
    max-width: 80%;
}

.button-container-edit {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.edit-button {
    background-color: var(--secondary-color);
    color: white;
    font-weight: 700;
    padding: 10px 60px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 20px;
}

/* Profile Card Styles */
.profile-card {
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    width: 40vw;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: absolute; /* Positioning for overlay effect */
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Adjust for centering */
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.profile-picture {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.profile-picture img {
    width: 250px; /* Set a fixed size for profile picture */
    height: auto;
    border-radius: 50%; /* Make it circular */
    border: 2px solid #ccc; /* Optional border */
    display: flex;
    flex-direction: column;
}

.profile-info h2 {
    font-size: 75px;
    color: var(--primary-color);
}

.profile-info p {
    font-size: 35px;
    color: var(--secondary-color); /* Optional color for school name */
}

/* Existing styles for mascots and other elements remain unchanged */
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

@media (max-width: 1040px) {
.edit-button {
    background-color: var(--secondary-color);
    color: white;
    font-weight: 400;
    margin-right: 10px;
    padding: 10px 30px;
}
.profile-info p {
    font-size: 40px;
    color: var(--secondary-color); /* Optional color for school name */
}
}

@media (max-width: 1040px) {
    .profile-info h2 {
    font-size: 35px;
    margin: 10px 0 5px; /* Spacing for name */
    color: var(--primary-color);
}

.profile-info p {
    font-size: 20px;
    color: var(--secondary-color); /* Optional color for school name */
}
}

/* Media Query untuk tampilan mobile */
@media (max-width: 768px) {
    .background-page {
    background-image: url('@/assets/cod/bg-mobile.png');
}

.profile-info h2 {
    font-size: 45px;
    margin: 10px 0 5px; /* Spacing for name */
    color: var(--primary-color);
}

.profile-info p {
    font-size: 27px;
    color: var(--secondary-color); /* Optional color for school name */
}

.edit-button {
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

.button-container-edit {
    max-width: 100%;
}

    .sponsor-logos img {
        max-width: 60%;
    }

    .maskot-female img {
        max-width: 100px;
    }

    .maskot-female {
    bottom: -10%;
    transform: translateX(-50%);
    animation: none;
}

.maskot-male {
    bottom: -10%;
    transform: translateX(-50%);
    animation: none;
}

    .maskot-male img {
        width: 150px;
    }

    .profile-card {
        width: 70vw; /* Adjust for mobile */
    }

.edit-button {
    background-color: var(--secondary-color);
    color: white;
    font-weight: 400;
    margin-right: 10px;
    padding: 0px 20px;
}
}

@media (max-height: 714px) {
    .profile-card {
    max-height: 75vh;
    overflow-y: auto;
}
.sponsor-logos img {
    max-width: 60%;
}
}
</style>
