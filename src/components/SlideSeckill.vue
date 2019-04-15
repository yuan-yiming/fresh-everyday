<template>
	<slide-base 
		:slide-content="slideContent"
		:slide-info="slideInfo"
		@play-one-step="updateOffset">
		<ul v-bind:style="{left: offset + 'px'}" class="slide-ul">
			<li>
				<ul class="slide-unit">
					<li v-for="list in slideContent[2].productList" 
						@mouseenter="slideUpSeckillNow(list)" 
						@mouseleave="slideDownSeckillNow(list)">
						<div class="seckill-price">
							<span class="price1">￥{{ list.price1 }}</span>
							<span class="price2">￥{{ list.price2 }}</span>
						</div>
						<div class="product-img">
							<img :src="getProductImg(list.imageName)">
						</div>
						<div class="product-title">
							<p>{{ list.title }}</p>
						</div>
						<div class="favorable-rating">
							<p>好评率{{ list.favorableRating }}</p>
						</div>
						<div class="seckill-now">
							<p :class="{'slide-up': list.isSlideUp, 'slide-down': list.isSlideDown}">立即秒杀</p>
						</div>
					</li>
				</ul>
			</li>
			<li v-for="content in slideContent">
				<ul class="slide-unit">
					<li v-for="list in content.productList" 
						@mouseenter="slideUpSeckillNow(list)" 
						@mouseleave="slideDownSeckillNow(list)">
						<div class="seckill-price">
							<span class="price1">￥{{ list.price1 }}</span>
							<span class="price2">￥{{ list.price2 }}</span>
						</div>
						<div class="product-img">
							<img :src="getProductImg(list.imageName)">
						</div>
						<div class="product-title">
							<p>{{ list.title }}</p>
						</div>
						<div class="favorable-rating">
							<p>好评率{{ list.favorableRating }}</p>
						</div>
						<div class="seckill-now">
							<p :class="{'slide-up': list.isSlideUp, 'slide-down': list.isSlideDown}">立即秒杀</p>
						</div>
					</li>
				</ul>
			</li>
			<li>
				<ul class="slide-unit">
					<li v-for="list in slideContent[0].productList" 
						@mouseenter="slideUpSeckillNow(list)" 
						@mouseleave="slideDownSeckillNow(list)">
						<div class="seckill-price">
							<span class="price1">￥{{ list.price1 }}</span>
							<span class="price2">￥{{ list.price2 }}</span>
						</div>
						<div class="product-img">
							<img :src="getProductImg(list.imageName)">
						</div>
						<div class="product-title">
							<p>{{ list.title }}</p>
						</div>
						<div class="favorable-rating">
							<p>好评率{{ list.favorableRating }}</p>
						</div>
						<div class="seckill-now">
							<p :class="{'slide-up': list.isSlideUp, 'slide-down': list.isSlideDown}">立即秒杀</p>
						</div>
					</li>
				</ul>
			</li>
		</ul>
	</slide-base>
	<!-- </div> -->
</template>

