<template>
	<u-swipe-action class="cart-item" bg-color="#FFF" :options="options">
		<view class="cart-item-checkbox">
			<u-checkbox size="40" shape="circle" v-model="checked"></u-checkbox>
		</view>
		<view class="cart-item-info">
			<view class="cart-item-title">{{title}}</view>
			<view class="cart-item-spec">{{selectedSpec}}</view>
			<view class="cart-item-buy">
				<view class="cart-item-price">¥ {{int}}.{{dec}}</view>
				<u-number-box v-model="number" />
			</view>
		</view>
	</u-swipe-action>
</template>

<script>
	export default {
		props: {
			cartItem: {
				type: Object,
				default: {},
				required: true
			}
		},
		computed: {
			int() {
				const priceStr = parseFloat(this.cartItem.price).toFixed(2);
				return priceStr.split('.')[0]
			},
			dec() {
				const priceStr = parseFloat(this.cartItem.price).toFixed(2);
				return priceStr.split('.')[1]
			}
		},
		data() {
			return {
				title: this.cartItem.title,
				number: this.cartItem.number,
				price: this.cartItem.price,
				selectedSpec: this.cartItem.selectedSpec,
				checked: this.cartItem.checked,
				options: [
					{
						text: '删除',
						style: {
							backgroundColor: '#FB6B6F'
						}
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
