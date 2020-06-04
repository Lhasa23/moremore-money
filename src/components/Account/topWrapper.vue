<template>
	<div class="top-wrapper">
		<div class="labels">
			<div
				class="label-item"
				:class="{selected: item.selected}"
				v-for="item in labels"
				:key="item.name"
				@click="toggleSelection(item)"
			>
				{{item.name}}
			</div>
		</div>
		<div class="top-footer">
			<button class="add-label" @click="addLabel">
				添加标签
			</button>
		</div>
	</div>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from 'vue-property-decorator';
	import Label from '@/interfaces/label';

	@Component
	export default class topWrapper extends Vue {
		selectedLabels: Array<Label> = [];
		@Prop({
			type: Array,
			default: []
		})
		labels!: Array<Label>;

		toggleSelection(label: Label) {
			const selInx = this.selectedLabels.findIndex(item => label.name === item.name);
			if (selInx > -1) {
				this.selectedLabels.splice(selInx, 1);
				label.selected = false;
			} else {
				this.selectedLabels.push(label);
				label.selected = true;
			}
		}

		addLabel() {
			const randomNum = Math.random().toString().slice(2);
			const name = window.prompt('请输入标签名');
			if (name) {
				const existed = this.labels.findIndex(item => item.name === name)
				if (existed === -1) {
					let temp: Label = {
						name,
						selected: false
					};
					this.labels.push(temp);
					this.$emit('update:labels', this.labels);
				} else {
					window.alert('该标签已存在');
				}
			}
		}
	}
</script>

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

			.selected {
				background-color: $color-highlight;
			}

		}

		.top-footer {
			padding: 12px 8px 8px;

			.add-label {
				color: #999999;
				background-color: inherit;
				border: none;
				border-bottom: 1px solid;
			}

		}
	}
</style>
