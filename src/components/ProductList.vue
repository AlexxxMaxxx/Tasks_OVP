<template>
	<div class="product-list">
		<div class="product-list__header-list header-list">
			<h2>{{ getHeaderList }}</h2>
		</div>
		<div class="product-list__content-list content-list">
			<product
				v-for="product in products"
				:product="product"
				:persons="persons"
				:key="product.id"
				@remove="$emit('remove', product)"
			/>
		</div> 
		<div class="product-list__footer-list footer-list">
			<h2>Промежуточный итог: {{ getSubtotal }}</h2>
		</div>
	</div>
</template>

<script>
import Product from '@/components/ProductItem.vue'
export default {
	props: {
		products: {
			type: Array,
			required: true,
		},
		persons: {
			type: Array,
			required: true,
		},
	},
	components: {
		Product,
	},
	computed: {
		getHeaderList() {
			const amountProducts = this.products.length
			const modulo = amountProducts % 10

			if (amountProducts) {
				if (
					modulo === 0 ||
					modulo > 4 ||
					(amountProducts > 10 && amountProducts < 15)
				) {
					return amountProducts + ' позиций'
				} else if (modulo === 1) {
					return amountProducts + ' позиция'
				} else {
					return amountProducts + ' позиции'
				}
			} else {
				return 'А чего это мы голодаем? Добавьте что-нибудь!'
			}
		},
		getSubtotal() {
			let subtotal = 0
			this.products.forEach((product) => {
				subtotal += product.total
			});
			return subtotal
		}
	},
}
</script>