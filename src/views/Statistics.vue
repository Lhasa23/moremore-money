<template>
	<Layout>
		<tabs class-prefix="types" :data-source="headerTab" :value.sync="type"/>
		<tabs class-prefix="interval" :data-source="interTab" :value.sync="interval"/>
		<div>
			<ol>
				<li v-for="(group, index) in result" :key="index">
					<h3 class="title">{{group.title}}</h3>
					<ol>
						<li
							v-for="(item, index) in group.items"
							:key="index"
							class="record"
						>
							<span>{{item.labels.join(',')}}</span>
							<span class="remarks">{{item.remark}}</span>
							<span>￥{{item.amount}}</span>
						</li>
					</ol>
				</li>
			</ol>
		</div>
	</Layout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import {Component} from 'vue-property-decorator';
	import Tabs from '@/components/Tabs.vue';
	import {Record, RootState} from '@/interfaces/record';

	@Component({
		components: {
			Tabs
		}
	})
	export default class Statistics extends Vue {
		type: string = 'outcome';
		interval: string = 'day';

		get recordList() {
			return (this.$store.state as RootState).recordList;
		}

		get result() {
			const {recordList} = this;
			const hashTable: { [key: string]: { title: string, items: Record[] } } = {};
			for (let i = 0; i < recordList.length; i++) {
				const [date, time] = recordList[i].createAt!.split('T');
				hashTable[date] = hashTable[date] || {title: date, items: []};
				hashTable[date].items.push(recordList[i]);
			}
			console.log(hashTable);
			return hashTable;
		}

		beforeCreate() {
			this.$store.commit('fetchRecordList');
		}

		headerTab: Array<Object> = [
			{name: '支出', value: 'outcome'},
			{name: '收入', value: 'income'}
		];
		interTab: Array<Object> = [
			{name: '按天', value: 'day'},
			{name: '按周', value: 'week'},
			{name: '按月', value: 'month'}
		];
	}
</script>

<style lang="scss" scoped>
	%item {
		padding: 8px 16px;
		line-height: 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	::v-deep {
		.tabs {
			.types-tab {
				background-color: white;

				&.tab-selected {
					background-color: #C1FD78;

					&::after {
						display: none;
					}
				}
			}

			.interval-tab {
				font-size: 22px;
				height: 46px;
			}
		}
	}
	.title {
		padding: 0 16px;
		@extend %item
	}
	.record {
		background-color: white;
		@extend %item
	}
	.remarks {
		margin-right: auto;
		margin-left: 8px;
		color: #999999;
	}
</style>
