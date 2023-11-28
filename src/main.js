import { createApp } from 'vue'
import App from './App.vue'
import components from "@/components/UI";
//import router from './router'
//import store from './store'

const app = createApp(App)

components.forEach(component => 
    app.component(component.name, component));

app.mount('#app')
