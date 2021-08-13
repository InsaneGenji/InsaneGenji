<template>
	<view id="container">
		<form @submit="submit">
			<label>
				<switch name="yes" checked @change="" />
				<text>选择</text>
			</label>
			<button form-type="submit">登录</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			submit(e) {
				console.log(e.detail.value);
				uni.switchTab({
					url: '../index/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	#container {}
</style>
