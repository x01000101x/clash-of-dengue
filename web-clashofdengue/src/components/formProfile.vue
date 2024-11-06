<template>
  <div class="profile-container">
    <div class="profile-form">
      <div class="form-group" v-for="(field, index) in fields" :key="index">
        <label>{{ field.label }}</label>
        <div class="input-container">
          <input
            :type="field.type"
            v-model="field.value"
            @input="updateFieldValue(index, $event.target.value)"
            :disabled="!field.editable"
          />
          <span class="edit" @click="toggleEdit(index)">
            {{ field.editable ? 'Save' : 'Edit' }}
          </span>
        </div>
      </div>

      <button class="save-button" @click="logOut">LOG OUT</button>
      <button class="save-button" @click="goToProfile">PROFILE</button>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'ProfileForm',
    data() {
      return {
        fields: [],
      };
    },
    emits: ["back"],
    computed: {
      profileUser(){
        return this.$store.getters["ClashOfDengue/getUserProfile"];
      },
      profileImage(){
        const profileImage = this.profileUser.image
        return profileImage? profileImage : require('@/assets/user-solid.svg')
      },
    },
    watch: {
      profileUser: {
          handler(newValue) {
              this.setFields(newValue);
          },
          immediate: true,
      },
    },
    methods: {
      setFields(user) {
        this.fields = [
          { id: 'username', label: 'Username', value: user.username || '', type: 'text', editable: false },
          { id: 'password', label: 'Password', type: 'password', editable: false },
          { id:'school_name', label: 'Sekolah', value: user.school_name || '', type: 'text', editable: false },
        ];
      },
      updateFieldValue(index, value) {
        const field = this.fields[index];
        if(field.label === 'Username' || field.label === 'Sekolah' && value){
          this.fields[index].value = value.toUpperCase();
        } else {
          this.fields[index].value = value;
        }
      },
      toggleEdit(index) {
        const field = this.fields[index];

        if (field.editable) {
          this.saveProfile(field);
        }

        field.editable = !field.editable;
      },
      async saveProfile(field) {
        try {
          const updateData = {
            [field.id.toLowerCase()]: field.value,
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
      editProfileImage() {
        alert('Edit profile image clicked');
        // Add logic to change profile image here
      },
      async logOut() {
        try {
          await this.$store.dispatch("ClashOfDengue/logoutUser");
          this.$store.commit("ClashOfDengue/resetStore")
          this.$router.push('/login');
        } catch (error) {
          console.error('logOut error:', error.message);
          this.$store.commit("ClashOfDengue/setCreateDialog", {
            show: true,
            message: error.message,
            icon: "fa-solid fa-circle-exclamation",
          });
        }
      },
      goToProfile(){
      this.$emit("back");
      }
    },
  };
</script>
  
<style scoped>
  * {
    box-sizing: border-box;
  }
  
  .profile-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-container {
    width: 100%;
    margin: 0 auto;
    background-color: #ffa500;
    border-radius: 15px;
    text-align: center;
    font-family: Arial, sans-serif;
    display: flex; 
    flex-direction: column;
    align-items: center;   
  }
  
  .profile-image-container {
    position: relative;
  }
  
  .profile-image {
    margin-top: 5%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #fff;
  }
  
  .edit-photo {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff007f;
    color: white;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 15px;
    cursor: pointer;
  }
  
  .profile-form {
    margin-top: 10px;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 11;
  }
  
  .form-group {
    margin: 15px 0;
    text-align: left;
    width: 100%;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    color: #fff;
    margin-bottom: 5px;
  }
  
  .input-container {
    position: relative;
  }
  
  .input-container input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    color: #333;
    background-color: #ffffff;
  }
  
  .input-container .edit {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: #ff007f;
    cursor: pointer;
  }
  
  .save-button {
    background-color: #ff007f;
    color: white;
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    z-index: 11;
  }
</style>
  