<template>
  <div class="product-details">
  	<app-header/>
  	<!-- 分类栏 -->
  	<div class="category-wrapper">
  		<div class="category">水果 > 草莓 > 商品详情 </div>  		
  	</div>
	<!-- 主要信息 -->
	<div class="main-area">
		<!-- 产品图片 -->
		<div class="img-area">
			<img src="../assets/product-details/0.jpg">
		</div>
		<!-- 产品信息 -->
		<div class="product-info">
			<div class="title">
				<span class="company-name">{{ productInfo.companyName }}</span>
				<span class="name">{{ productInfo.name }}</span>
			</div>
			<div class="main-details">
				<div>
					价格
					<span class="price">￥{{ productInfo.price }}</span>
					<span class="price-lowering-inform">降价通知</span>
				</div>
				<div>
					累计评论 <span class="comment-num">{{ productInfo.commentNum }}</span>
				</div>
				<div>
					优惠券
					<span v-for="discount in productInfo.discount" class="discount">{{ discount }}</span>
					<span class="more-discount">更多>></span> 
				</div>
				<div>重量 <span class="weight">{{ productInfo.weight }}</span></div>
				<div>
					配送至 <span class="delivery-address">广东 广州市 天河区 <span class="down-arrow"></span></span>
					<span class="in-stock">有货</span>
					<span>在线支付免运费</span>
					<br>
					<span class="arrival-time">由 <span class="company">{{productInfo.companyName}}</span> 发货, 并提供售后服务，23:00前下单,预计明天(04月18日)发货</span>
				</div>
			</div>
			<!-- 操作 -->
			<div class="operation">
				<div class="product-num">
					<span class="subtract" :class="{inactive: productNum==1}" @click="addProductNum(false)">-</span>
					<input type="text" name="" class="number" v-model="productNum">
					<span class="add" @click="addProductNum(true)">+</span>
				</div>
				<div class="add-to-shopping-cart">加入购物车</div>
				<div class="buy-now">立即购买</div>
			</div>
		</div>
		<div class="recommendation">
			<p>大家都在看</p>
			<ul>
				<li v-for="product in recommendedProduct">
					<div class="recom-product-img">
						<img :src="getProductImgPath(product.imgName)">
					</div>
					<div class="recom-product-name">{{ product.name }}</div>
					<div class="recom-product-price">￥{{ product.price }}</div>
				</li>
			</ul>
		</div>
	</div>
	<!-- 下方其他信息 -->
	<div class="other-info">
		<!-- 左侧·热销商品 -->
		<div class="hot-sale">
			<p class="title">热销产品</p>
			<ul>
				<li v-for="product in recommendedProduct.slice(0,2)">
					<div class="recom-product-img">
						<img :src="getProductImgPath(product.imgName)">
					</div>
					<div class="recom-product-sale-num">
						<span class="rank">{{ product.index + 1 }}</span>热销{{ product.saleNum }}件
					</div>
					<div class="recom-product-price">￥{{ product.price }}</div>
				</li>
			</ul>
		</div>
		<!-- 产品的一些信息 -->
		<more-info :product="productInfo"></more-info>
	</div>
  	<app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import MoreInfo from '@/components/MoreInfo'

