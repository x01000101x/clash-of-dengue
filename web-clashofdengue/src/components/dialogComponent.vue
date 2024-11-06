<template>
  <div class="alert-modal">
    <div class="alert-content">
      <div class="alert-icon">
        <i :class="iconClass"></i>
      </div>
      <p>{{ message }}</p>
      <div class="alert-buttons">
        <button @click="handleConfirm">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      default: "fas fa-exclamation-circle", // Default icon
    },
    message: {
      type: String,
      default: "Do you want to continue?", // Default message
    },
  },
  emits: ["close"],
  methods: {
    handleConfirm() {
      this.$store.commit("ClashOfDengue/resetDialog");
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.alert-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; /* Menggunakan fixed untuk membuat dialog tetap di posisi tengah */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Latar belakang semi-transparan */
  z-index: 1000; /* Memastikan dialog berada di atas elemen lainnya */
}

.alert-content {
  display: flex;
  flex-direction: column; /* Mengatur isi dialog secara vertikal */
  align-items: center;
  justify-content: center;
  background-color: white; /* Latar belakang putih untuk konten dialog */
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Bayangan untuk efek mengambang */
}

.alert-icon {
  font-size: 50px;
  color: #ff007f; /* Pink color for alert */
}

.alert-buttons {
  margin-top: 20px;
}

.alert-buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #0097a7; /* Green for OK */
  color: white;
  cursor: pointer;
}
</style>