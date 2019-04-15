<template>
	<div class="fresh-news">
		<h4 class="news-title"><span>生鲜</span>资讯
			<span class="line line-left"></span>
			<span class="line line-right"></span>
		</h4>
		<div class="news-list">
			<p  v-for="news in freshNews" 
				:class="{enter: news.enter, leave: news.enter === false}"
				@mouseenter="mouseEnter(news)" 
				@mouseleave="mouseEnter(news)">
				<a href="#">{{ news.title }}</a>
			</p>
		</div>
		<div class="hot-sale">
			<a href="#">
				<img src="../assets/main-view/fresh-news.png">
			</a>
		</div>
	</div>
</template>

<script>
export default {
  name: 'FreshNews',
  data () {
    return {
    	freshNews: [
    		{
    			title: '精心挑选100分营养美味',
    			enter: 0,
    			// leave: false,
    		},
    		{
    			title: '0元试吃 全新上线 抓紧尝鲜',
    			enter: 0,
    			// leave: false,
    		},
    		{
    			title: '一键分享 用心做顿好饭',
    			enter: 0,
    			// leave: false,
    		},
    	],
    }
  },
  methods: {
  	mouseEnter: function (news) {
  		news.enter = !news.enter;
  		// news.leave = false;
  	},
  	// mouseLeave: function (news) {
  	// 	news.enter = false;
  	// 	news.leave = true;
  	// },
  },
};
</script>

<style scoped>
	.fresh-news {
		width: 180px;
		height: 100%;
		background-color: #eee;
		float: right;
		position: relative;
	}
	.fresh-news .news-title {
		text-align: center;
		font-weight: normal;
		margin: 15px 0;
		/*background-color: red;*/
		height: 20px;
		line-height: 20px;
		position: relative;
	}
	.fresh-news .news-title span {
		color: #12ab34;
	}
	.fresh-news .news-title .line {
		display: inline-block;
		position: absolute;
		top: 9px;
		width: 16px;
		height: 2px;
		background-color: #000;
	}
	.fresh-news .news-title .line-left {
		left: 33px;
	}
	.fresh-news .news-title .line-right {
		right: 33px;
	}
	.fresh-news .news-list {
		/*padding: 0 10px;*/
	}
	.fresh-news .news-list p {
		margin: 6px 10px;
		padding-left: 12px;
		/*background-color: red;*/
		position: relative;
		height: 20px;
		line-height: 20px;
	}
	@keyframes dot2line {
		from {height: 4px; top: 8px; background-color: #424242;}
		to {height: 20px; top: 0px; background-color: #12ab34;}
	}
	@keyframes line2dot {
		from {height: 20px; top: 0px; background-color: #12ab34;}
		to {height: 4px; top: 8px; background-color: #424242;}
	}
	.fresh-news .news-list p::before {
		position: absolute;
		top: 8px;
		left: 0;
		content: '';
		display: inline-block;
		width: 4px;
		height: 4px;
		background-color: #424242;
	}
	.fresh-news .news-list p.enter:before {
		animation: dot2line 0.3s ease forwards;
	}
	.fresh-news .news-list p.leave:before {
		animation: line2dot 0.3s ease forwards;
	}
	.fresh-news .news-list a {
		color: #424242;
		font-size: 12px;
	}
	.fresh-news .news-list a:hover {
		color: #12ab34;
	}
	.fresh-news .hot-sale {
		position: absolute;
		bottom: 0;
		width: 180px;
		height: 275px;
		/*overflow: hidden;*/
	}
	.fresh-news .hot-sale img {
		/*display: inline-block;*/
		position: absolute;
		top: 0;
		left: 0;
		width: 180px;
		height: 275px;
	}
	@keyframes imagestretch {
		from {width: 180px; height: 275px; top: 0; left: 0;}
		to {width: 189px; height: 289px; top: -7px; left: -4.5px;}
	}
	.fresh-news .hot-sale img:hover {
		animation: imagestretch 0.1s ease forwards;
		box-sizing: border-box;
		/*border: 1px solid #ccc;*/
		box-shadow: 1px 2px 2px #999;
	}
</style>