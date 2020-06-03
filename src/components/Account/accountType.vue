<template>
	<div class="account-type">
		<div :class=" types === 'outcome' && `tab-selected`" @click="onToggleType('outcome')">支出
		</div>
		<div :class=" types === 'income' && `tab-selected`" @click="onToggleType('income')">
			收入
		</div>
	</div>
</template>

<script lang="ts">
	import {Vue, Component, Prop} from 'vue-property-decorator';

	@Component
	export default class accountType extends Vue {
		types: string = 'outcome';

		@Prop({type: String, default: 'outcome'})
		type!: string;

		onToggleType(type: string) {
			this.types = type;
		}

		mounted() {
			this.types = this.type
		}
	}
</script>

<style lang="scss" scoped>
	.account-type {
		font-size: 24px;
		background-color: #C1FD78;
		display: flex;
		text-align: center;

		> div {
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
