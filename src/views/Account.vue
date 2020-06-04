<template>
	<Layout class-prefix="main">
		<Computer/>
		<account-type/>
		<remarks/>
		<top-wrapper :labels.sync="labels"/>
	</Layout>
</template>

<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator'

	// 组件
	import Computer from '@/components/Account/Computer.vue'
	import AccountType from '@/components/Account/accountType.vue'
	import Remarks from '@/components/Account/remarks.vue'
	import TopWrapper from '@/components/Account/topWrapper.vue'

	// 接口
	import Label from '@/interfaces/label';

	@Component({
		components: {
			TopWrapper,
			Remarks,
			AccountType,
			Computer
		}
	})
	export default class Account extends Vue {
		labels: Array<Label> = [{
			name: '1',
			selected: false
		}, {
			name: '2',
			selected: false
		}, {
			name: '3',
			selected: false
		}, {
			name: '4',
			selected: false
		}];
	}
</script>

<style lang="scss">
	.main-content {
		display: flex;
		flex-direction: column-reverse;
	}
</style>
