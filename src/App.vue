<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script></script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
}

body {
	font-size: 1.1rem;
  font-family: sans-serif;
	background:linear-gradient( $light-background-color 100%, $light-background-color 100%), url('@/assets/img/IMG_8533.JPG');
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.persons__body,
.products__body,
.results__body {
	width: 50%;
	height: 100%;
	min-height: 400px;
	margin: 0 auto;
	border: 2px solid $light-white-color;
	border-radius: 20px;
	background-color: transparent;
	backdrop-filter: blur(15px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.header {
	padding: 15px 15px 0px;
}

.content {
	/* при добавлении scss сделать, чтобы высота изменялась от 
	кол-ва элементов */
	padding: 15px;
}

.footer {
	padding: 15px;
	align-self: center;
}

.header-list {
	margin-bottom: 15px;
}

.header-list, .footer-list, .results__header  {
	font-family: PacificoRegular !important;
}

.content-list {
	width: 100%;
  height: 300px;
	/* сделать вычисляемой, чтобы не обрезались item */
	overflow-y: scroll;
  background-color: transparent;
}

.content-list::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
}

.content-list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: $border-brown-color;
}

.content-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: transparent;
}

.content-list > * {
	border: 2px solid $border-brown-color;
	border-radius: 10px;
	margin: 0px 5px 15px 0px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.list__item, .product-item__content > div  {
  border: 2px solid $border-brown-color;
	border-radius: 10px;
	padding: 10px 15px;
}

.list__item {
	margin: 0px 5px 15px 0px;
}

.name {
	font-family: sans-serif;
	font-weight: 600;
	font-size: 1.35rem;
	text-align: center;
}

</style>
