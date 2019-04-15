<template>
  <div id="main-view">
  	<div class="container">
  		<div class="top-bar">
  			<div class="all-product">
  				<span>全部商品分类</span>
  			</div>
  			<ul class="topic-nav">
  				<li><a href="#search-area">生鲜主页</a></li>
  				<li><a href="#fresh-seckill">秒杀专区</a></li>
  				<li><a href="#good-fresh">优选生鲜</a></li>
  			</ul>
  		</div>
  		<side-bar/>
  		<div class="main-screen">
  			<slide-main-view/>
  			<!-- <slide-seckill/> -->
  			<!-- <slide/> -->
  			<fresh-news/>
  		</div>
  		<div class="good-service">
	  		<good-service :good-service-info="goodServiceInfo">
	  		</good-service>
	  	</div>
  	</div>
  </div>
</template>

<script>
// import Slide from '@/components/Slide'
import SlideMainView from '@/components/SlideMainView'
import SlideSeckill from '@/components/SlideSeckill'
import SideBar from '@/components/SideBar'
import FreshNews from '@/components/FreshNews'
import GoodService from '@/components/GoodService'

export default {
  name: 'MainView',
  components:{
  	// 'slide': Slide,
  	'side-bar': SideBar,
  	'fresh-news': FreshNews,
  	'good-service': GoodService,
  	'slide-main-view': SlideMainView,
  	// 'slide-seckill': SlideSeckill,
  },
  data () {
    return {
    	goodServiceInfo: {},
    }
  },
};
</script>

<style scoped>;	
	#main-view {
		box-sizing: border-box;
		width: 100%;
		height: 420px;
		/*padding-top: 40px;*/
		/*border: 1px solid red;*/
		background: url('../assets/main-view/main-view-bg.png') no-repeat;
		background-size: 2100px; /* 这里不写百分比 */
		background-position: 50% 0%;  /*背景图片居中*/	
		margin-bottom: 120px;
	}
	#main-view .container {
		box-sizing: border-box;
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		/*border: 1px solid green;*/
		position: relative;
		box-shadow: 0px 8px 20px #999;
	}
	/* 顶部栏 */
	#main-view .container .top-bar {
		height: 40px;
		width: 100%;
		background-color: #aaa;
		position: relative;
		top: -40px;
		background-color: #fff;
	}
	#main-view .container .top-bar .all-product {
		/*display: inline-block;*/
		width: 15%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background-color: #129934;
		color: #fff;
		font-weight: bold;
		float: left;
	}
	#main-view .container .top-bar .topic-nav {
		float: left;
		margin-left: 20px;
	}
	#main-view .container .top-bar .topic-nav li {
		float: left;
		color: #424242;
		/*background-color: red;*/
		height: 20px;
		line-height: 20px;
		padding: 5px 20px;
		margin: 5px 0;
	}
	#main-view .container .top-bar .topic-nav li:hover {
		background-color: rgba(18, 171, 52, 0.9);
		cursor: pointer;
		border-radius: 15px;
	}
	#main-view .container .top-bar .topic-nav li a {
		color: #12ab34;
	}
	#main-view .container .top-bar .topic-nav li:hover a {
		color: #fff;
	}
	/* 主页面：轮播图 + 右边新闻*/
	#main-view .container .main-screen {
		width: 85%;
		height: 420px;
		position: absolute;
		top: 0px;
		left: 15%;
	}

	/* 右边生鲜咨询 */
	/* 下方slogan */
	#main-view .container .good-service {
		position: absolute;
		top: 420px;
	}
</style>