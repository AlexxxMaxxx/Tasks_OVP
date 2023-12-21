<template>
	<div class="text-field">
		<label v-show="isLabel" class="text-field__label label" for="text"
			><slot></slot
		></label>
		<input
			:value="modelValue"
			@input="updateInput"
			class="text-field__input input"
			name="text"
		/>
	 <!-- <v-text-field :rules="rules"></v-text-field>-->
		
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
