import { RouteRecordRaw } from 'vue-router';
import PageA from './PageA.vue';

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
    component: () => import('./PageB.vue'),
  },
];
