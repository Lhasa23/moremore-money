<template>
	<Layout>
		<div class="top-wrapper">
			<ul class="labels">
				<li>衣</li>
				<li>食</li>
				<li>住</li>
				<li>行</li>
			</ul>
			<router-link to="/labels" class="add-label">添加标签</router-link>
		</div>
		<div class="remark">
			<label>
				备注
				<input type="text">
			</label>
		</div>
		<div class="account-type">
			<ul>
				<li class="tab-selected">收入</li>
				<li>支出</li>
			</ul>
		</div>
		<div class="computer">
			<div class="result">100</div>
			<div>
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>+</button>
				<button>删除</button>
				<button>4</button>
				<button>5</button>
				<button>6</button>
				<button>-</button>
				<button>清空</button>
				<button>7</button>
				<button>8</button>
				<button>9</button>
				<button>*</button>
				<button>.</button>
				<button>0</button>
				<button>/</button>
				<button>ENTER</button>
			</div>
		</div>
	</Layout>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
	.top-wrapper {
		> .labels {
			display: flex;
		}
	}
</style>
