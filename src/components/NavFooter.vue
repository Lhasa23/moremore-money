<template>
	<div>
	<router-link to="/labels">
		<svg>
			<use xlink:href="#label" />
		</svg>
		标签
	</router-link>
		|
	<router-link to="/account">
		<svg>
			<use xlink:href="#plus" />
		</svg>
		回首掏
	</router-link>
		|
	<router-link to="/statistics">
		<svg>
			<use xlink:href="#chart" />
		</svg>
		统计
	</router-link>
	</div>
</template>

<script lang="ts">

	let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
	try {
		importAll(require.context('../assets/icons', true, /\.svg$/))
	} catch (error) {
		console.log(error)
	}

export default {}
</script>

<style lang="scss" scoped>

</style>
