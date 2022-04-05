import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  scrollBehavior(to, from, savePosition) {
    console.log(to);
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: 'smooth',
      };
    }
    return {
      top: 0,
    };
  },
});

const app = createApp(App);

app.use(router);

app.mount('#app');
