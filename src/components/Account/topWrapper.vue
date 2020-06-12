<template>
	<div class="top-wrapper">
		<div class="labels">
			<div
				class="label-item"
				:class="{selected: selectedLabels.findIndex(name => name === item) > -1}"
				v-for="item in labels"
				:key="item"
				@click="toggleSelection(item)"
			>
				{{item}}
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
	import {Component, Vue} from 'vue-property-decorator';
	import {labelModel} from '@/utils/model';

	labelModel.fetch();
	@Component
	export default class topWrapper extends Vue {
		selectedLabels: string[] = [];
		labels: string[] = labelModel.data;

		toggleSelection(label: string) {
			const selInx = this.selectedLabels.findIndex(item => label === item);
			if (selInx > -1) {
				this.selectedLabels.splice(selInx, 1);
			} else {
				this.selectedLabels.push(label);
			}
			this.$emit('update:select', this.selectedLabels);
		}

		addLabel() {
			const name = window.prompt('请输入标签名');
			if (name) {
				const existed = this.labels.findIndex(item => item === name);
				if (existed === -1) {
					labelModel.create(name)
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
