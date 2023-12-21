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

<style lang="scss" scoped>
.add-btn, .select-btn {
	background: $light-blue-color;
	border: 1px solid $border-blue-color;
}
.rmv-btn {
	background: $light-brown-color;
	border: 1px solid $border-brown-color;
}

.add-btn, .rmv-btn, .select-btn {
	font-size: 14px;
}
.main > .next-btn {
	font-size: 20px;
	letter-spacing: 3px;
	border: 3px solid $border-brown-color;
	background-color: $light-brown-color;
	box-shadow: -3px -5px 1px rgba(241, 238, 234, 0.352);
	transition: all .3s;
}
.next-btn {
	font-size: 16px;
	letter-spacing: 1px;
	border: 2px solid $border-yellow-color;
	background-color: $light-yellow-color;
	box-shadow: -3px -5px 1px rgba(241, 238, 234, 0.352);
	transition: all .3s;
}
 .selected {
	border: 2px solid $light-white-color;
 }

.next-btn:hover {
	color: $brown-color;
	border: 0px;
	background-color:  $light-brown-color;
	box-shadow: 10px 10px 75px 10px $light-pink-color,
	10px 10px 150px 10px $light-pink-color;
}
.disabled {
	border: none;
	background: $light-red-color;
}

.disabled:hover {
	color: $brown-color;
	border: 0px;
	background-color: $light-background-color;
	box-shadow: none;
}

.btn {
	padding: 5px 10px;
	font-weight: 300;
	text-transform: uppercase;
  font-family: sans-serif;
	font-weight: 400;
	border-radius: 5px;
}
</style>
