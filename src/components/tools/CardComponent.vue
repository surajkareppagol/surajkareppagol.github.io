<template>
  <div class="container">
    <!-- <div class="knowledge-container">
    </div> -->

    <div class="description-container">
      <div class="img-container">
        <img class="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" />
        <div class="hr"></div>
      </div>


      <p class="description">🪴 What do I love about C? Its compact size, blazing speed, and the unparalleled control it
        offers. Using C feels
        like home.</p>
    </div>

    <p class="projects">🚀 10 Projects</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  width: 100%;
  /* width: 38rem; */

  border: 4px solid #2C2C54;
  box-shadow: 16px -20px 0px #2C2C54, 4px -4px 0px #2C2C54;

  background-color: #fff;

  display: flex;
  flex-direction: column;

  padding: .4rem 1rem;

  position: relative;
}

.projects {
  position: absolute;
  top: -6%;
  right: 2%;

  background-color: #2C2C54;
  color: #fff;

  border: 4px solid #fff;

  padding: .2rem .6rem;
}

.knowledge-container {
  /* width: 100%; */
  height: .5rem;

  background: linear-gradient(90deg,
      #2C2C54 0% 30%,
      #fff 30% 100%);
}

.description-container {
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: justify;
}

.img-container {
  position: relative;
  flex: 0.6;
}

.img {
  width: 100%;
}

.hr {
  border: 2px dashed #2C2C54;
  /* width: 1; */
  /* box-shadow: 16px -20px 0px #2C2C54, 4px -4px 0px #2C2C54; */
  height: 8rem;

  position: absolute;

  top: 50%;
  right: -2%;

  /* flex: 1; */

  transform: translateY(-50%);
}

.description {
  font-size: 1.2rem;

  /* border-left: 4px dashed #2C2C54; */
  padding-left: 1rem;

  flex: 1;
}
</style>