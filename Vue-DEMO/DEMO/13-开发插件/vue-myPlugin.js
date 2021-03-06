(function (window){
	const MyPlugin ={};
	MyPlugin.install = function (Vue, options) {
	  // 1. 添加全局方法或属性
	  Vue.myGlobalMethod = function () {
	    // 逻辑...
      console.log('Vue函数对象的myGlobalMethod()')
	  }

	  // 2. 添加全局资源
	  Vue.directive('my-directive', {
	    bind (el, binding, vnode, oldVnode) {
	      // 逻辑...
	    	el.textContent = 'my-directive----'+binding.value
	    }
	  })

	  // 3. 注入组件
	  Vue.mixin({
	    created: function () {
	      // 逻辑...
	    }
	  })

	  // 4. 添加实例方法
	  Vue.prototype.$myMethod = function (methodOptions) {
	    // 逻辑...
      console.log('vm $myMethod()')
	  }
	}
	window.MyPlugin = MyPlugin
})(window)