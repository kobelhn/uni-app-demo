<template>
	<view class="index-content">
		<nav-bar bg="normal">
			<image class="logo" src="../../static/logo.png"></image>
		</nav-bar>
		<view class="module-title">上新好物</view>
		<view class="goods-list margin">
			<good-item class="good-item" :good="item" v-for="item in list" :key="item.id" />
		</view>
		<view class="module-text">精选优品</view>
		<view class="goods-list">
			<good-item class="good-item" :good="item" v-for="item in goodsList" :key="item.id" />
		</view>
	</view>
</template>

<script>
	import GoodItem from '@/components/public/GoodItem.vue';
	import NavBar from '@/components/public/NavBar.vue';
	
	export default {
		components: {
			GoodItem,
			NavBar
		},
		data() {
			return {
				// TODO：模拟数据，需改成从接口获取真实数据
				goodsList: [
					{
						title: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
						image: 'http://cdnj73446617.shileme.cc/t/20200807/db6e1b57-4266-ef32-9237-891c9fb24d59.jpg',
						price: 55,
						id: 1
					},
					{
						title: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
						image: 'http://cdnj73446617.shileme.cc/t/20200807/db6e1b57-4266-ef32-9237-891c9fb24d59.jpg',
						price: 49.22,
						id: 2
					},
					{
						title: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
						image: 'http://cdnj73446617.shileme.cc/t/20200807/db6e1b57-4266-ef32-9237-891c9fb24d59.jpg',
						price: 55,
						id: 3
					},
					{
						title: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
						image: 'http://cdnj73446617.shileme.cc/t/20200807/db6e1b57-4266-ef32-9237-891c9fb24d59.jpg',
						price: 55,
						id: 4
					}
				],
				list: [
					{
						title: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
						image: 'http://cdnj73446617.shileme.cc/t/20200807/db6e1b57-4266-ef32-9237-891c9fb24d59.jpg',
						price: 55,
						id: 5
					},
					{
						title: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
						image: 'http://cdnj73446617.shileme.cc/t/20200807/db6e1b57-4266-ef32-9237-891c9fb24d59.jpg',
						price: 52,
						id: 6
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.logo {
		height: 44rpx;
		width: 278rpx;
		margin-left: 30rpx;
	}
	.module-text {
		font-size: 30rpx;
		color: $uni-text-color;
		padding-left: 30rpx;
	}
	.module-title {
		font-size: 30rpx;
		color: #FFF;
		padding: 30rpx;
		width: 100%;
		height: 400rpx;
		background: linear-gradient(180deg, #FC6B6F 0%, #FB6B6F 52%, rgba(254, 164, 168, 0) 100%);
	}
	.goods-list {
		padding: 0 30rpx 30rpx 30rpx;
		&.margin {
			margin-top: -310rpx;
		}
		.good-item {
			display: inline-block;
			margin-top: 20rpx;
			&:nth-child(2n) {
				margin-left: 20rpx;
			}
		}
	}
</style>
