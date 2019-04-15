<template>
  <div id="home">
  	<fixed-bar v-show="isFixedBarShowed" class="fixed-bar">
  		<ul class="fixed-bar-topic">
			<li><a href="#search-area">生鲜主页</a></li>
			<li><a href="#fresh-seckill">秒杀专区</a></li>
			<li><a href="#good-fresh">优选生鲜</a></li>
		</ul>
		<form class="fixed-bar-search">
			<input type="text" name="" placeholder="搜索商品" class="search-box">
			<input type="submit" name="" value="" class="search-btn">
		</form>
		<div class="fixed-bar-shopping-cart">	
		</div>
  	</fixed-bar>
  	<app-header/>
  	<main-view/>
  	<fresh-seckill/>
  	<!-- <div class="transition"></div> -->
  	<good-fresh/>
  	<app-footer/>
  </div>
</template>

<script>
import FixedBar from '@/components/FixedBar'
import AppHeader from '@/components/AppHeader'
import MainView from '@/components/MainView'
import FreshSeckill from '@/components/FreshSeckill'
import GoodFresh from '@/components/GoodFresh'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'Home',
  components: {
  	'fixed-bar': FixedBar,
  	'app-header': AppHeader,
  	'main-view': MainView,
  	'fresh-seckill': FreshSeckill,
  	'good-fresh': GoodFresh,
  	'app-footer': AppFooter,
  	
  },
  data () {
    return {
    	isFixedBarShowed: false,
    }
  },
	methods: {
		showFixedBar: function () {
			if (window.pageYOffset < 620) {
				this.isFixedBarShowed = false;
			} else {
				this.isFixedBarShowed = true;
			}
		},
	},
	mounted () {
		var showFixedBar = this.showFixedBar; 
		showFixedBar();
		window.onscroll = function () {
			showFixedBar();
		}
	}, 
};
</script>

<style scoped>
	/*#home .transition {
		width: 100%;
		height: 160px;
		background: url('../assets/app-footer-bg.jpg') no-repeat;
		background-position: 50% 0;
	}*/
	#home .fixed-bar .fixed-bar-topic {
	}
	#home .fixed-bar .fixed-bar-topic li {
		float: left;
		width: 80px;
		text-align: center;
	}
	#home .fixed-bar .fixed-bar-topic li a {
		color: #999;
		cursor: pointer;
	}
	#home .fixed-bar .fixed-bar-topic li:hover a {
		color: #fff;
	}
	/* 搜索框 */
	#home .fixed-bar .fixed-bar-search {
		float: left;
		margin-top: 15px;
		margin-left: 120px;
		width: 260px;
		height: 30px;
		position: relative;
		border-radius: 25px;
		overflow: hidden;
		background: #fff;
	}
	#home .fixed-bar .fixed-bar-search input {
		position: absolute;
		height: 30px;
		line-height: 30px;
		top: 0px;
		box-sizing: border-box;
		border: none;
		outline: none;
		font-size: 14px;
	}
	#home .fixed-bar .fixed-bar-search .search-box {
		padding: 0px 15px;
		height: 30px;
		width: 220px;
		/*background-color: #999;*/
	}
	#home .fixed-bar .fixed-bar-search .search-btn {
		left: 220px;
		width: 40px;
		color: #fff;
		cursor: pointer;
		background: url('../assets/fixed-bar/search-icon.svg') no-repeat;
		background-size: 16px;
		background-position: 10px 7px;
	} 
</style>