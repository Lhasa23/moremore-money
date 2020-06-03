<template>
	<Layout class-prefix="main">
		<div class="computer">
			<div class="output">100</div>
			<div class="button-group">
				<button class="first-layer">1</button>
				<button class="second-layer">2</button>
				<button class="third-layer">3</button>
				<button class="forth-layer">删除</button>
				<button class="second-layer">4</button>
				<button class="third-layer">5</button>
				<button class="forth-layer">6</button>
				<button class="fifth-layer">清空</button>
				<button class="third-layer">7</button>
				<button class="forth-layer">8</button>
				<button class="fifth-layer">9</button>
				<button class="enter">ENTER</button>
				<button class="forth-layer zero">0</button>
				<button class="point">.</button>
			</div>
		</div>
		<div class="account-type">
			<div class="tab-selected">收入</div>
			<div>支出</div>
		</div>
		<div class="remark">
			<span>备注</span>
			<input type="text" placeholder="请在这里添加备注">
		</div>
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
	</Layout>
</template>

<script lang="ts">
	import {Vue} from 'vue-property-decorator'

	export default class Account extends Vue {
	}
</script>

<style lang="scss">
	.main-content {
		display: flex;
		flex-direction: column-reverse;
	}
</style>
<style lang="scss" scoped>
	@import "~@/assets/styles/helper.scss";


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

	.account-type {
		font-size: 24px;
		background-color: #C1FD78;
		display: flex;
		text-align: center;

		> div {
			width: 50%;
			height: 56px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			position: relative;

			&.tab-selected::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 4px;
				background-color: #616161;
			}
		}
	}

	.computer {
		.output {
			@extend %innerShadow;

			color: #333333;
			background-color: #E9FFCC;
			font-size: 36px;
			font-family: Consolas, monospace;
			padding: 6px 12px;
			text-align: right;
		}

		.button-group {
			@extend %clearFix;

			button {
				border: none;
				width: 25%;
				height: 60px;
				float: left;

				&.zero {
					width: 50%;
				}

				$btnCol: #eeffd9;

				&.first-layer {
					background-color: $btnCol;
				}

				&.second-layer {
					background-color: darken($btnCol, 6%);
				}

				&.third-layer {
					background-color: darken($btnCol, 12%);
				}

				&.forth-layer {
					background-color: darken($btnCol, 18%);
				}

				&.fifth-layer {
					background-color: darken($btnCol, 24%);
				}

				&.point {
					background-color: darken($btnCol, 30%);
				}

				&.enter {
					height: 120px;
					float: right;
					background-color: darken($btnCol, 36%);
				}
			}
		}

	}

</style>
