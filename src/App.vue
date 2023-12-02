<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script></script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
}
/*потом перенести в отдельный файл со стилями.scss*/
.persons__body, .products__body {
	width: 50%;
	height: 100%;
	min-height: 400px;
	margin: 0 auto;
	background-color: rgba(192, 172, 172, 0.349);

	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.header {
	padding: 15px;
	background-color: rgb(134, 127, 140);
}
.content {
	/* при добавлении scss сделать, чтобы высота изменялась от 
	кол-ва элементов */
	padding: 15px;
	background-color: rgb(189, 184, 193);
}
.footer {
	padding: 15px;
	background-color: rgb(231, 227, 234);
}
.header-list {
	margin-bottom: 15px;
}
.content-list{
	width: 100%;
	height: 300px; /* сделать вычисляемой, чтобы не обрезались item */
	overflow-y: scroll;
 /* изменить стили скролла */
}
.content-list > * {
	border: 2px solid grey;
	margin: 0px 5px 15px 0px;
}
</style>