export default {
  name: 'ProductDetails',
  components: {
  	'app-header': AppHeader,
  	'app-footer': AppFooter,
  	'more-info': MoreInfo,
  },
  props: {
  	inputProductInfo: Object,
  	inputUserInfo: Object,
  },
  data () {
    return {
    	productNum: 1,
    	productInfo: {
    		id: 0,
    		name: '红颜奶油草莓 约重1kg/20-24颗 新鲜水果',
    		price: 45.90,
    		weight: '1.24kg',
    		companyName: '鲜绿水果',
    		producingArea: '丹东/南通',
    		commentNum: '3.7万+',
    		discount: ['满50减5', '满99减20', '满199减50'],
    		category: '新鲜水果',
    		favoriteRating: '98%',
    		imgName: {
	    		img1: ['0-0-small.jpg', '0-0-big.jpg'],
    			img1: ['0-1-small.jpg', '0-1-big.jpg'],
    			img2: ['0-2-small.jpg', '0-2-big.jpg'],
    			img3: ['0-3-small.jpg', '0-3-big.jpg'],
    			img4: ['0-4-small.jpg', '0-4-big.jpg'],
    		},
    	},
    	recommendedProduct: [
    		{
    			index: 0,
    			name: '泰国进口龙眼 500g装 新鲜水果',
    			price: 14.90,
    			saleNum: 12534,
    			imgName: 'recom-0.jpg',
    		},
    		{
    			index: 1,
    			name: '进口牛油果 6个装 单果重130-180g 新鲜水果',
    			price: 39.90,
    			saleNum: 34518,
    			imgName: 'recom-1.jpg',
    		},
    		{
    			index: 2,
    			name: '海南桂花香荔枝 500g装 新鲜水果',
    			price: 44.80,
    			saleNum: 8518,
    			imgName: 'recom-2.jpg',
    		},
    		{
    			index: 3,
    			name: '澳洲 进口无籽红提/葡萄 提子 450g装 新鲜水果',
    			price: 27.90,
    			saleNum: 90118,
    			imgName: 'recom-3.jpg',
    		},
    		{
    			index: 4,
    			name: '越南进口红心火龙果 2个装 巨无霸大果 单果约600~700g 新鲜水果',
    			price: 49.90,
    			saleNum: 12218,
    			imgName: 'recom-4.jpg',
    		},
    	],
    }
  },
  methods: {
  	addProductNum: function (bool) {
  		if (bool) {
  			this.productNum ++;
  		} else if (!bool && this.productNum > 1) {
  			this.productNum --;
  		}
  	},
  	getProductImgPath: function (name) {
  		return require('../assets/product-details/' + name);
  	},
  },
};
</script>

