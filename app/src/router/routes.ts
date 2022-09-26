import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',

    component: () => import('layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },
  {
    path: '/accounts',

    component: () => import('layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'Accounts',
        component: () => import('pages/AccountsPage.vue'),
      },
    ],
  },
  {
    path: '/transactions',

    component: () => import('layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'Transactions',
        component: () => import('pages/TransactionsPage.vue'),
      },
    ],
  },
  {
    path: '/login',

    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('pages/LoginPage.vue'),
      },
    ],
  },
  {
    path: '/signup',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Signup',
        component: () => import('pages/SignupPage.vue'),
      },
    ],
  },
  {
    path: '/test',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Test', component: () => import('pages/TestPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
