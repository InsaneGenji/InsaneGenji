<template>
	<view id="container">
		<i-cardList :dataList="dataList" @toastTitle="toastTitle"></i-cardList>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: []
			};
		},
		onLoad() {
			for (let i = 0; i < 10; i++) {
				this.dataList.push({
					title: `标题${i}`,
					time: `2021-08-0${i}`,
					content: `内容${i}`
				});
			}
		},
		methods: {
			toastTitle(title) {
				this.$common.toast(title);
			}
		}
	}
</script>

<style lang="scss" scoped>
	#container {
		.i-cardList {
			width: 90%;
			height: calc(100% - 100rpx);
		}
	}
</style>
