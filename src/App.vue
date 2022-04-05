<template>
  <!--  OUVREZ le lien du projet à droite dans un nouvel onglet pour voir la modification de l'URL lors de la navigation   -->
  <div class="container">
    <nav class="d-flex flex-row align-items p-20">
      <router-link to="/a" class="mr-10"> Page A</router-link>
      <router-link class="mr-10" to="/b"> Page B</router-link>
    </nav>
    <div class="d-flex flex-row justify-content-center">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './assets/scss/base.scss';

nav {
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: var(--primary-1);
  a {
    color: white;
  }
}

.container {
  margin-top: 60px;
}
</style>
