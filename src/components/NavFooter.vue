<template>
	<nav>
		<router-link to="/labels" class="nav-item" active-class="active-nav">
			<icons link="label"/>
			标签
		</router-link>
		<router-link to="/account" class="nav-item" active-class="active-nav">
			<icons link="plus"/>
			回手掏
		</router-link>
		<router-link to="/statistics" class="nav-item" active-class="active-nav">
			<icons link="chart"/>
			统计
		</router-link>
	</nav>
</template>

<script lang="ts">
	export default {}
</script>

<style lang="scss" scoped>
	@import "~@/assets/styles/helper.scss";

	nav {
		@extend %outerShadow;

		display: flex;
		font-size: 14px;
		max-height: 56px;

		.nav-item {
			padding: 2px 0;
			width: 33.333333%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			color: #88FF60;
		}

		.active-nav {
			background-color: $color-highlight;
		}
	}
</style>
