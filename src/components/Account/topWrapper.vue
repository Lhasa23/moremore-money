<template>
	<div class="top-wrapper">
		<div class="labels">
			<div class="label-item">衣</div>
			<div class="label-item">食</div>
			<div class="label-item">住</div>
			<div class="label-item">行</div>
			<div class="label-item">衣</div>
			<div class="label-item">食</div>
			<div class="label-item">住</div>
			<div class="label-item">行</div>
			<div class="label-item">食</div>
			<div class="label-item">住</div>
			<div class="label-item">行</div>
			<div class="label-item">衣</div>
			<div class="label-item">食</div>
			<div class="label-item">住</div>
			<div class="label-item">行</div>
			<div class="label-item">行</div>
			<div class="label-item">衣</div>
			<div class="label-item">衣</div>
			<div class="label-item">食</div>
			<div class="label-item">住</div>
			<div class="label-item">住</div>
			<div class="label-item">行</div>
			<div class="label-item">行</div>
			<div class="label-item">衣</div>
			<div class="label-item">衣</div>
			<div class="label-item">食</div>
			<div class="label-item">住</div>
			<div class="label-item">住</div>
			<div class="label-item">住</div>
			<div class="label-item">行</div>
			<div class="label-item">行</div>
			<div class="label-item">行</div>
		</div>
		<div class="top-footer">
			<router-link to="/labels" class="add-label">
				添加标签
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "topWrapper"
	}
</script>

<style lang="scss" scoped>
	.top-wrapper {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		font-size: 14px;

		.labels {
			display: flex;
			align-items: flex-end;
			margin-left: 4px;
			flex-wrap: wrap;
			max-height: 100%;
			overflow: auto;

			.label-item {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 8px 8px 0 0;
				padding: 0 18px;
				height: 24px;
				border-radius: 12px;
				background-color: rgba(136, 255, 96, 0.7);
			}

		}

		.top-footer {
			color: #999999;
			padding: 12px 4px 4px;

			a {
				border-bottom: 1px solid;
			}

		}
	}
</style>
