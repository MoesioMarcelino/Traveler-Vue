import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/Login.vue'

const routes = [
	{
		path: '/',
		component: Login
	},
]

const router = new createRouter({
	routes,
	history: createWebHistory(),
})

export default router