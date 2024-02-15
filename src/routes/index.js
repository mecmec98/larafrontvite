import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import The404 from "../views/The404.vue"
import TheUserCreation from "../views/Users/TheCreation.vue"
import TheUserTable from "../views/Users/TheTable.vue"
import TheUserCard from "../views/Users/TheCard.vue"
import TheAttendance from "../views/Users/TheAttendance.vue"
import Inventory from "../views/Inventory/TheInventory.vue"


const routes = [
{
    path:'/',
    name:'Home',
    component: Home
},
{
    path:'/Login',
    name:'Login',
    component: Login,
    props: true
},
{
    path:'/CreateUser',
    name:'CreateUser',
    component: TheUserCreation
},
{
    path:'/UserList',
    name:'UserList',
    component: TheUserTable
},
{
    path:'/UserList/:id',
    name:'UserListCard',
    component: TheUserCard,
    props: true
},
{
    path: '/Attendance',
    name:'Attendance',
    component: TheAttendance
},
{
    path: '/Inventory',
    name:'Inventory',
    component: Inventory
},
//404 catcher
{
    path:'/:catchAll(.*)',
    name: '404',
    component: The404
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router