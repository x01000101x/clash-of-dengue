<template>
    <div>
      <div class="container-profile flex flex-col items-center" :style="{ marginTop: !isEdit ? '25%' : '0%' }">
        <div class="icons">
          <div class="icon-container">
            <div class="icon" @click="goToRankList">
              <i class="fas fa-chart-simple"></i>
            </div>
            <p>Top List</p>
          </div>
          <div class="icon-container">
            <div @click="toggleMenu" class="icon">
              <img src="@/assets/School.png" alt="Menu Utama Icon" class="icon-image-dashboard" />
            </div>
            <p>Menu Utama</p>
          </div>
        </div>
        <div class="profile-header">
          <div class="ava-container" @click="openAvatarDialog">
            <img :src="avatars[parseInt(userAva)]" alt="Profile" class="ava-image" /> <!-- Use parseInt to convert the string to an integer -->
          </div>
        </div>
        <AvatarDialog
          :isOpen="isAvatarDialogOpen"
          :avatars="avatars"
          @close="isAvatarDialogOpen = false"
          @avatar-selected="updateAvatar"
        />
        <h1 class="h1-profile">{{ profileUser.username }}</h1>
        <h4 class="h2-sekolah">{{ profileUser.school_name }}</h4>
        <template v-if="!isEdit">
          <div class="content flex flex-wrap justify-between gap-20">
            <div class="flex flex-col items-center justify-center">
              <h4 class="subtitle">Score Saat Ini</h4>
              <h2 class="value-subtitle">{{ scoreUser.total_score ? scoreUser.total_score : 0 }}</h2>
            </div>
            <div class="flex flex-col items-center justify-center">
              <h4 class="subtitle">Posisi Ranking</h4>
              <h2 class="value-subtitle">{{ scoreUser.rank ? scoreUser.rank : 0 }}</h2>
            </div>
          </div>
          <div class="content flex flex-wrap justify-between gap-20">
            <div class="flex flex-col items-center justify-center">
              <h4 class="subtitle">Jawaban Benar</h4>
              <h2 class="value-subtitle">{{ scoreUser.correct_answer ? scoreUser.correct_answer : 0 }}</h2>
            </div>
            <div class="flex flex-col items-center justify-center">
              <h4 class="subtitle">Jawaban Salah</h4>
              <h2 class="value-subtitle">{{ scoreUser.false_answer ? scoreUser.false_answer : 0 }}</h2>
            </div>
          </div>
        </template>
        <template v-if="isEdit">
          <FormProfile
            @back="toggleEdit"
          />
        </template>
        <button v-if="!isEdit" class="edit-button" @click="toggleEdit">Edit</button>
        <img src="@/assets/maskot.png" alt="Floating Button" class="floating-image" />
      </div>
    </div>
  </template>
  
  <script>
  import FormProfile from '@/components/formProfile.vue';
  import AvatarDialog from '@/components/avatarDialog.vue';
  
  export default {
    name: 'ProfilePage',
    data() {
      return {
        isEdit: false,
        isAvatarDialogOpen: false,
      };
    },
    components: {
      FormProfile,
      AvatarDialog,
    },
    computed: {
      profileUser() {
        return this.$store.getters["ClashOfDengue/getUserProfile"];
      },
      scoreUser() {
        return this.$store.getters["ClashOfDengue/getScoreUser"];
      },
      avatars() {
        return this.$store.getters["ClashOfDengue/getAvatars"];
      },
      userAva() {
        return this.profileUser.image ? this.profileUser.image : "0";
      }
    },
    methods: {
      toggleMenu() {
        this.$router.push('/');
      },
      goToRankList() {
        this.$router.push('/rank');
      },
      toggleEdit() {
        this.isEdit = !this.isEdit;
      },
      openAvatarDialog() {
        console.log("open dialog");
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
            // this.profileUser.image = value.index.toString();
        } catch (error) {
            console.error('Error updating profile:', error);
          this.$store.commit("ClashOfDengue/setCreateDialog", {
            show: true,
            message: error.message,
            icon: "fa-solid fa-circle-exclamation",
          });
        }
      }
    },
  };
  </script>
  
  <style scoped>
  .container-profile {
      margin-top: 25%;
      display: flex;
      justify-content: center;
      width: 100%;
      background-color: #ff007f;
      border-radius: 30px 30px 0 0;
      color: white;
      height: calc(100% - 100px);
      flex: 1;
      position: relative;
  }
  .ava-image {
      width: 200px;
      object-fit: cover;
  }
  .ava-container {
      width: 200px;
      height: 200px;
      border-radius: 50%; /* Membuat kontainer berbentuk lingkaran */
      overflow: hidden;   /* Menyembunyikan bagian gambar yang keluar dari kontainer */
      border: 5px solid #ffa500; /* Menambahkan border pada kontainer */
  }
  
  .h1-profile {
      color: white;
      font-size: 40px;
      margin-top: 5%;
  }
  
  .h2-sekolah {
      color: white;
      font-size: 20px;
      margin-bottom: 25px;
  }
  
  .edit-button {
    background-color: #ffa500;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 5%;
    z-index: 11;
  }
  .floating-image {
      position: absolute; /* Menempatkan gambar di posisi tetap */
      bottom: 0px; /* Jarak dari bawah kontainer */
      right: 0px; /* Jarak dari kanan kontainer */
      width: 250px; /* Ukuran lebar gambar */
      height: auto; /* Ukuran tinggi gambar */
      z-index: 10; /* Memastikan gambar berada di atas elemen lainnya */
      transition: transform 0.3s ease;
  }
  
  .content {
      margin: 20px;
  }
  
  .subtitle {
      font-size: 15px;
  }
  
  .value-subtitle {
      font-size: 40px;
  }
  </style>
  