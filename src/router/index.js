import Vue from 'vue'
import VueRouter from 'vue-router'
//一级路由
import MoviePage from "../views/MoviePage";
Vue.use(VueRouter)

const routes = [
    {
        path: '/', name: 'movie', component: MoviePage, alias: '/movie'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
