<template>
	<Layout class-prefix="main">
		<Computer @update:value="onChangeAmount"/>
		<account-type type="outcome" @update:type="onChangeType"/>
		<remarks @updeta:remark="onChangeRemark"/>
		<top-wrapper :labels.sync="labels" @update:select="onChangeLabels"/>
	</Layout>
</template>

<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';

	// 组件
	import Computer from '@/components/Account/Computer.vue';
	import AccountType from '@/components/Account/accountType.vue';
	import Remarks from '@/components/Account/remarks.vue';
	import TopWrapper from '@/components/Account/topWrapper.vue';

	type Record = {
		type: string
		labels?: string[]
		amount: number
		remark: string
	}

	@Component({
		components: {
			TopWrapper,
			Remarks,
			AccountType,
			Computer
		}
	})
	export default class Account extends Vue {
		labels: string[] = JSON.parse(localStorage.getItem('MoneyLabels') || '[]');
		selectionLabel: string[] = [];
		record: Record = {
			type: '',
			remark: 'outcome',
			labels: [],
			amount: 0
		}

		onChangeLabels(select: Array<string>) {
			this.selectionLabel = select;
			console.log(select);
		}

		onChangeRemark(remark: string) {
			console.log(remark);
		}

		onChangeType(type: string) {
			console.log(type);
		}

		onChangeAmount(value: string) {
			console.log(parseFloat(value));
		}
	}
</script>

<style lang="scss">
	.main-content {
		display: flex;
		flex-direction: column-reverse;
	}
</style>
