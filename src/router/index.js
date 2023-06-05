import { createRouter, createWebHistory } from 'vue-router'

import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";
import Service from "../components/pages/Service.vue";
import ServiceDetails from "../components/pages/ServiceDetails.vue";
import Contact from "../components/pages/Contact.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/service',
            name: 'service',
            component: Service
        },
        {
            path: '/service/details',
            name: 'serviceDetails',
            component: ServiceDetails
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})

export default router