<template>
    <div class="profile-container">
      <!-- Profile Header with Image -->
      <div class="profile-header">
          <img :src="profileImage" alt="Profile" class="profile-image" />
      </div>
  
      <!-- Profile Form -->
      <div class="profile-form">
        <div class="form-group" v-for="(field, index) in fields" :key="index">
          <label>{{ field.label }}</label>
          <div class="input-container">
            <input
              :type="field.type"
              v-model="field.value"
              :disabled="!field.editable"
            />
            <span class="edit" @click="toggleEdit(index)">
              {{ field.editable ? 'Save' : 'Edit' }}
            </span>
          </div>
        </div>
  
        <!-- Save Button -->
        <button class="save-button" @click="saveProfile">SAVE</button>
        <button class="save-button" @click="logOut">LOG OUT</button>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'ProfileForm',
    data() {
      return {
        profileImage: require('@/assets/user-solid.svg'), // Replace with the actual path or dynamic data
        fields: [
          { label: 'Username', value: 'pandu', type: 'text', editable: false },
          { label: 'Password', value: 'password', type: 'password', editable: false },
          { label: 'Email', value: 'pandu@gmail.com', type: 'email', editable: false },
          { label: 'Sekolah', value: 'Nama Sekolah', type: 'text', editable: false },
        ],
      };
    },
    methods: {
      toggleEdit(index) {
        this.fields[index].editable = !this.fields[index].editable;
      },
      editProfileImage() {
        alert('Edit profile image clicked');
        // Add logic to change profile image here
      },
      saveProfile() {
        alert('Profile saved');
        // Add logic to save profile data here
      },
      async logOut() {
        try {
              await this.$store.dispatch("ClashOfDengue/logoutUser");
              this.$router.push('/login');
          } catch (error) {
              console.error('logOut error:', error.message);
              alert(error.message);
          }
      },
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
    width: 75%;
    margin: 0 auto;
    background-color: #ffa500; /* Orange background */
    border-radius: 15px;
    padding-bottom: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .profile-image-container {
    position: relative;
  }
  
  .profile-image {
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
  }
</style>
  