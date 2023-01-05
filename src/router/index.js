import { createRouter,createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import Profile from "../views/Profile.vue"

const routes = [
    {
        path: '/',
        name: 'root',
        component:HomeView
    },
    {
        path:'/profile',
        name:'profile',
        component:Profile
    }
]


const router = createRouter({
    history: createWebHistory("/"),
    routes,
    scrollBehavior(){
        document.getElementById("app").scrollIntoView();
    }
})

export default router
