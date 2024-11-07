<template>
  <div id="app">
    <!-- <div class="backdrop">
      <div class="mobile-view"> -->
        <LoadingSpiner :isLoading="isLoading"/>
        <DialogComponent
          v-if="showDialog"
          :iconClass="customIcon"
          :message="messageDialog"
          @close="resetDialog"
        />
        <router-view />
      <!-- </div>
    </div> -->
  </div>
</template>

<script>
import LoadingSpiner from '@/components/loadingSpiner.vue';
import DialogComponent from '@/components/dialogComponent.vue';
import '@/css/style.css';

export default {
  name: 'App',
  components : {
    LoadingSpiner,
    DialogComponent,
  },
  computed: {
    isLoading(){
      return this.$store.getters["ClashOfDengue/getShowLoading"];
    },
    showDialog(){
      return this.$store.getters["ClashOfDengue/getShowDialog"];
    },
    customIcon(){
      return this.$store.getters["ClashOfDengue/getIconDialog"];
    },
    messageDialog(){
      return this.$store.getters["ClashOfDengue/getMessageDialog"];
    }
  },
  methods: {
    resetDialog() {
      this.$store.commit("ClashOfDengue/resetDialog");
    },
  }
}
</script>

<style>
.backdrop{
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/BG_SCHOOL.jpg');
  background-size: cover;
  background-position: left center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-view {
  width: 430px;
  height: auto; /* Atur ini jika Anda ingin konten menentukan tinggi */
  max-height: 100vh; /* Batasi tinggi maksimum untuk tidak melampaui viewport */
  overflow-y: auto; /* Tambahkan scroll vertikal jika diperlukan */
  background-color: white;
}

</style>
