<template>
	<view id="container">
		<!-- 状态栏 -->
		<view class="status_bar"></view>
		
		<form @submit="submit">
			<label>
				<text>账号</text>
				<input name="username" placeholder="请输入账号" />
			</label>
			<label>
				<text>账号</text>
				<input name="password" password placeholder="请输入密码" />
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
			// 登录
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
	#container {
		background-color: red;
	}
</style>
