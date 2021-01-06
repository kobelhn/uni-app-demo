<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	page {
		font-family: PingFangSC-Medium, PingFang SC;
		background: $uni-bg-color-grey;
	}
	
	// 自定义导航栏的标题样式
	.nav-title {
		font-size: 32rpx;
		color: #FFF;
		margin-left: 30rpx;
	}
	// 金额
	.int {
		font-size: 36rpx !important;
	}
	.dec {
		font-size: 28rpx !important;
	}
</style>
