<template>
	<div class="main">
		<h1 class="glow">
			<span>Добро </span> 
			<span>пожаловать </span> 
			<span>на </span> 
			<span>наш </span> 
			<span>сайт</span>
		</h1>
		
		<app-button class="next-btn" @click="$router.push('/persons')"
			>Дальше</app-button
		>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
 .main {
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
 }
 .main h1 {
	color: $dark-brown-color;
	font-size: 48px;
	letter-spacing: 3px;
	font-family: PacificoRegular;
	//text-transform: uppercase;
 }
 .glow span {
	transition: all .3s;
 }

 .glow span:hover {
	text-shadow: 0 0 10px $light-pink-color,
	0 0 30px $light-pink-color,
	0 0 80px $light-pink-color,
	0 0 160px $light-pink-color;
	color: $light-brown-color;
}
</style>
