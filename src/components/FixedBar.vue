<template>
  <div class="fixed-bar">
  	<div class="container">
  		<div class="logo">
  			<router-link :to="{name:'Home'}" 
  				tag="span" class="logo-span">
	  			每日生鲜
  			</router-link>
  		</div>
  		<div class="slot">
  			<slot></slot>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'FixedBar',
  data () {
    return {
    }
  }
};
</script>

<style scoped>
	.fixed-bar {
		width: 100%;
		height: 60px;
		/*background-color: #eee;*/
		/*box-shadow: 0px 3px 10px #aaa;*/
		border-top: 0.05px solid #eee;
		position: fixed;
		top: 0;
		background-color: #343d42;
		z-index: 10;
	}
	.fixed-bar .container {
		margin: 0 auto;
		width: 1200px;
		height: 100%;
		position: relative;
		/*background-color: #eee;*/
	}
	.fixed-bar .logo {
		position: absolute;
		height: 60px;
		line-height: 60px;
	}
	.fixed-bar .logo .logo-span {
		font-family: WenYueSXSQiuYiNongTi;
		color: #fff;
		font-size: 40px;
		cursor: pointer;
		padding: 0 25.5px;
		/*background-color: #fff;
		border-radius: 15px;*/
	}
	.fixed-bar .slot {
		position: absolute;
		height: 60px;
		line-height: 60px;
		left: 180px;
		width: 1020px;
		color: #fff;
	}
</style>