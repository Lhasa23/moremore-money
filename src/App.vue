<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style lang="scss">
	@import "~@/assets/styles/reset.scss";
	@import "~@/assets/styles/helper.scss";

	#app {
		max-width: 460px;
		margin: 0 auto;
	}

	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: $font-hei;
		line-height: 1.5;
		color: #333;
		font-size: 16px;
	}

</style>
