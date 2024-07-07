<template>
  <div class="container">
    <nav class="nav nav-links">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/projects">Project</RouterLink>
      <RouterLink class="nav-link" to="/tools">Tools</RouterLink>
      <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.container {
  height: 100vh;
  padding: 2rem 1.2rem 2rem 1.2rem;
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4rem;
  padding: 0 1rem;
  height: 100%;

  border: 4px solid #2C2C54;

  box-shadow: 4px 4px 0px #2C2C54;
}

.nav-link {
  font-family: "Fira Code", monospace;
  font-weight: 700;

  letter-spacing: 1.5px;

  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(-180deg);

  color: inherit;
  text-decoration: none;

  font-size: 1.2rem;
}
</style>