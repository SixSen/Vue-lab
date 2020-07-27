module.exports = {
	configureWebpack: {
		devServer: {
			port: 2333, //端口号
			//open:true,//默认打开浏览器
			//Mock数据
			before(app) {
				// app.get('qingqiudizhi',(req,res)=>{})
				//注册接口
				//用户信息词
				let userpoor = [{
						username: 'xiaodi',
						password: '123456'
					},
					{
						username: 'tim',
						password: '123qwe'
					}
				]
				app.get('/api/register', (req, res) => {
					const {
						username,
						password
					} = req.query
					if (!username) {
						const msg = '用户名为空'
						res.json({
							success: false,

							message: msg,

						})
					}
					const userlength = userpoor.filter(v => v.username == username).length
					if (userlength > 0) {
						res.json({
							success: false,
							message: '用户名已存在'
						})
					} else {
						res.json({
							success: true,
							message: '注册成功',
						})
					}
				})
				//登录接口
				let tokenkey = 'xiaoclass'
				app.get('/api/login', (req, res) => {
					const {
						username,
						password
					} = req.query
					if (username == 'xiaod' && password == '123456') {
						res.json({
							code: 0,
							message: '登录成功',
							token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
						})
					} else {
						res.json({
							code: 1,
							message: '账号或密码错误',

						})
					}
				})

			}
		}
	},

	css: {
		loaderOptions: {
			stylus: {
				'resolve url': true,
				'import': [
					'./src/theme'
				]
			}
		}
	},

	pluginOptions: {
		'cube-ui': {
			postCompile: true,
			theme: true
		}
	}
}
