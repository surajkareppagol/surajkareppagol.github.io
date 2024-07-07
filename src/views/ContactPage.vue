<template>
  <div class="container">
    <NavComponent class="nav-component" />

    <p class="warning">🚧 Sorry, this page is not yet created.</p>
  </div>
</template>

<script setup>
import NavComponent from '../components/NavComponent.vue';
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
}

.nav-component {
  flex: .1;
}

.warning {
  font-size: 2rem;

  padding: 2rem;
}
</style>