import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	//变量存储库
	state: {
		token: ''
	},
	//同步方法
	mutations: {
		//设置vuex的token
		setToken(state, token) {
			state.token = token
		}
	},
	//异步方法
	actions: {},
	getters: {

	},
	modules: {}
})
