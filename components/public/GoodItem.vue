<template>
	<view class="good-item">
		<image class="good-image" :src="image" mode=""></image>
		<view class="good-info">
			<text class="good-title">{{title}}</text>
			<view class="good-price">
				<text class="int">¥ {{int}}</text>.<text class="dec">{{dec}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	/*
		组件：规范化商品单元组件
	*/
	export default {
		props: {
			good: {
				required: true,
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				title: this.good.title,
				image: this.good.image,
				id: this.good.id,
				price: this.good.price
			};
		},
		computed: {
			int() {
				const priceStr = parseFloat(this.good.price).toFixed(2);
				return priceStr.split('.')[0]
			},
			dec() {
				const priceStr = parseFloat(this.good.price).toFixed(2);
				return priceStr.split('.')[1]
			}
		}
	}
</script>

<style lang="scss" scoped>
.good-item {
	.good-image {
		width: 334rpx;
		height: 334rpx;
		border-top-left-radius: 12rpx;
		border-top-right-radius: 12rpx;
	}
	.good-info {
		padding: 20rpx;
		width: 334rpx;
		background: #FFF;
		border-bottom-left-radius: 12rpx;
		border-bottom-right-radius: 12rpx;
		.good-title {
			height: 80rpx;
			font-size: 28rpx;
			line-height: 40rpx;
			font-weight: bold;
			// 设置文本两行显示
			overflow: hidden;
			-webkit-line-clamp: 2;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
		}
		.good-price {
			margin-top: 20rpx;
			color: $uni-color-primary;
			font-weight: bold;
			font-family: DINPro-Bold, DINPro;
			.int {
				font-size: 36rpx;
			}
			.dec {
				font-size: 28rpx;
			}
		}
	}
}
</style>
