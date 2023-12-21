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
