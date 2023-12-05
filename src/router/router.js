import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import PersonPage from '@/pages/PersonPage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import ResultPage from '@/pages/ResultPage.vue'

const routes = [
	{ path: '/', component: Main },
	{ path: '/persons', component: PersonPage },
	{ path: '/products', component: ProductPage },
	{ path: '/results', component: ResultPage },
]

export default createRouter({
	history: createWebHistory(),
	routes,
})
