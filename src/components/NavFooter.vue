<template>
	<div>
	<router-link to="/labels">
		<svg>
			<use xlink:href="#label" />
		</svg>
		标签
	</router-link>
		|
	<router-link to="/account">回首掏</router-link>
		|
	<router-link to="/statistics">统计</router-link>
	</div>
</template>

<script lang="ts">
import label from '@/assets/icons/label.svg'
import money from '@/assets/icons/plus.svg'
import chart from '@/assets/icons/chart.svg'

export default {}
</script>

<style lang="scss" scoped>

</style>
