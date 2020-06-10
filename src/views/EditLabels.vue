<template>
	<Layout>
		<div class="nav-bar">
			<icons class="icon" link="left" @click.native="goBack"/>
			<span class="title">编辑标签</span>
			<span class="right"></span>
		</div>
		<div class="label">
			<span>标签名</span>
			<input type="text" placeholder="请在这里修改标签" v-model="label">
		</div>
		<div class="add-label-wrapper">
			<button class="add-label primary" @click="saveLabel">保存标签</button>
			<button class="add-label danger" @click="deleteLabel">删除标签</button>
		</div>
	</Layout>
</template>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import {labelModel} from '@/utils/model';

	@Component
	export default class EditLabels extends Vue {
		label: string = '';
		index: number = -1;

		created() {
			const name = this.$route.params.name;
			labelModel.fetch();
			const labels = labelModel.data;
			this.index = labels.findIndex(item => item === name);
			if (this.index > -1) {
				this.label = labels[this.index];
			} else {
				this.$router.push('/404');
			}
		}

		goBack() {
			this.$router.go(-1);
		}

		saveLabel() {
			labelModel.edit(this.label, this.index)
			this.goBack()
		}

		deleteLabel() {
			labelModel.delete(this.index)
			this.goBack()
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/assets/styles/helper.scss";

	.nav-bar {
		@extend %outerShadow;

		font-size: 16px;
		padding: 12px 0;
		background-color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.icon {
			height: 22px;
		}

		.title {
			transform: translate(-20%);
		}
	}

	.label {
		font-size: 14px;
		background-color: darken(#E9FFCC, 6%);
		color: #333333;
		display: flex;
		padding: 0 0 0 16px;
		align-items: center;
		margin-top: 2px;

		span {
			padding-right: 16px;
		}

		input {
			border: none;
			background-color: #E9FFCC;
			padding: 16px 10px;
			flex-grow: 1;
			margin-left: 5px;
		}
	}


	.add-label-wrapper {
		display: flex;
		justify-content: space-around;
		padding: 10px 0;
		margin-top: 24px;

		.add-label {
			height: 40px;
			padding: 0 10px;
			border: none;
			border-radius: 5px;
		}

		.primary {
			background-color: #B3FF56;
		}

		.danger {
			background-color: #ff4040;
		}
	}
</style>
