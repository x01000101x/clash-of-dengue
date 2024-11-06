<template>
    <div v-if="isOpen" class="dialog-overlay" @click.self="closeDialog">
      <div class="dialog-content">
        <h3>Pilih Avatar</h3>
        <div class="avatar-grid">
          <div 
            class="avatar-option" 
            v-for="(avatar, index) in avatars" 
            :key="index" 
            @click="selectAvatar(avatar, index)"
          >
            <img :src="avatar" alt="Avatar" class="avatar-image" />
          </div>
        </div>
        <button @click="closeDialog">Tutup</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AvatarDialog',
    props: {
      isOpen: Boolean,
      avatars: Array
    },
    methods: {
      selectAvatar(avatar, index) { // Receive index as a parameter
        this.$emit('avatar-selected', { avatar, index }); // Emit an object containing avatar and index
        this.closeDialog();
      },
      closeDialog() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
  }
  
  .dialog-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  .avatar-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .avatar-option {
    margin: 10px;
    cursor: pointer;
  }
  
  .avatar-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  }
  </style>
  