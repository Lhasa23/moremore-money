<template>
	<Layout class-prefix="main">
		<Computer/>
		<account-type/>
		<remarks/>
		<top-wrapper/>
	</Layout>
</template>

<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator'

	import Computer from '@/components/Account/Computer.vue'
	import AccountType from '@/components/Account/accountType.vue'
	import Remarks from '@/components/Account/remarks.vue'
	import TopWrapper from '@/components/Account/topWrapper.vue'

	@Component({
		components: {
			TopWrapper,
			Remarks,
			AccountType,
			Computer
		}
	})
	export default class Account extends Vue {
	}
</script>

<style lang="scss">
	.main-content {
		display: flex;
		flex-direction: column-reverse;
	}
</style>