<script>
	import SlideBase from '@/components/SlideBase'

	export default {
		name: 'SlideSeckill',
		props: [],
		data () {
			return {
				offset: -1180,
				slideInfo: {
					slideNum: 3,
					playInterval: 3000,
					width: 1180,
					height: 440,
					isAutoPlay: false,
					// sideBtnPositionX: -40,
					isAlwaysShowedSideBtn: true, 
					bottomBtnColor: '#12ab34',
				},
				slideContent: [
					{
						index: 0,
						productList: [
							{
								title: '百香果 精选大果12个装 单果70-100g 新鲜水果',
								price1: 32.8,
								price2: 59.9,
								favorableRating: '99%',
								imageName: '0-0',
								isSlideUp: false,
								isSlideDown: false,							
							},
							{
								title: '陕西眉县 徐香绿心猕猴桃 12个 大果 单果95-115g 新鲜水果',
								price1: 25.8,
								price2: 49.9,
								favorableRating: '98%',
								imageName: '0-1',
								isSlideUp: false,
								isSlideDown: false,							
							},
							{
								title: '枝纯糖果番茄 串收粒采西红柿 红黄采收双杯装 320g 新鲜水果',
								price1: 14.8,
								price2: 22.9,
								favorableRating: '97%',
								imageName: '0-2',
								isSlideUp: false,
								isSlideDown: false,							
							},
							{
								title: '海南金钻凤梨 1个装 单果800g以上 新鲜水果',
								price1: 19.9,
								price2: 36.9,
								favorableRating: '98%',
								imageName: '0-3',
								isSlideUp: false,
								isSlideDown: false,							
							},
							{
								title: '绿鲜知 鲜板栗仁 去皮板栗 约450g 新鲜蔬菜',
								price1: 19.9,
								price2: 24.8,
								favorableRating: '98%',
								imageName: '0-4',
								isSlideUp: false,
								isSlideDown: false,							
							},
						],
					},
					{
						index: 1,
						productList: [
							{
								title: '【莘县馆】绿宝甜瓜 新鲜水果 山东特产 2.25kg',
								price1: 19.9,
								price2: 24.8,
								favorableRating: '98%',
								imageName: '0-10',
								isSlideUp: false,
								isSlideDown: false,
							},
							{
								title: '【周黑鸭_锁鲜】卤鸭脖200g锁骨240g气调盒装麻辣肉类卤制熟食',
								price1: 32.8,
								price2: 59.9,
								favorableRating: '99%',
								imageName: '0-11',
								isSlideUp: false,
								isSlideDown: false,
							},
							{
								title: '卡士 CLASSY.KISS 原态酪乳125g*3',
								price1: 25.8,
								price2: 49.9,
								favorableRating: '98%',
								imageName: '0-12',
								isSlideUp: false,
								isSlideDown: false,
							},
							{
								title: '雀巢 雪糍冰淇淋 32g*6支 香草口味',
								price1: 19.9,
								price2: 36.9,
								favorableRating: '98%',
								imageName: '0-13',
								isSlideUp: false,
								isSlideDown: false,
							},
							{
								title: '海霸王 潮汕特产牛筋风味丸 500g 火锅食材 火锅丸子 烧烤食材',
								price1: 25.8,
								price2: 49.9,
								favorableRating: '98%',
								imageName: '0-14',
								isSlideUp: false,
								isSlideDown: false,
							},
						],

					},
					{
						index: 2,
						productList: [
							{
								title: '硒全食美 富硒老鸽 400g/只 供港鸽子 全程冷链 鸽子',
								price1: 32.8,
								price2: 59.9,
								favorableRating: '99%',
								imageName: '0-5',
								isSlideUp: false,
								isSlideDown: false,							
							},
							{
								title: '恒都 羔羊排 1.2kg/袋 烧烤食材',
								price1: 25.8,
								price2: 49.9,
								favorableRating: '98%',
								imageName: '0-6',
								isSlideUp: false,
								isSlideDown: false,							
							},
							{
								title: '新希望 原态酪乳 原味 100g*10袋 无添加剂 酸奶酸牛奶',
								price1: 19.9,
								price2: 36.9,
								favorableRating: '98%',
								imageName: '0-7',
								isSlideUp: false,
								isSlideDown: false,							
							},
							{
								title: '南湖牌 咸鸭蛋20枚65g/枚礼盒装特产送礼鸭蛋咸蛋',
								price1: 25.8,
								price2: 49.9,
								favorableRating: '98%',
								imageName: '0-8',
								isSlideUp: false,
								isSlideDown: false,							
							},
							{
								title: '皇纯 即食海参 500g 7-15只 醇品 威海野生有机刺参 海鲜水产',
								price1: 19.9,
								price2: 36.9,
								favorableRating: '98%',
								imageName: '0-9',
								isSlideUp: false,
								isSlideDown: false,							
							},
						],
					},
				],
			}
		},
		components: {
			'slide-base': SlideBase,
		},
		methods: {
			// 获取轮播图路径
			getProductImg: function (name) {
				// return 'url(' + require('../assets/main-view-slide-img/' + name + '.jpg') + ')';
				return require('../assets/fresh-seckill/' + name + '.jpg') ;
			},
			updateOffset: function ($event) {
				this.offset = $event;
				// console.log($event);
			},
			slideUpSeckillNow: function (obj) {
				obj.isSlideDown = false;
				obj.isSlideUp = true;
			},
			slideDownSeckillNow: function (obj) {
				obj.isSlideUp = false;
				obj.isSlideDown = true;
			},
		}
	};
