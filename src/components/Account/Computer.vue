<template>
	<div class="computer">
		<div class="output">{{output}}</div>
		<div class="button-group">
			<button class="first-layer" @click="onClickBtn">1</button>
			<button class="second-layer" @click="onClickBtn">2</button>
			<button class="third-layer" @click="onClickBtn">3</button>
			<button class="forth-layer" @click="backSpace">删除</button>
			<button class="second-layer" @click="onClickBtn">4</button>
			<button class="third-layer" @click="onClickBtn">5</button>
			<button class="forth-layer" @click="onClickBtn">6</button>
			<button class="fifth-layer" @click="clearUp">清空</button>
			<button class="third-layer" @click="onClickBtn">7</button>
			<button class="forth-layer" @click="onClickBtn">8</button>
			<button class="fifth-layer" @click="onClickBtn">9</button>
			<button class="enter" @click="submitBill">ENTER</button>
			<button class="forth-layer zero" @click="onClickBtn">0</button>
			<button class="point" @click="onClickBtn">.</button>
		</div>
	</div>
</template>

<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';

	@Component
	export default class Computer extends Vue {
		output: string = '0';

		onClickBtn(event: MouseEvent) {
			const button = event.target as HTMLButtonElement;
			const input = button.textContent!;
			const pointInx = this.output.indexOf('.');
			if (this.output.length === 16) return;
			if (this.output === '0') {
				if ('0123456789'.indexOf(input) > -1) {
					this.output = input;
				} else {
					this.output += input;
				}
				return;
			}
			if (pointInx > -1 && input === '.') return;
			this.output += input;
		}

		clearUp() {
			this.output = '0';
		}

		backSpace() {
			this.output = this.output.slice(0, -1) || '0';
		}

		submitBill() {
		}
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
