import { createRouter,createWebHistory} from "vue-router"


const routes = [
    {

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
