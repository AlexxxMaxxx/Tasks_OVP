<template>
	<div class="products">
		<div class="products__body">
			<div class="products__header header">
				<product-form @add="add"></product-form>
			</div>
			<div class="products__content content">
				<product-list :products="getProducts" @remove="remove"></product-list>
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
import { mapGetters, mapMutations } from 'vuex';

export default {
	components: {
		ProductForm,
		ProductList
	},
	computed: {
		...mapGetters({
			getProducts: 'product/getProducts'
		}),
	},
	methods: {
		...mapMutations({
			addProduct: 'product/addProduct',
			removeProduct: 'product/removeProduct'
		}),

		add(product) {
			this.addProduct(product);
		},
		remove(product) {
			this.removeProduct(product);
		}
	}
}
</script>

<style scoped></style>
