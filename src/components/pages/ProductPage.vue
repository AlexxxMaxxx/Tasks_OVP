<template>
	<div class="products">
		<div class="products__body">
			<div class="products__header header">
				<product-form @addProduct="addProduct"></product-form>
			</div>
			<div class="products__content content">
				<product-list :products="products" @removeProduct="removeProduct"></product-list>
			</div>
			<div class="products__footer footer">
				<app-button class="next-btn" @click="$router.push('/results')">Дальше</app-button>
			</div>
		</div>
	</div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';
import ProductList from '@/components/ProductList.vue';

export default {
	components: {
		ProductForm,
		ProductList
	},
	data() {
		return {
			products: [ /*потом очистить*/
				{ id: 1, name: 'Чизбургер', price: 100, amount: 4},
				{ id: 2, name: 'Картошка фри', price: 70, amount: 2 },
				{ id: 3, name: 'Сырный соус', price: 40, amount: 2 },
				{ id: 4, name: 'Кока-кола', price: 60, amount: 1 },
			],
		}
	},
	methods: {
		addProduct(product) {
			this.products.push(product);
		},
		removeProduct(product) {
			this.products = this.products.filter(p => p.id !== product.id);
		}
	}
}
</script>

<style scoped>
</style>
