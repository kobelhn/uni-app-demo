<template>
	<view class="cart-container">
		<u-navbar :isBack="false" isFixed :borderBottom="false">
			<text class="nav-title">购物车</text>
		</u-navbar>
		<cart-item v-for="item in goodsList" :key="item.id" :cart-item="item" />
	</view>
</template>

<script>
	import CartItem from '@/components/private/CartItem.vue'
	export default {
		components: {
			CartItem
		},
		data() {
			return {
				// TODO：模拟数据，需改成从接口获取真实数据
				goodsList: [
					{
						id: 1,
						title: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
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
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
</style>
