<template>
  <div class="container">
    <NavComponent class="nav-component" />
    <div class="projects">
      <CardComponent :right="true" />
      <CardComponent />
      <CardComponent :right="true" />
      <CardComponent />
    </div>
  </div>
</template>

<script setup>
import NavComponent from '../components/NavComponent.vue';
import CardComponent from '../components/projects/CardComponent.vue';
</script>

<style scoped>
.container {
  display: flex;
}

.nav-component {
  flex: .1;
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;

  column-gap: 14rem;
  row-gap: 2rem;

  padding-top: 6rem;
  padding-left: 2rem;

  max-width: 100%;
  height: 100vh;
  z-index: 10;

  overflow-y: scroll;
  scrollbar-width: none;

  background: linear-gradient(90deg,
      #fff 0 20%,
      #2C2C54 20% 30%,
      #fff 30% 60%,
      #2C2C54 60% 90%,
      #fff 90% 100%);
}

.projects::-webkit-scrollbar {
  display: none;
}
</style>