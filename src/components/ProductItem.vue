<template>
	<div class="product-item">
		<div class="product-item__header">
			<div class="product-item__name name">{{ product.name }}</div>
			<app-button
				class="product-item__rmv-btn rmv-btn"
				@click="$emit('remove', product)"
				>Удалить</app-button
			>
		</div>

		<div class="product-item__content">
			<div class="product-item__number-field">
				<span>Стоимость:</span> {{ product.price }}
			</div>
			<div class="product-item__number-field">
				<span>Количество:</span> {{ product.amount }}
			</div>
			<div class="product-item__number-field">
				<span>Итого:</span> {{ product.total }}
			</div>
			<div class="product-item__select-field">
				<span>Кто угощает:</span> {{ product.payer.name }}
			</div>
			<div class="product-item__checkbox-field">
				<span>Кто использовал:</span>
				<div v-for="chosenPeople in product.chosenPeople">
					{{ chosenPeople.name }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			required: true,
		},
		persons: {
			type: Array,
			required: true,
		},
	},
}
</script>
