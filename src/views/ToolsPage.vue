<template>
  <div class="container">
    <NavComponent class="nav-component" />

    <div class="tools">
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  </div>
</template>

<script setup>
import NavComponent from '../components/NavComponent.vue';
import CardComponent from '../components/tools/CardComponent.vue';
</script>

<style scoped>
.container {
  display: flex;
}

.nav-component {
  flex: .1;
}

.tools {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  column-gap: 4rem;
  row-gap: 3rem;

  /* padding-top: 6rem; */
  /* padding-left: 2rem; */

  padding: 6rem 0 2rem 2rem;

  max-width: 100%;
  height: 100vh;
  /* z-index: 10; */

  overflow-y: scroll;
  scrollbar-width: none;

  background: linear-gradient(90deg,
      #fff 0% 20%,
      #2C2C54 20% 40%,
      #fff 40% 70%,
      #2C2C54 70% 80%,
      #fff 80% 100%);
}

.tools::-webkit-scrollbar {
  display: none;
}
</style>