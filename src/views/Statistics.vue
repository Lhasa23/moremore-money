<template>
	<Layout>
		<tabs class-prefix="types" :data-source="headerTab" :value.sync="type"/>
		<div>
			<ol>
				<li v-for="(group, index) in groupedList" :key="index">
					<h3 class="title">{{beautifyTime(group.title)}}<span>￥{{group.total}}</span></h3>
					<ol>
						<li
							v-for="(item, index) in group.items"
							:key="index"
							class="record"
						>
							<span>{{item.labels.join(',') || '无'}}</span>
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
	import dayjs from 'dayjs';

	const d = dayjs();

	@Component({
		components: {
			Tabs
		}
	})
	export default class Statistics extends Vue {
		type: string = 'outcome';

		headerTab: Array<Object> = [
			{name: '支出', value: 'outcome'},
			{name: '收入', value: 'income'}
		];

		get recordList() {
			return (this.$store.state as RootState).recordList;
		}

		get groupedList() {
			const {recordList} = this;
			if (recordList.length === 0) {
				return [];
			}
			const newList = JSON.parse(JSON.stringify(recordList))
				.filter((r: any) => r.type === this.type)
				.sort((a: any, b: any) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
			type Result = { title: string, total?: number, items: Record[] }[]
			const result: Result = [{title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), items: [newList[0]]}];
			for (let i = 1; i < newList.length; i++) {
				const current = newList[i];
				const last = result[result.length - 1];
				if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
					last.items.push(current);
				} else {
					result.push({title: dayjs(current.createAt).format('YYYY-MM-DD'), items: [current]});
				}
			}
			result.map(group => {
				group.total = group.items.reduce((sum, item) => {
					return sum + item.amount;
				}, 0);
			});
			return result;
		}

		beforeCreate() {
			this.$store.commit('fetchRecordList');
		}

		beautifyTime(date: string) {
			const day = dayjs(date);
			const now = dayjs();
			if (day.isSame(now, 'day')) {
				return '今天';
			} else if (day.isSame(now.subtract(1, 'day'), 'day')) {
				return '昨天';
			} else if (day.isSame(now.subtract(2, 'day'), 'day')) {
				return '前天';
			} else if (day.isSame(now, 'year')) {
				return day.format('M月D日');
			} else {
				return day.format('YYYY年M月D日');
			}
		}
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
