<template>
  <div class="container">
    <NavComponent class="nav-component" />
    <HomeComponent class="intro-component" />
  </div>
</template>

<script setup>
import NavComponent from '../components/NavComponent.vue';
import HomeComponent from '../components/home/HomeComponent.vue';
</script>


<style scoped>
.container {
  display: flex;
  align-items: center;
}

.nav-component {
  flex: .1;
}
</style>