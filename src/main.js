import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import CoffeePlan from './components/CoffeePlan.vue' // globally registering a component

createApp(App)
    // .component("CoffeePlan", CoffeePlan) // globally registering a component
    .mount('#app')
