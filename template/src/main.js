import { createApp } from 'vue'
import { TroisJSVuePlugin } from 'troisjs';
import App from './App.vue'

const app = createApp(App)
app.use(TroisJSVuePlugin);
app.mount('#app')
