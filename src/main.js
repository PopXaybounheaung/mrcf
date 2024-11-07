import Chart from 'chart.js/auto';
import { CategoryScale, LinearScale } from 'chart.js';

// Register the scales
Chart.register(CategoryScale, LinearScale);


import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Dashboard from './views/Dashboard.vue'

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')