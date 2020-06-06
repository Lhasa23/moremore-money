<template>
	<Layout class-prefix="main">
		<Computer @update:value="onChangeAmount" @submit="onSubmitRecord"/>
		<account-type type="outcome" @update:type="onChangeType"/>
		<remarks @update:remark="onChangeRemark"/>
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
		createAt?: Date
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
		recordList: Array<Record> = JSON.parse(localStorage.getItem('recordList') || '[]');
		record: Record = {
			type: 'outcome',
			remark: '',
			labels: [],
			amount: 0,
		};

		onChangeLabels(select: Array<string>) {
			this.record.labels = select;
		}

		onChangeRemark(remark: string) {
			this.record.remark = remark;
		}

		onChangeType(type: string) {
			this.record.type = type;
		}

		onChangeAmount(value: string) {
			this.record.amount = parseFloat(value);
		}

		onSubmitRecord () {
			this.record.createAt = new Date()
			const recordItem: Record = JSON.parse(JSON.stringify(this.record))
			this.recordList.push(recordItem)
			localStorage.setItem('recordList', JSON.stringify(this.recordList))
		}
	}
</script>

<style lang="scss">
	.main-content {
		display: flex;
		flex-direction: column-reverse;
	}
</style>
