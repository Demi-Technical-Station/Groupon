define(['lib/vue'], function (Vue) {
	
	// 价格过滤器
	Vue.filter('priceFilter', function (price) {
		return price + '元';
	})
	// 原价过滤器
	Vue.filter('originPriceFilter', function (price) {
		return '门市价:' + price + '元';
	})
	// 销量过滤器
	Vue.filter('salesFilter', function (sales) {
		return '已售' + sales;
	})
})