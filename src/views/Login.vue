<template>
	<div>
		<img class="headerImg" src="../assets/logo.png"/>
		<br />
		<cube-form :model="model" :schema="schema" @submit="submitHandler">
		</cube-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				model: {
					username: '',
					password: ''
				},
				schema: {
					fields: [
						//用户名配置
						{
							type: 'input',
							modelkey: 'username',
							label: '用户名:',
							props: {
								placeholder: '请输入用户名',

							},
							rules: {
								//校验规则
								require: true,
								type: 'string',
								min: 3,
								max: 15,
							},
							trigger: 'blur',
							messages: {
								require: '用户名不能为空！',
								min: '最短3字符',
								max: '最长15字符',
							}
						},
						//密码配置
						{
							type: 'input',
							modelkey: 'password',
							label: '密码:',
							props: {
								placeholder: '请输入密码',
								type: 'password',
								eye: {
									open: false,
								}
							},
							rules: {
								require: true,
							}
						},
						//注册
						{
							type: 'submit',
							label: '登录',
						}

					]
				}
			}
		},
		methods: {
			submitHandler(e) {

			}
		}


	}
</script>

<style lang="stylus">
	.headerImg
		height 150px
		widht 100%
</style>
