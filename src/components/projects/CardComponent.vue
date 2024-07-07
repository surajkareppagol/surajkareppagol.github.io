<template>
  <div class="container">
    <img class="img" src="/CREPL.png" alt="Project" />

    <p class="text">🚀 CREPL, a Python-based REPL program for C language execution.</p>

    <div class="tools-links-container" :class="{ 'set-right': props.right, 'set-left set-z-index': !props.right }">
      <div class="tools-container">
        <p class="heading">🧰 Tools</p>

        <div class="tools">
          <p class="tool">C</p>
          <p class="tool">Python</p>
          <p class="tool">Rich</p>
        </div>
      </div>

      <div class="links-container">
        <p class="heading">🔗 Links</p>

        <div class="links">
          <a class="link">Github</a>
          <a class="link">Website</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  right: { default: false }
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;

  width: 28rem;

  padding: 1rem;

  border: 4px solid #2C2C54;
  box-shadow: 4px 4px 0px #2C2C54;

  position: relative;

  background-color: #fff;

  margin-bottom: 6rem;
}

.tools-links-container {
  position: absolute;

  background-color: #fff;

  border: 4px solid #2C2C54;
  box-shadow: 4px 4px 0px #2C2C54;

  padding: 1rem 2rem;

  max-width: 80%;
}

.set-z-index {
  z-index: -1;
}

.set-right {
  top: -14%;
  right: -40%;
}

.set-left {
  bottom: -14%;
  left: -40%;
}

.img {
  width: 100%;

  padding-bottom: 1rem;
  margin-bottom: 1rem;

  border-bottom: 4px solid #2C2C54;
}

.text {
  font-size: 1.2rem;
}

.heading {
  font-size: 1.6rem;
  margin-bottom: .4rem;
}

.tools-container {
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
}

.links-container {
  display: flex;
  flex-direction: column;
}

.tools {
  display: flex;
  gap: 1rem;

  flex-wrap: wrap;
}

.tool {
  border: 2px solid #2C2C54;
  box-shadow: 2.6px 2.6px 0px #2C2C54;

  padding: 0 1rem;
}

.links {
  display: flex;
  gap: 1rem;

  flex-wrap: wrap;
}

.link {
  border: 2px solid #2C2C54;
  box-shadow: 2.6px 2.6px 0px #2C2C54;

  padding: 0 1rem;
}
</style>