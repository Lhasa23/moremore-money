<template>
	<Layout>
		<div class="labels">
			<router-link class="label" v-for="item in labels" :key="item" :to="`/edit-labels/${item}`">
				<span>{{item}}</span>
				<icons class="icons" link="right"/>
			</router-link>
		</div>
		<div class="add-label-wrapper">
			<button class="add-label" @click="addLabel">新增标签</button>
		</div>
	</Layout>
</template>

<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';
	import {labelModel, model} from '@/utils/model';

	labelModel.fetch();
	@Component
	export default class Labels extends Vue {
		labels: string[] = labelModel.data;

		addLabel() {
			const name = window.prompt('请输入标签名');
			if (name) {
				const existed = this.labels.findIndex(item => item === name);
				if (existed === -1) {
					labelModel.create(name);
				} else {
					window.alert('该标签已存在');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.labels {
		background-color: white;
		padding-left: 16px;

		.label {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 16px;
			min-height: 44px;
			border-bottom: 1px solid #e6e6e6;

			.icons {
				width: 24px;
				height: 24px;
			}
		}
	}

	.add-label {
		height: 40px;
		padding: 0 10px;
		border: none;
		background-color: #B3FF56;
		border-radius: 5px;

		&-wrapper {
			text-align: center;
			padding: 10px 0;
			margin-top: 24px;
		}
	}
</style>
