<template>
	<view id="container">
		<!-- 状态栏 -->
		<view class="status_bar"></view>
		<!-- logo -->
		<image class="logo" src="/static/images/login/icon-login.png" mode="widthFix"></image>
		<!-- form -->
		<form @submit="login">
			<label class="username">
				<text>账号</text>
				<input name="username" placeholder="请输入账号" />
			</label>
			<label class="password">
				<text>密码</text>
				<input name="password" :password="passwordFlag" placeholder="请输入密码" />
				<i class="iconfont icon-watch" :style="{color:passwordFlag?'#ccc':'#39c5bb'}"
					@click="passwordFlag=!passwordFlag"></i>
			</label>
			<label class="login">
				<button form-type="submit">登录</button>
			</label>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				passwordFlag: true
			};
		},
		methods: {
			// 登录
			login(e) {
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
		.logo {
			width: 200rpx;
			margin-top: 188rpx;
		}

		form {
			width: 88%;
			margin-top: 78rpx;

			label {
				margin-top: $uni-spacing-col-lg;
				position: relative;
				display: flex;
				align-items: center;

				input,
				button {
					flex: 1;
				}

				input {
					padding: $uni-spacing-col-sm $uni-spacing-row-sm;
					border-bottom: 1px solid #ccc;
					margin-left: $uni-spacing-row-base;
				}

				&.password {
					input {
						padding-right: 32px;
					}

					i {
						position: absolute;
						right: 0;
					}
				}

				&.login {
					button {
						color: #fff;
						background-color: $color-miku;
					}
				}
			}
		}
	}
</style>
