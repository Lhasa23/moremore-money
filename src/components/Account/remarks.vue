<template>
	<div class="remark">
		<span>备注</span>
		<input type="text" placeholder="请在这里添加备注">
	</div>
</template>

<script>
	export default {
		name: "remarks"
	}
</script>

<style lang="scss" scoped>
	.remark {
		font-size: 14px;
		background-color: #E9FFCC;
		color: #333333;
		display: flex;
		padding: 0 16px;
		align-items: center;

		span {
			padding-right: 16px;
		}

		input {
			border: none;
			background-color: #E9FFCC;
			padding: 16px 0;
			flex-grow: 1;
		}
	}
</style>
