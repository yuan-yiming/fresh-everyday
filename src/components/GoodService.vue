<template>
  	<ul id="good-service">
  		<li v-for="item in items">
  			<i class="service-icon" :style="{backgroundImage: getIconPath(item.iconName)}"></i>
  			<p class="srevice-title" 
  				:style="{color: goodServiceInfo.titleColor}">
  				{{ item.title }}
  			</p>
  			<p class="service-content"
  				:style="{color: goodServiceInfo.contentColor}">
  				{{ item.content }}
  			</p>
  			<span></span>
  		</li>
  	</ul>
</template>

<script>
	export default {
		name: 'GoodService',
		props: ['goodServiceInfo'],
		data () {
			return {
				// iconDir: '../assets/good-service-icons/',
				items: [
					{
						index: 0,
						title: '食品安全',
						content: '精选生鲜 严格质检',
						iconName: 'food-safety'
					},
					{
						index: 1,
						title: '全程冷链',
						content: '优质物流 安全可控',
						iconName: 'cold-chain'
					},
					{
						index: 2,
						title: '鲜活天然',
						content: '绿色生态 每日精选',
						iconName: 'natural'
					},
					{
						index: 3,
						title: '产地直采',
						content: '稳定产源 质量保证',
						iconName: 'direct-purchase'
					},
					{
						index: 4,
						title: '无忧售后',
						content: '优鲜售后 绿色通道',
						iconName: 'after-sale'
					},
				],
			}
		},
		methods: {
			getIconPath: function (name) {
				var suffix = this.goodServiceInfo.iconSuffix ? this.goodServiceInfo.iconSuffix : '';
				return 'url(' + require('../assets/good-service/icons/' + name + suffix + '.png') + ')';
			},
		},
	};
</script>

<style scoped>
	#good-service {
		width: 1200px;
		height: 100px;
		line-height: 25px;
	}
	#good-service li {
		box-sizing: border-box;
		/*border: 1px solid red;*/
		float: left;
		width: 240px;
		height: 100%;
		position: relative;
		padding-top: 30px;
		padding-left: 90px;
	}
	#good-service .service-icon {
		position: absolute;
		left: 40px;
		top: 36px;
		width: 32px;
		height: 32px;
		background-size: 32px;
	}
	#good-service .srevice-title {
		color: #666;
		font-size: 18px;
		/*font-weight: bold;*/
	}
	#good-service .service-content {
		color: #999;
		font-size: 12px;
	}
</style>