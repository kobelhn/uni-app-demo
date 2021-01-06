<template>
	<view class="me-contianer">
		<nav-bar bg="gradient">
			<text class="nav-title">我的</text>
		</nav-bar>
		<view class="me-top">
			<image class="me-top-image" src="http://cdnj73446617.shileme.cc/t/20200807/db6e1b57-4266-ef32-9237-891c9fb24d59.jpg" mode=""></image>
			<view class="me-top-info">
				<view class="me-top-name">Hello</view>
				<view class="me-top-des">life is a journey</view>
			</view>
		</view>
		<view style="margin-top: 20rpx;">
			<view class="me-item">
				<view class="me-item-left">
					<image class="me-item-image" src="../../static/icons/list.png" mode=""></image>
					<text class="me-item-title">我的订单</text>
				</view>
				<view class="me-item-right"></view>
			</view>
			<view class="me-item">
				<view class="me-item-left">
					<image class="me-item-image" src="../../static/icons/location.png" mode=""></image>
					<text class="me-item-title">收货地址</text>
				</view>
				<view class="me-item-right"></view>
			</view>
			<view class="me-item">
				<view class="me-item-left">
					<image class="me-item-image" src="../../static/icons/income.png" mode=""></image>
					<text class="me-item-title">我的收益</text>
				</view>
				<view class="me-item-right"></view>
			</view>
		</view>
		<view style="margin-top: 20rpx;">
			<view class="me-item">
				<view class="me-item-left">
					<image class="me-item-image" src="../../static/icons/invite.png" mode=""></image>
					<text class="me-item-title">邀请码</text>
				</view>
				<view class="me-item-right">
					<text class="me-item-text">[123456] 点击复制</text>
				</view>
			</view>
			<view class="me-item">
				<view class="me-item-left">
					<image class="me-item-image" src="../../static/icons/share.png" mode=""></image>
					<text class="me-item-title">分享小程序</text>
				</view>
				<view class="me-item-right"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/public/NavBar.vue';
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				show: false
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.me-top {
		background: $gradient-color;
		padding: 50rpx 30rpx;
		display: flex;
		align-items: center;
		&-image {
			width: 108rpx;
			height: 108rpx;
			border-radius: 50%;
		}
		&-info {
			margin-left: 20rpx;
			color: #FFF;
		}
		&-name {
			font-size: 36rpx;
			font-weight: bold;
		}
		&-des {
			font-size: 24rpx;
			color: rgba(255, 255, 255, 0.7);
		}
	}
	.me-item {
		background: #FFF;
		padding: 32rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-left {
			display: flex;
			align-items: center;
		}
		&-image {
			width: 46rpx;
			height: 46rpx;
		}
		&-title {
			font-size: 30rpx;
			margin-left: 20rpx;
		}
		&-text {
			color: $uni-color-primary;
			font-size: 24rpx;
		}
	}
</style>
