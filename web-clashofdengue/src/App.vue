<template>
  <div id="app">
    <div class="backdrop">
      <div class="mobile-view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
.backdrop{
  background-color: #f2aed7;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.mobile-view {
  width: 430px;
  height: 100vh;
  background-color: white;
}

</style>
