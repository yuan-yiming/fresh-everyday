<template>
  <div class="login-header">
  	<div class="container">
  		<div class="header-text">
  			<router-link :to="{name:'Home'}" 
  				tag="span" class="logo">
	  			每日生鲜
  			</router-link>
  			<slot></slot>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  }
};
</script>

<style scoped>
	.login-header {
		width: 100%;
		height: 100px;
		/*background-color: #eee;*/
		box-shadow: 0px 3px 10px #aaa;
		border-top: 0.05px solid #eee;
		position: fixed;
		top: 0;
		background-color: #343d42;
		z-index: 1;
	}
	.login-header .container {
		margin: 0 auto;
		width: 1200px;
		height: 100%;
		position: relative;
		/*background-color: #eee;*/
	}
	.login-header .header-text {
		position: absolute;
		top: 25px;
		left: 125px;
		width: 400px;
		height: 50px;
		line-height: 50px;
	}
	.login-header .header-text .logo {
		font-family: WenYueSXSQiuYiNongTi;
		color: #12ab34;
		font-size: 60px;
		cursor: pointer;
	}
	.login-header .header-text .welcome {
		/*color: #666;*/
		font-size: 26px;
		margin-left: 20px;
		vertical-align: 12px;
		color: #fff;
	}
</style>