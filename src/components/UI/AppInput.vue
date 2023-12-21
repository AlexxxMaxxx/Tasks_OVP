<template>
	<div class="text-field">
		 <label v-show="isLabel"
		 class="text-field__label label" 
		 for="text"><slot></slot></label>
		 <input 
		 :value="modelValue" 
		 @input="updateInput" 
		 class="text-field__input input" 
		 name="text"/>
	</div>
</template>

<script>
export default {
	name: 'app-input',
	props: {
		modelValue: [String, Number],
		isLabel: Boolean,
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		},
	},
}
</script>

<style lang='scss' scoped>
.text-field {
	display: flex;
	flex-direction: column;
}
.label {
  margin-bottom: 0.25rem;
	font-size: .75rem;
	color: $dark-brown-color;
}
.text-field__input {
	padding: 5px 10px;
	background: transparent;
	border: 2px solid $border-blue-color;
	color: $dark-brown-color;
  border-radius: 0.25rem;
	font-size: 1rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.text-field__input::placeholder {
      color: #212529;
      opacity: 0.4;
    }
.text-field__input:focus {
  color: #220101;
  border-color: $light-white-color;
  outline: 0;
  box-shadow: 0px 0px 0px 0.01rem $light-white-color, 
	0px 0px 10px 0.01rem $light-white-color, 
	0px 0px 20px 0.01rem $light-white-color;
}

.invalid > .text-field__input{ /* заменить потом на scss, если ошибка делаем красную рамку */
	border: 1px solid $border-red-color;
	box-shadow: 0px 0px 0px 0.01rem $light-pink-color, 
	0px 0px 10px 0.01rem $light-red-color, 
	0px 0px 20px 0.01rem $border-red-color;
}
</style>
