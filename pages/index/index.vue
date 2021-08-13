<template>
	<view id="container">
		<view class="navList">
			<view class="item" v-for="(item,index) in navList" :key="index">
				<button @click="goTo(item.url)">{{item.name}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
					name: '例子-组件',
					url: '../example-component/example-component'
				}]
			}
		},
		methods: {
			goTo(url) {
				uni.navigateTo({
					url
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	#container {
		.navList {
			.item {
				margin-bottom: 20rpx;
			}
		}
	}
</style>
