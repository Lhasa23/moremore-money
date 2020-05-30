<template>
	<svg class="icon">
		<use :xlink:href="'#'+link" />
	</svg>
</template>

<script lang="ts">
	let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
	try {importAll(require.context('../assets/icons', true, /\.svg$/))} catch (error) {console.log(error)}
	export default {
		name: "icons",
		props: {
			link: {
				type: String
			}
		}
	}
</script>

<style lang="scss" scoped>
.icon {
	width: 32px;
	height: 32px;
	vertical-align: -0.15em;
	fill: #88FF60;
	overflow: hidden;
}
</style>
