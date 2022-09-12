import { createPinia } from 'pinia';
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { useUserStore } from './stores/user';

import './assets/main.css';

const pinia = createPinia();

const app = createApp(App).use(pinia);

const userStore = useUserStore();
userStore.initialise();

app.use(router);

app.mount('#app');
