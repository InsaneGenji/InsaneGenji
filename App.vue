<script>
	export default {
		globalData: {},
		onLaunch() {}
	}
</script>

<style lang="scss">
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
		background-color: #ccc;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
