<template>
	<view class="cart-container">
		<nav-bar bg="gradient">
			<text class="nav-title">购物车</text>
		</nav-bar>
		<u-swipe-action @click="deleteItem" :index="index" v-for="(item, index) in goodsList" :key="item.id"  bg-color="#FFF" :options="options">
			<view :class="item.status === 0 ? 'cart-item disabled' : 'cart-item'">
				<u-checkbox v-if="item.status !== 0" class="cart-item-checkbox" size="40" shape="circle" v-model="item.checked"></u-checkbox>
				<view style="width: 40rpx;" v-if="item.status === 0"></view>
				<image class="cart-item-image" :src="item.image"></image>
				<view class="cart-item-info">
					<view class="cart-item-title">{{item.title}}</view>
					<view>
						<view class="cart-item-spec" v-if="item.status !== 0">
							<text>{{item.skudes}}</text>
							<u-icon style="margin-left: 10rpx;" name="arrow-down" size="24"></u-icon>
						</view>
						<view v-else class="cart-item-spec disabled">失效</view>
					</view>
					<view class="cart-item-buy" v-if="item.status !== 0">
						<view class="cart-item-price"><text class="int">¥ {{item.int}}</text>.<text class="dec">{{item.dec}}</text></view>
						<u-number-box :min="1" color="#999" bg-color="#F8F5F5" size="28" input-height="48" v-model="item.number" />
					</view>
				</view>
			</view>
		</u-swipe-action>
		<view class="cart-summary" v-if="goodsList.length > 0">
			<u-checkbox class="cart-summary-select" @change="selectAllOrNot" size="40" shape="circle" :value="selectAll">全选</u-checkbox>
			<view class="cart-summary-info">
				<view class="cart-summary-price">
					<view class="cart-summary-price-top">
						<view><text>合计：</text><text class="int">¥ {{summaryMoneyArr[0]}}.<text class="dec">{{summaryMoneyArr[1]}}</text></text></view>
					</view>
					<view class="cart-summary-price-down">
						<text>包含运费0元</text>
					</view>
				</view>
				<u-button type="primary">结算</u-button>
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
				// TODO：模拟数据，需改成从接口获取真实数据
				options: [
					{
						text: '删除',
						style: {
							backgroundColor: '#FB6B6F'
						}
					}
				],
				goodsList: [
					{
						id: 1,
						title: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
						image: 'http://cdnj73446617.shileme.cc/t/20200807/db6e1b57-4266-ef32-9237-891c9fb24d59.jpg',
						price: 4.5,
						specs: [
							{
								spec: '100ml',
								id: 1
							},
							{
								spec: '200ml',
								id: 2
							},
							{
								spec: '300ml',
								id: 3
							}
						],
						selectedSpec: 3,
						number: 3,
						checked: false,
						status: 1
					},
					{
						id: 2,
						title: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
						image: 'http://cdnj73446617.shileme.cc/t/20200807/db6e1b57-4266-ef32-9237-891c9fb24d59.jpg',
						price: 5.2,
						specs: [
							{
								spec: '1000ml',
								id: 1
							},
							{
								spec: '2000ml',
								id: 2
							},
							{
								spec: '3000ml',
								id: 3
							}
						],
						selectedSpec: 2,
						number: 1,
						checked: false,
						status: 1
					},
					{
						id: 3,
						title: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
						image: 'http://cdnj73446617.shileme.cc/t/20200807/db6e1b57-4266-ef32-9237-891c9fb24d59.jpg',
						price: 3.7,
						specs: [
							{
								spec: '1000ml',
								id: 1
							},
							{
								spec: '2000ml',
								id: 2
							},
							{
								spec: '3000ml',
								id: 3
							}
						],
						selectedSpec: 2,
						number: 1,
						checked: false,
						status: 0
					}
				]
			}
		},
		computed: {
			selectAll() {
				let count = 0;
				let length = this.goodsList.length;
				this.goodsList.map(it => {
					if (it.status !== 0 && it.checked) {
						count++;
					}
					if (it.status === 0) {
						length--;
					}
				});
				return count === length;
			},
			summaryMoneyArr() {
				let summary = 0;
				this.goodsList.map(item => {
					if (item.checked && item.status !== 0 && item.number > 0) {
						summary += item.price * item.number;
					} 
				});
				return parseFloat(summary).toFixed(2).split('.');
			}
		},
		methods: {
			handleData() {
				this.goodsList.map(it => {
					const str = parseFloat(it.price).toFixed(2);
					it.int = str.split('.')[0];
					it.dec = str.split('.')[1];
					const specs = it.specs;
					for (let i = 0; i < specs.length; i++) {
						if (specs[i].id === it.selectedSpec) {
							it.skudes = specs[i].spec;
						}
					}
				});
			},
			deleteItem(index, index1) {
				// index 循环的 index1 按钮的
				if (index1 === 0) {
					this.goodsList.splice(index, 1);
				}
			},
			selectAllOrNot() {
				const bool = !this.selectAll;
				this.goodsList.map(item => {
					item.checked = bool;
				});
			}
		},
		beforeMount() {
			this.handleData();
		}
	}
</script>

<style lang="scss" scoped>
	.cart-item {
		display: flex;
		align-items: center;
		height: 236rpx;
		background: #FFF;
		padding: 30rpx;
		&-checkbox {
			width: 40rpx;
		}
		&-image {
			width: 160rpx;
			height: 160rpx;
			margin-left: 20rpx;
		}
		&-info {
			width: 438rpx;
			margin-left: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 160rpx;
		}
		&-title {
			font-size: 28rpx;
			line-height: 28rpx;
			height: 28rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		&-spec {
			background: $uni-bg-color-grey;
			display: inline-block;
			padding: 8rpx 10rpx;
			color: $uni-text-color-grey;
			font-size: 24rpx;
			border-radius: 4rpx;
			&.disabled {
				background: $uni-text-color-grey;
				color: #FFF;
				margin-top: 30rpx;
			}
		}
		&-buy {
			display: flex;
			justify-content: space-between;
		}
		&-price {
			color: $uni-color-primary;
		}
		&.disabled {
			.cart-item-title {
				color: $uni-text-color-disable;
			}
			.cart-item-info {
				justify-content: flex-start;
			}
		}
	}
	.cart-summary {
		width: 100%;
		background: #FFF;
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-info {
			display: flex;
		}
		&-price {
			font-size: 24rpx;
			text-align: center;
			margin-right: 20rpx;
			&-top {
				.int,.dec {
					color: $uni-color-primary;
				}
			}
			&-down {
				color: $uni-color-primary;
			}
		}
	}
</style>
