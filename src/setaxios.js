import axios from 'axios'
import store from './store'
import router from './router'

//http全域拦截
//token要放在请求的header上面带回去

export default function setAxios() {
	axios.interceptors.request.use(
		config => {
			if (store.state.token) {
				config.header.token = store.state.token;
			}
			return config;
		}
	)
	//每次的请求有返回的都要经过拦截器
	axios.interceptors.response.use(
		response => {
			if (response.status == 200) {
				const data = response.data
				if (data.code == 0) {
					//登录过期，需要清空vuex的和localstorage的token
					store.commit('setToken', '')
					localStorage.removeItem('token', 'true')
					localStorage.setItem('out')
					//sessionStorage.removeItem('token')
					//跳转Login页面
					roter.replace({
						path: '/login'
					})

				}
				return data
			}
			return response
		}
	)
}
