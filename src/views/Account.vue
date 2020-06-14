<template>
	<Layout class-prefix="main">
		<Computer @update:value="onChangeAmount" @submit="onSubmitRecord"/>
		<tabs :value.sync="type" :data-source="headerTab" @update:value="onChangeType"/>
		<remarks @update:remark="onChangeRemark"/>
		<top-wrapper @update:select="onChangeLabels"/>
	</Layout>
</template>

<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';

	// 组件
	import Computer from '@/components/Account/Computer.vue';
	import Tabs from '@/components/Tabs.vue';
	import Remarks from '@/components/Account/remarks.vue';
	import TopWrapper from '@/components/Account/topWrapper.vue';

	// 接口
	import {Record} from '@/interfaces/Record';

	@Component({
		components: {
			Tabs,
			TopWrapper,
			Remarks,
			Computer
		}
	})
	export default class Account extends Vue {
		record: Record = {
			type: 'outcome',
			remark: '',
			labels: [],
			amount: 0,
		};
		type: string = 'outcome'
		headerTab: Array<Object> = [
			{name: '支出', value: 'outcome'},
			{name: '收入', value: 'income'}
		]

		get recordList() {
			return this.$store.state.recordList;
		}

		created() {
			this.$store.commit('fetchRecordList')
		}

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

		onSubmitRecord() {
			this.$store.commit('createRecord', this.record);
		}
	}
</script>

<style lang="scss">
	.main-content {
		display: flex;
		flex-direction: column-reverse;
	}
</style>
