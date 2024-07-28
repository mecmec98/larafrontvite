import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '../stores/auth'

//User Imports

import Home from "../views/Home.vue"
import The404 from "../views/The404.vue"
import TheUserCreation from "../views/Users/TheCreation.vue"
import TheUserTable from "../views/Users/TheTable.vue"
import TheUserCard from "../views/Users/TheCard.vue"
import TheAttendance from "../views/Users/TheAttendance.vue"
import TheProfile from "../views/TheProfile.vue"
import TheLogin from "../views/TheLogin.vue"

//Billing Imports
import Test from "../views/Billing/Billtest.vue"
import Consumer from "../views/Billing/Consumer.vue"
import Discount from "../views/Billing/Setting.vue"


//    meta: { requiresAuth: true },
const routes = [
    {
        path: '/',
        name: 'Login',
        component: TheLogin,
        meta: { requiresAuth: false }
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/CreateUser',
        name: 'CreateUser',
        component: TheUserCreation,
        meta: { requiresAuth: true }
    },
    {
        path: '/UserList',
        name: 'UserList',
        component: TheUserTable,
        meta: { requiresAuth: true }
    },
    {
        path: '/UserList/:id',
        name: 'UserListCard',
        component: TheUserCard,
        meta: { requiresAuth: true },
        props: true
    },
    {
        path: '/Attendance',
        name: 'Attendance',
        component: TheAttendance,
        meta: { requiresAuth: true },
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: TheProfile,
        meta: { requiresAuth: true },
    },
    //Billing Routes
    {
        path: '/BillingTest',
        name: 'BillingTest',
        component: Test,
        meta: { requiresAuth: true },
    }, 
    {
        path: '/Consumers',
        name: 'Consumer',
        component: Consumer,
        meta: { requiresAuth: true },
    },
    {
        path: '/Settings',
        name: 'Setting',
        component: Discount,
        meta: { requiresAuth: true },
    },

    //404 catcher
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: The404
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

//for authentication

router.beforeEach((to, from, next) => {

    const authStore = useAuthStore()

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        // Redirect to login page if not authenticated
        next('/');
    } else {
        next();
    }
})

export default router