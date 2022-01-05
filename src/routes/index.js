import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import Cities from '../pages/Cities.vue'

const routes = [
	{
		path: '/',
		component: Login
	},
	{
		path: '/dashboard',
		component: Dashboard,
		children: [
			{
				path: '/cities',
				component: Cities
			}
		]
	}
]

const router = new createRouter({
	routes,
	history: createWebHistory(),
})

export default router