// import { createPinia } from 'pinia';
import Plausible from 'plausible-tracker';
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import { useUserStore } from './stores/user';

const { enableAutoPageviews, enableAutoOutboundTracking } = Plausible({
  domain: 'lookafterthepennies.com',
  apiHost: 'https://lookafterthepennies.com/stats',
});

// This tracks the current page view and all future ones as well
enableAutoPageviews();
enableAutoOutboundTracking();

// import './assets/main.css';

// const pinia = createPinia();

const app = createApp(App);

// app.use(pinia);

// const userStore = useUserStore();
// userStore.initialise();

app.use(router);

app.mount('#app');
