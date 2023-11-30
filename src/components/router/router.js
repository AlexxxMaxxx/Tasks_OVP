import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/pages/Main.vue'
import PersonPage from '@/components/pages/PersonPage.vue'
import ProductPage from '@/components/pages/ProductPage.vue'
import ResultPage from '@/components/pages/ResultPage.vue'

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
