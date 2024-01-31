import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import TheUserCreation from "../views/TheUserCreation.vue"
import TheUserTable from "../views/TheUserTable.vue"


const routes = [
{
    path:'/',
    name:'Home',
    component: Home
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
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router