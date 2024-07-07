<script setup>
const props = defineProps(['src', 'alt']);
</script>

<template>
  <img class="img" :src="props.src" :alt="props.alt" />
</template>

<style scoped>
.img {
  width: 50%;
  user-select: none;
}
</style>