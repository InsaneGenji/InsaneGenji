<script>
	import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update';

	export default {
		globalData: {},
		onLaunch() {
			// #ifdef APP-PLUS
			checkUpdate();
			// #endif
		}
	}
</script>

<style lang="scss">
	// 引入iconfont
	@import './static/iconfont/iconfont.css';

	// 重构button样式
	button {

		&::before,
		&::after {
			border: 0 !important;
		}
	}

	html,
	body,
	page {
		height: 100%;
	}

	#container {
		box-sizing: border-box;
		height: 100%;
		background-color: #eee;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	// 状态栏
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
