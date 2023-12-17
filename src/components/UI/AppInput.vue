<template>
	<input :value="modelValue" @input="updateInput" class="input" type="text"/>
</template>

<script>
export default {
	name: 'app-input',
	props: {
		modelValue: [String, Number],
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		},
	},
}
</script>

<style scoped>
.input {
	padding: 5px 10px;
	border: 2px solid grey;
}

.invalid { /* заменить потом на scss, если ошибка делаем красную рамку */
	border: 1px solid red;
}
</style>
