
require.config({
	
	map: {
		'*': {
			'css': 'lib/css'
		}
	}
})

require(['route/route'], function (route) {
	
	route();
	console.log(Vue)
})