<template>
	<div class="person-item">
		<div class="person-item__name name">{{ person.name }}</div>
		<app-button
			class="person-item__rmv-btn rmv-btn"
			@click="$emit('remove', person)"
			>Удалить</app-button
		>
	</div>
</template>

<script>
export default {
	props: {
		person: {
			type: Object,
			required: true,
		},
	},
}
</script>
