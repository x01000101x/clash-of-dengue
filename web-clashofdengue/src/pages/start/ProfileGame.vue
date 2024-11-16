<template>
    <div class="background-page">
        <div class="sponsor-logos">
            <img src="@/assets/cod/Sponsor-utama.png" alt="Kerjamsama Utama" />
        </div>
        <div class="avatar-container">
            <img :src="avatars[parseInt(userAva)]" alt="Profile" @click="openAvatarDialog"/> <!-- Use parseInt to convert the string to an integer -->
        </div>
        <!-- Profile Section -->
        <div class="profile-card">
            <div class="profile-picture" >
                <div class="posisi-icon-menu">
                    <div class="icon-container">
                        <div @click="toggleMenu" class="icon">
                          <img src="@/assets/School.png" alt="Menu Utama Icon" class="icon-image-menu" />
                        </div>
                        <p>Menu</p>
                    </div>
                </div>
                <div class="posisi-icon-rank">
                    <div class="icons">
                        <div class="icon-container">
                          <div class="icon" @click="goToRankList">
                            <i class="fas fa-chart-simple"></i>
                          </div>
                          <p>Top List</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="profile-info">
                <div class="profile-text">
                    <div class="game-status">
                        <div class="rank">
                            <p>Rank</p>
                            <h2>{{ getUserRank }}</h2>

                            <p>Total Score</p>
                            <h2>{{ scoreUser.total_score }}</h2>
                        </div>
                        <div class="user">
                            <div>
                                <h2>{{profileUser.name}}</h2>
                                <p>{{ profileUser.school_name }}</p>
                            </div>
                        </div>
                        <div class="points">
                            <p>Total Benar</p>
                            <h2>{{ scoreUser.correct_answer }}</h2>

                            <p>Total Salah</p>
                            <h2>{{ scoreUser.false_answer }}</h2>
                        </div>
                    </div>
                </div>
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
      scoreUser(){
          return this.$store.getters["ClashOfDengue/getScoreUser"];
        },
        getUserRank(){
            return this.$store.getters["ClashOfDengue/getUserRank"];
        },
    },
    async mounted() {
        try {
            await this.$store.dispatch("ClashOfDengue/getProfileUser");
            await this.$store.dispatch("ClashOfDengue/getScoreUser");
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
            this.isAvatarDialogOpen = true;
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
        this.$router.push('/start/edit');
      },
      toggleMenu(){
        this.$router.push('/start/dashboard');
      },
      goToRankList() {
      this.$router.push('/start/rank');
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


.posisi-icon-rank {

}

.posisi-icon-menu {

}

.icon {
  background-color: var(--secondary-color);
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
    color: var(--primary-color);
    font-weight: 500;
}

.icon-container {
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.user {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
}
.profile-text{
    max-width: 75vw;
}

.game-status {
    text-align: center;
    display: flex;
    flex-direction: row;
    max-height: 40vh;
    padding: 20px;
    gap: 30px;
}

.rank {
    width: 100%;
}

.points {
    width: 100%;
}

.avatar-container {
    position: absolute;
    top: 15%;
    z-index: 5;
}

.avatar-container img {
    width: 250px; /* Set a fixed size for profile picture */
    height: auto;
    border-radius: 50%; /* Make it circular */
    display: flex;
    flex-direction: column;
}

.chart {
    grid-column: span 2; /* Span across both columns */
    height: 100px; /* Height for the chart section */
    background-color: #ff4081; /* Pink color for the chart */
    border-radius: 10px; /* Rounded corners */
}

.sponsor-logos {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px; /* Space between logos and content */
}

.sponsor-logos img {
    height: auto;
    max-width: 60%;
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
    width: 60vw;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: absolute; /* Positioning for overlay effect */
    top: 60%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Adjust for centering */
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.profile-picture {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.profile-picture img {
    width: 250px; /* Set a fixed size for profile picture */
    height: auto;
    border-radius: 50%; /* Make it circular */
    display: flex;
    flex-direction: column;
}

.icon-image-menu {
  width: 45px !important;
  height: auto;
}

.profile-info h2 {
    font-size: 35px;
    color: var(--primary-color);
}

.profile-info p {
    font-size: 25px;
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
    font-size: 25px;
    margin: 10px 0 5px; /* Spacing for name */
    color: var(--primary-color);
}

.profile-info p {
    font-size: 20px;
    color: var(--secondary-color); /* Optional color for school name */
}

.profile-picture img {
    width: 200px; /* Set a fixed size for profile picture */
    height: auto;
    border-radius: 50%; /* Make it circular */
    border: 2px solid #ccc; /* Optional border */
    display: flex;
    flex-direction: column;
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
        right: 0%;
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
