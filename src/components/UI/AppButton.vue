<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'app-button',
}
</script>

<style scoped>
.add-btn {
	background: rgb(169, 213, 178);
}

.rmv-btn {
	background: rgb(217, 154, 146);
}

.next-btn {
	background: rgb(160, 168, 227);
}

.disabled {
	background: rgb(219, 90, 72);
}

.btn {
	padding: 5px 10px;
	color: rgb(51, 50, 50);
	border: 2px solid grey;
}
</style>
