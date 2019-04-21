<template>
	<slide-base 
		:slide-content="slideContentArr"
		:slide-info="slideInfo"
		@play-one-step="updateOffset">
		<ul v-bind:style="{left: offset + 'px'}" class="slide-ul">
			<li>
				<ul class="slide-unit">
					<router-link v-for="prod in getSlideProduct.slice(10, 15)"
						:to="{name: 'ProductDetails', params: {id: prod.id}}"
						tag="li">
						<div class="seckill-price">
							<span class="price1">￥{{ prod.price1 }}</span>
							<span class="price0">￥{{ prod.price0 }}</span>
						</div>
						<div class="product-img">
							<img :src="getProductImg(prod.imgName)">
						</div>
						<div class="product-title">
							<p>{{ prod.desc }}</p>
						</div>
						<div class="favorable-rating">
							<p>好评率99%</p>
						</div>
						<div class="seckill-now">
							<p class="slide-up">立即秒杀</p>
						</div>
					</router-link>
				</ul>
			</li>
			<li v-for="content in slideContentArr">
				<ul class="slide-unit">
					<router-link v-for="prod in content.products"
						:to="{name: 'ProductDetails', params: {id: prod.id}}"
						tag="li">
						<div class="seckill-price">
							<span class="price1">￥{{ prod.price1 }}</span>
							<span class="price0">￥{{ prod.price0 }}</span>
						</div>
						<div class="product-img">
							<img :src="getProductImg(prod.imgName)">
						</div>
						<div class="product-title">
							<p>{{ prod.desc }}</p>
						</div>
						<div class="favorable-rating">
							<p>好评率99%</p>
						</div>
						<div class="seckill-now">
							<p class="slide-up">立即秒杀</p>
						</div>
					</router-link>
				</ul>
			</li>
			<li>
				<ul class="slide-unit">
					<router-link v-for="prod in getSlideProduct.slice(0, 5)"
						:to="{name: 'ProductDetails', params: {id: prod.id}}"
						tag="li">
						<div class="seckill-price">
							<span class="price1">￥{{ prod.price1 }}</span>
							<span class="price0">￥{{ prod.price0 }}</span>
						</div>
						<div class="product-img">
							<img :src="getProductImg(prod.imgName)">
						</div>
						<div class="product-title">
							<p>{{ prod.desc }}</p>
						</div>
						<div class="favorable-rating">
							<p>好评率99%</p>
						</div>
						<div class="seckill-now">
							<p class="slide-up">立即秒杀</p>
						</div>
					</router-link>
				</ul>
			</li>
		</ul>
	</slide-base>
	<!-- </div> -->
</template>

<script>
	import SlideBase from '@/components/SlideBase'
	import products from '../../static/products.js'

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
				allProducts: products,
			}
		},
		components: {
			'slide-base': SlideBase,
		},
		computed: {
			getSlideProduct: function () {
				var tempArr = [];
				for (var i = 0; i < this.allProducts.length; i++) {
					if (this.allProducts[i].price0 > this.allProducts[i].price1) {
						tempArr.push(this.allProducts[i]);
					}
				}
				return tempArr;
			},
			// 将轮播的商品分为3个对象
			slideContentArr: function () {
				return [
					{
						index: 0,
						products: this.getSlideProduct.slice(0,5),
					},
					{
						index: 1,
						products: this.getSlideProduct.slice(5,10),
					},
					{
						index: 2,
						products: this.getSlideProduct.slice(10,15),
					},
				]
			},
		},
		methods: {
			// 获取轮播图路径
			getProductImg: function (name) {
				// return 'url(' + require('../assets/main-view-slide-img/' + name + '.jpg') + ')';
				return require('../assets/product-images/' + name) ;
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
		},
		mounted () {
			console.log(this.getSlideProduct.length);
		},
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
		cursor: pointer;
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
	ul.slide-ul>li ul.slide-unit>li .seckill-price .price0 {
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
	ul.slide-ul>li ul.slide-unit>li .seckill-now .slide-up {
		position: absolute;
		bottom: -50px;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: #f40;
		color: #fff;
		font-size: 20px;
		transition: bottom ease-out 0.3s;
	}
	ul.slide-ul>li ul.slide-unit>li:hover .seckill-now .slide-up {
		bottom: 0;
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
