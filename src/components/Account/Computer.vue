<template>
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
</template>

<script>
	export default {
		name: "Computer"
	}
</script>

<style lang="scss" scoped>
	@import "~@/assets/styles/helper.scss";

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

				&:active {
					opacity: 0.6;
				}
			}
		}

	}
</style>
