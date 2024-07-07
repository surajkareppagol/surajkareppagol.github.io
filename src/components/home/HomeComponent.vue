<template>
  <div class="container">
    <div class="container-main">
      <p class="text text-heading">Hello<span class="emoji">👋</span></p>
      <p class="text">I'm <br> <span class="text-author">Suraj Kareppagol</span></p>
      <p class="text tags">Computer Enthusiast &#124; Content Creator &#124; Wikipedia User</p>
    </div>

    <ImageComponent class="image-component" src="/art.png" alt="Token art" />
  </div>
</template>

<script setup>
import ImageComponent from './ImageComponent.vue';
</script>

<style scoped>
.container {
  display: flex;
  gap: 2rem;

  padding: 0 1rem 0 0;
}

.container-main {
  flex: 1;
}

.text {
  font-size: 3.6rem;
  padding-left: 2rem;
}

.text-heading {
  font-size: 4.8rem;
}

.emoji {
  padding: 0 0 1rem 1rem;
}

.text-author {
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 60%,
      rgba(44, 44, 84, 0.8) 60%,
      rgba(44, 44, 84, 0.8) 100%);
}

.tags {
  font-size: 1.4rem;
  padding-top: 1rem;
}

.image-component {
  flex: 1;
  border: 4px solid #2C2C54;

  border-radius: 11px;

  box-shadow:
    4px -14px #2C2C54,
    -4px 14px #2C2C54;

  margin: 0 4rem 0 0;
}
</style>