</script>

<style >
	/* 轮播图轮播内容部分 */
	ul.slide-ul {
		position: absolute;
		top: 30px;
		width: 5900px;
		height: 360px;
	}
	ul.slide-ul>li {
		width: 1180px;  /*1100px*/
		height: 100%; /*360px*/
		float: left;
	}
	ul.slide-ul>li ul.slide-unit {
		margin: 0 auto;
		width: 1100px;
		height: 360px;
		/*background-color: red;*/
	}
	/* 每个商品的信息 */
	ul.slide-ul>li ul.slide-unit>li {
		width: 216px;
		height: 360px;
		float: left;
		/*background-color: #fff;*/
		box-sizing: border-box;
		margin: 0 2px;
		position: relative;
		/*border: 1px solid red;*/
	}
	ul.slide-ul>li ul.slide-unit>li:hover {
		box-shadow: 0px 0px 10px 2px #ddd;
	}
	/* 价格 */
	ul.slide-ul>li ul.slide-unit>li .seckill-price {
		position: absolute;
		top: -10px;
		left: 18px;
		height: 30px;
		line-height: 30px;
		width: 180px;
		background-color: #f40;
		border-radius: 0 0 15px 15px;
		color: #fff;
		text-align: center;
		font-size: 22px;
	}
	ul.slide-ul>li ul.slide-unit>li .seckill-price .price2 {
		text-decoration: line-through;
		font-size: 14px;
		opacity: 0.5;
	}
	/* 商品图片 */
	ul.slide-ul>li ul.slide-unit>li .product-img {
		position: absolute;
		top: 40px;
		left: 18px;
		width: 180px;
		height: 180px;
		/*margin-top: 10px;*/
	}
	ul.slide-ul>li ul.slide-unit>li .product-img img {
		width: 180px;
		height: 180px;
	}
	/* 商品title */
	ul.slide-ul>li ul.slide-unit>li .product-title {
		position: absolute;
		top: 240px;
		left: 18px;
		width: 170px;
		height: 60px;
		line-height: 30px;
		overflow: hidden;
		padding: 0 5px;
		text-align: center;
		/*border: 1px solid red;*/
	}
	ul.slide-ul>li ul.slide-unit>li .product-title p {
		
	}
	/* 商品好评率 */
	ul.slide-ul>li ul.slide-unit>li .favorable-rating {
		position: absolute;
		bottom: 20px;
		left: 18px;
		width: 180px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		color: #999;
		font-size: 14px;
		border-bottom: 3px solid #f40;
	}
	/* 立即秒杀 */
	ul.slide-ul>li ul.slide-unit>li .seckill-now {
		position: absolute;
		left: 0;
		bottom: 0px;
		width: 216px;
		height: 50px;
		overflow: hidden;
	}
	ul.slide-ul>li ul.slide-unit>li .seckill-now p {
		position: absolute;
		bottom: -50px;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: #f40;
		color: #fff;
		font-size: 20px;
	}
	ul.slide-ul>li ul.slide-unit>li .slide-up {
		animation: slideup 0.2s linear forwards;
	}
	ul.slide-ul>li ul.slide-unit>li .slide-down {
		animation: slidedown 0.2s ease forwards;
	}
	@keyframes slideup {
		from {bottom: -50px}
		to {bottom: 0px}
	}
	@keyframes slidedown {
		from {bottom: 0px}
		to {bottom: -50px}
	}
	/* 底部按钮 */
	#fresh-seckill .seckill-content .slide .slide-bottom-btn li {
		background-color: #fff;
		opacity: 0.7;
		border: 2px solid #12ab34;
		box-shadow: none;
	}
	#fresh-seckill .seckill-content .slide-bottom-btn li.current-image {
		background-color: #12ab34;
	}
</style>
