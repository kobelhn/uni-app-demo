/**
 *  封装api方法，简化调用时书写
 * **/
 
 // TODO: 根据环境变量进行baseUrl的配置
 const baseUrl = 'https://tlptest.juhaopin.net/api'
 
 function _apiService(method, url, data, fail = false) {
	 /**
	  *  @param {fail}  fail为true则表示要自定义错误处理函数 默认为false
	  * 
	  * **/
	 let header = {}
	 if (method === 'POST') {
		 header['content-type'] = 'application/x-www-form-urlencoded'
	 }
	 if (uni.getStorageSync('JSESSIONID')) {
		 header['jsessionid'] = uni.getStorageSync('JSESSIONID')
		 header['rememberme'] = uni.getStorageSync('REMEMBERME')
	 }
	 return new Promise((resolve, reject) => {
		 uni.request({
		 	url: baseUrl + url,
		 	method,
		 	data,
		 	header,
		 	timeout: 60000, // 60s的超时时间
		 	dataType: 'json',
		 	withCredential: true,
		 	success: function (response) {
				const data = response.data
				const header = response.header
				if (header && header['jsessionid']) {
					uni.setStorageSync('JSESSIONID', header.jsessionid)
					uni.setStorageSync('REMEMBERME', header.rememberMe)
				}
				if ('code' in data) {
					if (data.code === 0) {
						resolve(data);
					} else {
						if (data.code === 401) {
							uni.navigateTo({
								url: '../login/login'
							})
						}
						if (!fail) {
							const msg = data.message || '接口请求失败，请稍后重试';
							uni.showModal({
							    title: '提示',
							    content: msg,
								showCancel: false
							});
						}
						reject(data)
					}
				} else {
					resolve(data)
				}
		 	},
		 	fail: function (error) {
				reject(error.data)
				if (!fail) {
					const msg = (error.data && error.data.message) || '接口请求失败，请稍后重试'
					uni.showModal({
					    title: '提示',
					    content: msg,
						showCancel: false
					});
				}
		 	},
		 	complete: function () {
				console.log('api service complete')
		 	}
		 })
	 })
 }
 export default {
	 post: (url, data, fail) => {
		 return _apiService('POST', url, data, fail)
	 },
	 get: (url, data, fail) => {
		 return _apiService('GET', url, data, fail)
	 }
 }
 