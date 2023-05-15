<template>
	<div id="container">
		<!-- LOGO -->
		<a class="logo" href="#" target="_blank">
			<img src="@/assets/images/logo.png" alt="初音未来" />
		</a>

		<!-- 搜索栏 -->
		<form title="在网络上搜索" action="https://www.baidu.com/s">
			<input type="search" placeholder="在网络上搜索" name="wd" />
			<input type="submit" value="" title="搜索" />
		</form>

		<!-- 页脚 -->
		<div class="bottom">
			<span>insanegenji.com 版权所有ICP证：</span>
			<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备20023934号</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		}
	};
</script>

<style lang="scss" scoped>
	#container {
		background: url(../../assets/images/bg.jpg) no-repeat center center;
		background-size: cover;
		background-attachment: fixed;

		// LOGO
		.logo {
			cursor: pointer;
			margin: 89px 0 39px;

			img {
				width: 309px;
				transition: .39s;

				&:hover {
					transform: scale(1.05, 1.05);
				}
			}
		}

		// 搜索栏
		form {
			width: 777px;
			height: 50px;
			background-color: transparent;
			border: 1px solid grey;
			border-radius: 9px;
			position: relative;
			z-index: 1;
			display: flex;
			align-items: center;

			&::after {
				content: "";
				background: url(../../assets/images/bg.jpg) no-repeat center center;
				background-size: cover;
				background-attachment: fixed;
				border-radius: 9px;
				transition: all .23s;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				z-index: -1;
			}

			&:focus-within {
				&::after {
					filter: blur(2px);
				}
			}

			input {
				height: 100%;
				border: none;
				outline: none;

				&[type="search"] {
					flex: 1;
					font-size: 18px;
					color: rgba(#666, .69);
					background: url(../../assets/images/icon-search.png) no-repeat 9px center;
					background-size: 39px 39px;
					padding: 0 13px 0 57px;
					border-radius: 9px;
					transition: all .23s;
					position: relative;

					&:focus {
						color: rgba(0, 156, 155, .69);
						box-shadow: 0 0 39px rgba(0, 156, 155, .69);
					}
				}

				&[type="submit"] {
					width: 50px;
					background: url(../../assets/images/arrow-right.png) no-repeat center center;
					background-size: 19px 19px;
					border-radius: 0 9px 9px 0;
					cursor: pointer;
					position: absolute;
					top: 0;
					right: 0;

					&:hover {
						background-color: rgba(150, 150, 150, .39);
					}

					&:active {
						background-color: rgba(200, 200, 200, .39);
					}
				}
			}
		}

		// 页脚
		.bottom {
			width: 100%;
			height: 39px;
			font-size: 14px;
			text-align: center;
			line-height: 39px;
			background-color: #000;
			margin-top: auto;

			span {
				color: #777;
			}

			a {
				color: #ff6a00;
				text-decoration: none;
			}
		}
	}
</style>
