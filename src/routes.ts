import { RouteRecordRaw } from 'vue-router';
import PageA from './PageA.vue';
import PageB from './PageB.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PageA,
  },
  {
    path: '/a',
    component: PageA,
  },
  {
    path: '/b',
    component: PageB,
    meta: {
      animation: 'fade',
    },
  },
];
