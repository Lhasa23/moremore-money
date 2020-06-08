<template>
	<Layout>
		<ol class="labels">
			<li v-for="(item, index) in labels" :key="index">
				<span>{{item}}</span>
				<icons class="icons" link="right"/>
			</li>
		</ol>
		<div class="add-label-wrapper">
			<button class="add-label">新增标签</button>
		</div>
	</Layout>
</template>

<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';
	import {model} from '@/utils/model';

	@Component
	export default class Labels extends Vue {
		labels: string[] = model.fetchLabelList();
	}
</script>

<style lang="scss" scoped>
	.labels {
		background-color: white;
		padding-left: 16px;

		li {
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
