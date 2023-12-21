<template>
	<div class="product-item">
		<div class="product-item__header">
			<div class="product-item__name name">{{ product.name }}</div>
			<app-button
				class="product-item__rmv-btn rmv-btn"
				@click="$emit('remove', product)"
				>Удалить</app-button>
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

<style lang='scss' scoped>
.product-item {
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.product-item__header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0px 15px 15px;
}

.product-item__content {
	/* media-запрос при уменьшении размера окна */
	display: flex;
	justify-content: flex-start;
	padding: 15px;
	flex-wrap: wrap;
	gap: 15px;
}

.product-item__content > div {
	width: 40%;
	flex-grow: 2;
	border: 1px solid $light-white-color;
}

.product-item__content > div > span {
	font-weight: 900;
}

.product-item__checkbox-field {
	flex-grow: 2;
	order: 2
}
</style>
