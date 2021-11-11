<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
	html,
	body,
	#app,
	#container {
		height: 100%;
		padding: 0;
		margin: 0;
	}

	#container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	// .icon {
	// 	width: 1em;
	// 	height: 1em;
	// 	vertical-align: -0.15em;
	// 	fill: currentColor;
	// 	overflow: hidden;
	// }
</style>
