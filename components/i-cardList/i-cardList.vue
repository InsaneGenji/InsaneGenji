<template>
	<scroll-view class="i-cardList" scroll-y @scrolltolower="getMoreData">
		<view class="item" v-for="(item,index) in dataList" :key="index" @click="toastTitle(item.title)">
			<view class="title">{{item.title}}</view>
			<view class="time">{{item.time}}</view>
			<view class="content">{{item.content}}</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		name: 'i-cardList',
		props: {
			dataList: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		methods: {
			getMoreData() {
				this.$common.toast('滑到底啦！');
			},
			toastTitle(title) {
				this.$emit('toastTitle', title);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.i-cardList {
		width: 100%;
		overflow-y: auto;

		.item {
			background-color: #fff;
			padding: 20rpx;
			border-radius: 14rpx;
			margin-top: 30rpx;

			&:last-of-type {
				margin-bottom: 30rpx;
			}
		}
	}
</style>
