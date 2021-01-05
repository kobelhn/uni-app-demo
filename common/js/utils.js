/**
 *  工具方法
 * **/
import jsSHA from '@/common/js/lib/sha.js'
import md5 from '@/common/js/lib/md5.js'

const _cdnUrl = '/';
// 时间格式
Date.prototype.Format = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds(), //毫秒
		'W': ['日', '一', '二', '三', '四', '五', '六'][this.getDay()]
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};
function _hmac256(data, salt) {
	let hashObj = new jsSHA("SHA-256", "TEXT");
	if (salt) {
		hashObj.setHMACKey(salt, "TEXT");
	}
	hashObj.update(data);
	return hashObj.getHMAC("B64");
}
export default {
	getPwd: (pwd, phone) => {
		const salt = new Date().Format('yyyyMMddhhmmss')
		const password = _hmac256(_hmac256(md5(pwd), phone), salt);
		return {
			salt,
			password
		}
	},
	handlePic: (pic) => {
		return `${_cdnUrl}${pic}`;
	}
}