define(['lib/vue', 'modules/home/home', 'modules/list/list', 'modules/product/product', 'css!./app.css'], function (Vue, home, list, product) {
	
	var app = new Vue({
		el: '#app',
		data: {
			
			view: '',
			
			query: [],
			
			search: '',
			
			searchQuery: '',
			
			isShowSearch: true
		},
		
		methods: {
			
			showResult: function () {
				
				this.searchQuery = this.search;
				
				this.search = '';
			},
			
			goBack: function () {
				history.go(-1)
			}
		},
		
		events: {
			dealSearch: function (msg) {
				
				this.isShowSearch = msg;
				
			}
		}
	})

	
	return app;
})