<template>
	<Layout>
		<tabs class="header" class-prefix="types" :data-source="headerTab" :value.sync="type"/>
		<tabs class="interval" :data-source="interTab" :value.sync="interval"/>
	</Layout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import {Component} from 'vue-property-decorator';
	import Tabs from '@/components/Tabs.vue';

	@Component({
		components: {
			Tabs
		}
	})
	export default class Statistics extends Vue {
		type: string = 'outcome'
		interval: string = 'day'
		headerTab: Array<Object> = [
			{name: '支出', value: 'outcome'},
			{name: '收入', value: 'income'}
		]
		interTab: Array<Object> = [
			{name: '按天', value: 'day'},
			{name: '按周', value: 'week'},
			{name: '按月', value: 'month'}
		]
	}
</script>

<style lang="scss" scoped>
	::v-deep .header {
		.types-tab {
			background-color: white;

			&.tab-selected {
				background-color: #C1FD78;

				&::after {
					display: none;
				}
			}
		}
	}
</style>
