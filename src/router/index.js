import Vue from 'vue'
import VueRouter from 'vue-router'
//import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'login',
		redirect: '/login'
	},
	{
		path: '/register',
		name: 'register',
		component: () => import( /* webpackChunkName: "about" */ '../views/Register.vue')
	},
	{
		path: '/home',
		name: 'home',
		component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
	},
	{
		path: '/index',
		name: 'index',
		component: () => import( /* webpackChunkName: "about" */ '../views/Index.vue')
	},
	{
		path: '/login',
		name: 'login',
		// route level code-splitting路由懒加载
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: Login
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
