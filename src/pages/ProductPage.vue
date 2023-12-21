<template>
	<div class="products">
		<div class="products__body">
			<div class="products__header header">
				<product-form :persons="getPersons" @add="add"></product-form>
			</div>
			<div class="products__content content">
				<product-list
					:products="getProducts"
					:persons="getPersons"
					@remove="remove"
				></product-list>
			</div>
			<div class="products__footer footer next-btn">
				<app-button :class="{disabled : hasError}" @click="allowTransition"
					>{{ buttonContent }}</app-button
				>
			</div>
		</div>
	</div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue'
import ProductList from '@/components/ProductList.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
	data() {
		return {
			buttonContent: 'Получить результаты',
			hasError: false, // later changed on true, initial length = 0
		}
	},
	components: {
		ProductForm,
		ProductList,
	},
	computed: {
		...mapGetters({
			getProducts: 'product/getProducts',
			getProductsLength: 'product/getProductsLength',
			getPersons: 'person/getPersons',
		}),
	},
	methods: {
		...mapMutations({
			addProduct: 'product/addProduct',
			removeProduct: 'product/removeProduct',
		}),

		add(product) {
			this.addProduct(product)
		},

		remove(product) {
			this.removeProduct(product)
		},

		allowTransition() {
			const len = this.getProductsLength;
			this.hasError = true;

			if (len === 0) {
				this.buttonContent = 'А чего считать-то? Добавьте что-нибудь!';
			} else if (len === 1) {
				this.buttonContent = 'А что это мы на диете? Добавьте что-нибудь еще!';
			} else { 
				this.buttonContent = 'Получить результаты';
				this.$router.push('/results');
				this.hasError = false;
			}
		},
	},
}
</script>