<style scoped>
	/* 组件的最外层标签 */
		.product-details {
			width: 100%;
			font-size: 14px;
		}
	/* 分类栏 */
		.product-details .category-wrapper {
			width: 100%;
			background: #eee;
		}
		.product-details .category-wrapper .category {
			width: 1200px;
			height: 40px;
			line-height: 40px;
			font-size: 14px;
			margin: 0 auto;
		}
	/* 主要信息 */
		.product-details .main-area {
			width: 1200px;
			margin: 10px auto;
			margin-bottom: 0;
			position: relative;
			/*background: red;*/
			/*box-sizing: border-box;*/
			/*border: 1px solid red;*/
		}
		.product-details .main-area::after {
			content: '';
			display: block;
			clear: both;
		}
		/* 商品图片 */
		.product-details .main-area .img-area {
			width: 320px;
			height: 320px;
			float: left;	
		}
		.product-details .main-area .img-area img {
			width: 320px;
			height: 320px;
			box-sizing: border-box;
			border: 0.8px solid #ddd;
			box-shadow: 0px 0px 10px rgba(0,0,0,0.2);

		}
		/* 商品信息1 */
		.product-details .main-area .product-info {
			width: 680px;
			min-height: 360px;
			float: left;
			box-sizing: border-box;
			/*border: 1px solid green;*/
			padding: 0px 30px;
		}
		.product-details .main-area .product-info .title {
			height: 40px;
			line-height: 40px;
		}
		.product-details .main-area .product-info .title .company-name {
			font-size: 14px;
			padding: 2px;
			background-color: #ef1234;
			color: #fff;
			vertical-align: 1px;
			border-radius: 2px;
		}
		.product-details .main-area .product-info .title .name {
			font-size: 18px;
			font-weight: bold;
		}
		/* 主要细节 */
		.product-details .main-area .product-info .main-details {
			font-size: 12px;
			color: #666;
			position: relative;
			width: 620px;
			min-height: 100px;
			background: rgba(238,238,238,0.5);
			box-sizing: border-box;
			padding: 0 10px 35px 10px;
		}
		.product-details .main-area .product-info .main-details>div {
			height: 36px;
			line-height: 36px;
			/*background: red;*/
			box-sizing: border-box;
			/*border: 1px solid red;*/
		}
		/* 价格 */
		.product-details .main-area .product-info .main-details .price {
			color: #ef1234;
			font-size: 22px;
			padding: 0 10px;
			vertical-align: -3px;
		}
		.product-details .main-area .product-info .main-details .price-lowering-inform {
			cursor: pointer;
			color: #1234ab;
		}
		.product-details .main-area .product-info .main-details .price-lowering-inform:hover {
			color: #ef1234;
		}
		/* 累积评论 */
		.product-details .main-area .product-info .main-details .comment-num {
			color: #1234ab;
			font-size: 16px;
			padding: 0 10px;
		}
		.product-details .main-area .product-info .main-details .discount {
			border: 1px solid #ef1234;
			padding: 3px 15px;
			margin: 0 5px;
			color: #ef1234;
			border-radius: 2px;
			background: rgba(255,0,0,0.1);
		}
		.product-details .main-area .product-info .main-details .discount:hover {
			cursor: pointer;
			background: #fff;
		}
		.product-details .main-area .product-info .main-details .more-discount:hover {
			cursor: pointer;
			color: #ef1234;
		}
		/* 重量 */
		.product-details .main-area .product-info .main-details .weight {
			color: #424242;
			font-size: 13px;
			padding: 0 10px;
			/*background: red;*/
		}
		/* 地址 */
		.product-details .main-area .product-info .main-details .delivery-address {
			border: 1px solid #ccc;
			padding: 5px;
			margin: 0 10px;
		}
		.product-details .main-area .product-info .main-details .in-stock {
			/*color: #424242;*/
			/*font-size: 14px;*/
			font-weight: 600;
		}
		.product-details .main-area .product-info .main-details .arrival-time {
			margin-left: 50px;
			/*line-height: 30px;*/
		}
		.product-details .main-area .product-info .main-details .arrival-time .company {
			color: #ef1234;
		}
		/* 操作 */
		.product-details .main-area .product-info .operation::after {
			content: '';
			display: block;
			clear: both;
		}
		.product-details .main-area .product-info .operation {
			/*margin-top: 10px;*/
			padding-top: 20px;
		}

		/* 商品数量 */
		.product-details .main-area .product-info .operation .product-num {
			float: left;
			width: 120px;
			height: 30px;
			border: 1px solid #ccc;
			position: relative;
			/*display: */
			/*box-sizing: border-box;*/
		}
		.product-details .main-area .product-info .operation .product-num>* {
			position: absolute;
			top: 0;
			text-align: center;
			width: 25%;
			height: 30px;
			line-height: 30px;
			background-color: #eee;
			font-size: 20px;
			border: none;
		}
		.product-details .main-area .product-info .operation .product-num .add {
			left: 90px;
			cursor: pointer;
		}
		.product-details .main-area .product-info .operation .product-num .subtract {
			cursor: pointer;
		}
		.product-details .main-area .product-info .operation .product-num span.inactive {
			cursor: default;
			color: #ccc;
		}
		.product-details .main-area .product-info .operation .product-num .number {
			left: 30px;
			width: 50%;
			box-sizing: border-box;
			border-left: 1px solid #ccc;
			border-right: 1px solid #ccc;
			background-color: #fff;
			outline: none;
			font-size: 16px;
		}
		/* 加入购物车/立即下单 */
		.product-details .main-area .product-info .operation>div:nth-child(n+2) {
			float: left;
			display: inline-block;
			height: 32px;
			width: 120px;
			line-height: 32px;
			text-align: center;
			margin-left: 20px;
			background-color: #ef1234;
			color: #fff;
			font-size: 16px;
			font-weight: bold;
		}
		.product-details .main-area .product-info .operation>div:nth-child(n+2):hover {
			box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
			cursor: pointer;
		}

		/* 右侧推荐商品 */
		.product-details .main-area .recommendation {
			position: absolute;
			top: 0;
			right: 0;
			z-index: 1;
			width: 200px;
			/*min-height: 340px;*/
			box-sizing: border-box;
			/*border: 1px solid blue;*/

		}
		.product-details .main-area .recommendation>p {
			height: 30px;
			line-height: 30px;
			text-align: center;
			font-weight: bold;
			color: #666;
		}
		.product-details .main-area .recommendation>ul {
			/*height: 300px;*/
		}
		.product-details .main-area .recommendation>ul li {
			height: 160px;
			box-sizing: border-box;
			/*border: 1px solid red;*/
			padding-top: 10px;
			position: relative;
			/*margin-bottom: 10px;*/
		}
		.product-details .main-area .recommendation>ul li .recom-product-img {
			width: 120px;
			height: 120px;
			margin: 0px auto;
		}
		.product-details .main-area .recommendation>ul li .recom-product-img img {
			width: 120px;
			height: 120px;
		}
		.product-details .main-area .recommendation>ul li:hover {
			/*margin-top: 2px;*/
			box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
			cursor: pointer;
			color: #ef1234;
		}
		.product-details .main-area .recommendation>ul li>div:nth-child(n+2) {
			position: absolute;
			left: 40px;
			bottom: 10px;
			height: 20px;
			line-height: 20px;
			font-size: 12px;
			width: 120px;
			overflow: hidden;
			text-align: center;
			/*background-color: red;*/
			background-color: rgba(255,255,255,0.8);
		}
		.product-details .main-area .recommendation>ul li>div.recom-product-name {
			bottom: 30px;
		}
		.product-details .main-area .recommendation>ul li>div.recom-product-price {
			color: #ef1234;
		}
	/* 下方其他信息 */
		.product-details .other-info {
			width: 1200px;
			margin: 0 auto;
			/*box-sizing: border-box;*/
			/*border: 1px solid blue;*/
			overflow: hidden;
			margin-bottom: 20px;
		}
		/* 热销产品 */
		.product-details .other-info .hot-sale {
			width: 220px;
			min-height: 300px;
			/*background-color: #eee;*/
			border: 1px solid #ddd;
			box-sizing: border-box;
			float: left;
		}
		.product-details .other-info .hot-sale .title {
			height: 40px;
			line-height: 40px;
			text-align: center;
			font-size: 16px;
			font-weight: bold;
			background: rgba(238,238,238,0.5);
			box-sizing: border-box;
			border-bottom: 1px solid #ddd;
		}
		.product-details .other-info .hot-sale ul li {
			width: 220px;
			height: 200px;
			box-sizing: border-box;
			border-bottom: 1px solid #ddd;
		}
		.product-details .other-info .hot-sale ul li:last-child {
			border: none;
		}
		.product-details .other-info .hot-sale ul li>.recom-product-img {
			width: 160px;
			height: 160px;
			margin: 10px auto;
			/*background-color: red;*/
		}
		.product-details .other-info .hot-sale ul li>.recom-product-img img {
			width: 160px;
		}
		.product-details .other-info .hot-sale ul li>.recom-product-sale-num {
			float: left;
			padding-left: 10px;
			height: 20px;
			line-height: 20px;
			/*font-size: 16px;*/
			color: #999;
		}
		.product-details .other-info .hot-sale ul li>.recom-product-sale-num .rank {
			display: inline-block;
			width: 20px;
			height: 20px;
			text-align: center;
			background-color: #ef1234;
			color: #fff;
			border-radius: 50%;
			margin-right: 5px;
			/*padding: 5px;*/
		}
		.product-details .other-info .hot-sale ul li>.recom-product-price {
			float: right;
			padding-right: 10px;
			height: 20px;
			line-height: 20px;
			color: #ef1234;
			font-size: 18px;
			font-weight: bold;
		}
		/* 产品信息2 */
		
</style>