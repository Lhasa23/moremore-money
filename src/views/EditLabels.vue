<template>
	<Layout>
		<span>
			<icons link="left"/>
			编辑标签
		</span>

	</Layout>
</template>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import {labelModel} from '@/utils/model';

	@Component
	export default class EditLabels extends Vue {
		created() {
			const name = this.$route.params.name;
			labelModel.fetch();
			const labels = labelModel.data;
			const exist = labels.findIndex(item => item === name);
			if (exist > -1) {
				console.log(labels[exist]);
			} else {
				this.$router.push('/404');
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
