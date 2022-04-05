<template>
  <!--  OUVREZ le lien du projet à droite dans un nouvel onglet pour voir la modification de l'URL lors de la navigation   -->
  <nav class="d-flex flex-row align-items p-20">
    <router-link to="/a" class="mr-10"> Page A</router-link>
    <router-link class="mr-10" to="/b"> Page B</router-link>
  </nav>
  <div class="d-flex flex-row justify-content-center">
    <router-view v-slot="{ Component, route }">
      <Transition :name="route.meta.animation" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './assets/scss/base.scss';

nav {
  background-color: var(--primary-1);
  a {
    color: white;
  }
}

.fade-enter-from {
  transform: scale(0) rotate(-360deg);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-leave-to {
  transform: scale(2) rotate(360deg);
  opacity: 0;
}
</style>
