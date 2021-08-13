<template>
	<scroll-view class="i-cardList" scroll-y>
		<view class="item" v-for="(item,index) in dataList" :key="index" @click="toastTitle(item.title)">
			<view class="title">{{item.title}}</view>
			<view class="time">{{item.time}}</view>
			<view class="content">{{item.content}}</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		name: "i-cardList",
		props: {
			dataList: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		methods: {
			toastTitle(title) {
				this.$emit('toastTitle', title);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.i-cardList {
		.item {
			background-color: #fff;
			border-radius: 9rpx;
			margin-bottom: 20rpx;
		}
	}
</style>
