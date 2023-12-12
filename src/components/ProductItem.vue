<template>
	<div class="product-item">
		<div class="product-item__header">
			<div class="product-item__text-property">{{ product.name }}</div>
			<div class="product-item__number-property">
				Итого: {{ product.total }}
			</div>
		</div>

		<div class="product-item__content">
			<div class="product-item__number-property">
				Стоимость: {{ product.price }}
			</div>
			<div class="product-item__number-property">
				Количество: {{ product.amount }}
			</div>
			<div class="product-item__select-property">
				Кто угощает: {{ product.payer.name }}
			</div>
			<div class="product-item__checkbox-property">
				Кто использовал:
				<div v-for="chosenPeople in product.chosenPeople">
					{{ chosenPeople.name }}
				</div>
			</div>
			<app-button
				class="product-item__rmv-btn rmv-btn"
				@click="$emit('remove', product)"
				>Удалить</app-button
			>
		</div>

		<div class="product-item__content_hidden"></div>
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

<style scoped>
.product-item {
	/* доделать */
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.product-item__header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 15px;
	background-color: rgb(134, 127, 140);
}

.product-item__header div:first-child {
	font-weight: bold;
}

.product-item__content {
	/* media-запрос при уменьшении размера окна */
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 15px;
	background-color: rgb(210, 207, 213);
}
</style>
