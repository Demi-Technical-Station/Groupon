define(['lib/vue', 'util/util', 'filter/filter', 'css!./product.css'], function (Vue, Util, filter) {
	// 详情页组件
	var Product = Vue.extend({
		
		template: Util.tpl('tpl_product'),
		data: function () {
			
			return {
				data: {
					
				}
			}
		},
		created: function () {
			var me = this;
			
			me.$dispatch('dealSearch', false)
			
			var query = this.$parent.query;
			Util.ajax('data/product.json?id=' + query[0], function (res) {
				if (res && res.errno === 0) {
					
					me.data = res.data;
				}
			})
		}
	})
	
	Vue.component('product', Product);
})