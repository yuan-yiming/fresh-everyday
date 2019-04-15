<template>
  <div class="register">
  	<fixed-bar class="welcome">欢迎注册!</fixed-bar>
  	<div class="container">
  		<div class="register-form">
  			<p class="page-top">用户注册</p>
	  		<div class="page-content">
	  			<form>
					<label class="box account">
						<input type="text" name="" placeholder="邮箱/手机">
					</label>
					<label class="box user-name">
						<input type="text" name="" placeholder="用户名">
					</label>
					<label class="box password">
						<input type="password" name="" placeholder="6-20位数字、符号或数字">
					</label>
					<label class="box password-repeat">
						<input type="password" name="" placeholder="再次输入密码">
					</label>
					<label class="box submit">
						<input type="submit" name="" value="注册">
					</label>
					<label class="have-account">已有账户？
						<router-link :to="{name: 'Login'}" tag="label"
	  					class="login">直接登录</router-link>
					</label>
				</form>
	  		</div>
  		</div>
  		<div class="side-image">
  			<img src="../assets/login/login-register-side-image.png">
  		</div>
  	</div>
  	<app-footer/>
  </div>
</template>

<script>
import FixedBar from '@/components/FixedBar'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'Register',
  components: {
  	'fixed-bar': FixedBar,
  	'app-footer': AppFooter
  },
  data () {
    return {
    }
  }
};
</script>

<style scoped>
	.register {
		color: #666;
		height: 440px;
	}
	.register .container {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		position: relative;
		padding-top: 100px;
		/*background-color: red;*/
	}
	.register .container .side-image {
		height: 400px;
		width: 400px;
		position: absolute;
		top: 100px;
		right: 40px;
		/*border: 1px solid #eee;*/
	}
	.register .container .side-image img {
		height: 400px;
		width: 400px;
	}

	/* 登录表单页面 */
	.register .container .register-form {
		/*background-color: #eee;*/
		/*margin: 0px auto;*/
		margin-left: 100px;
		margin-top: 0px;
		width: 560px;
		height: 400px;
		box-shadow: 0 2px 10px #aaa;
		position: relative;
	}

	/* 注册页头部 */
	.register .page-top {
		height: 40px;
		line-height: 40px;
		width: 100%;
		text-align: center;
		box-sizing: border-box;
		border-bottom: 1px solid #ddd;
		font-size: 20px;
		font-weight: bold;
	}

	/* 注册页内容区域 */
	.register .page-content .box {
		position: absolute;
		width: 36px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		background-color: #ccc;
		background-position: 8px;
		background-size: 20px;
		background-repeat: no-repeat;
		left: 130px;
	}
	.register .page-content .box input {
		height: 36px;
		width: 260px;
		border: 1px solid #ccc;
		border-left: none;
		box-sizing: border-box;
		outline: none;
		padding: 5px 10px;
		position: absolute;
		left: 36px;
		top: 0;
		font-size: 14px;
	}
	.register .page-content .account {
		top: 60px;
		background-image: url('../assets/login/icons/phone.png');
	}
	.register .page-content .user-name {
		top: 120px;
		background-image: url('../assets/login/icons/account.png');
	}
	.register .page-content .password {
		top: 180px;
		background-image: url('../assets/login/icons/password.png');
	}
	.register .page-content .password-repeat {
		top: 240px;
		background-image: url('../assets/login/icons/password.png');
	}
	.register .page-content .submit {
		top: 320px;
		background-color: #fff;
	}
	.register .page-content .submit input {
		width: 300px;
		left: 0px;
		border: none;
		background-color: #12ab34;
		color: #fff;
	}
	.register .page-content .have-account {
		position: absolute;
		top: 290px;
		right: 140px;
		height: 20px;
		line-height: 20px;
		font-size: 12px;
	}
	.register .page-content .have-account .login {
		color: #12ab34;
	}
	.register .page-content .have-account .login:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	
</style>