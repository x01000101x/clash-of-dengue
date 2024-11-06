<template>
    <div class="loading-spinner" v-if="isLoading">
        <div class="spinner-bg">
            <div class="spinner"></div>
            <p>Harap menunggu...</p>
        </div>
    </div>
</template>
  
  <script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  
  <style scoped>
  .loading-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
}
.spinner-bg{
    height: auto;
    width: auto;
    background-color: white;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    margin: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.spinner {
    width: 60px;
    height: 60px;
    border: 8px solid #ffa500; 
    border-top: 8px solid #ff007f; 
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  p {
    margin-top: 15px;
    font-size: 20px; /* Ukuran font lebih besar */
    color: #ff007f; /* Warna teks */
    font-weight: bold; /* Menebalkan teks untuk kesan lebih menonjol */
  }
  </style>
  