<template>
	<ul class="tabs">
		<li
			v-for="item in dataSource"
			:key="item.value"
			:class="{
				'tab-selected': value === item.value,
				[classPrefix + '-tab']: classPrefix
			}"
			@click="onToggleType(item)"
		>
			{{item.name}}
		</li>
	</ul>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from 'vue-property-decorator';

	type dataSrc = {
		name: string,
		value: string
	}

	@Component
	export default class Tabs extends Vue{
		@Prop(String) classPrefix!: string
		@Prop({type: Array, required: true}) dataSource!: dataSrc[]
		@Prop(String) readonly value!: string

		onToggleType(item: dataSrc) {
			this.$emit('update:value', item.value)
		}
	}
</script>

<style lang="scss" scoped>
	.tabs {
		font-size: 24px;
		background-color: #C1FD78;
		display: flex;
		text-align: center;

		li {
			width: 50%;
			height: 56px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			position: relative;

			&.tab-selected::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 4px;
				background-color: #616161;
			}
		}
	}
</style>
