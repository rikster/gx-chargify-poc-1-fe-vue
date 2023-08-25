import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import BillingHistory from "./components/BillingHistory.vue";
import SubscriptionManager from "./components/SubscriptionManager.vue";
import CustomerDetails from "./components/CustomerDetails.vue";




const routes = [
    { path: '/billing-history', component: BillingHistory },
    { path: '/subscription-manager', component: SubscriptionManager },
    { path: '/customer-details', component: CustomerDetails },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
