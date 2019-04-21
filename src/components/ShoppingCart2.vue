<template>
  <div class="shopping-cart">
  	<user-center-temp 
	  	:active-index='activeIndex'
	  	:item-category="messageCategory"
  		:title="'我的购物车'"
  		@change-active-index="changeActiveIndex">
  		<div class="products">
  			<!-- 购物车列表的头部信息栏 -->
			<div class="header">
				<div class="header-container">
					<label class="all-selected-title header-title">
						<input type="checkbox" name=""><span>全选</span>
					</label>
					<span class="product-name-title header-title">商品</span>
					<span class="product-price-title header-title">单价</span>
					<span class="product-num-title header-title">数量</span>
					<span class="subtotal-title header-title">小计</span>
					<span class="operation-title header-title">操作</span>
				</div>
			</div>
			<!-- 购物车中每个商家的列表 -->
			<ul class="shop-list">
				<!-- 以商家为列表，同一商家的商品放进同一个商家li里面 -->
				<li v-for="shop in shops">
					<!-- 商家信息 -->
					<div class="shop-info">
						<input type="checkbox" name="">
						<span class="shop-title">{{ shop.title }}</span>
						<span v-if="shop.name" class="shop-name">{{ shop.name }}</span>
					</div>
					<!-- 每个商家内的商品列表 -->
					<ul class="product-list">
						<li v-for="product in shop.products" 
							v-if="activeIndex ? product.price < product.originalPrice : product.price">
							<input type="checkbox" name="">
							<span class="product-area">
								<img :src="getProductImg(product.imgName)" class="product-img">
								<span class="product-name">{{ product.name }}</span>
							</span>
							<span class="product-price info"
								:style="{'line-height': calReducedMoney(product)>0 ? '20px' : '40px'}">
								￥{{ product.price.toFixed(2) }}
								<br v-if="calReducedMoney(product)>0">
								<span class="reduced-money"
									:title="'比加入购物车时降价'+calReducedMoney(product)+'元'"
									v-if="calReducedMoney(product)>0">
									￥{{ calReducedMoney(product) }}
									<span class="down-arrow">↓</span>
								</span>
							</span>
							<span class="product-num info">
								<span class="add" @click="addProductNum(product, false)">-</span>
								<input type="text" name="" class="number" 
									v-model="product.num">
								<span class="subtract" @click="addProductNum(product, true)">＋</span>
							</span>
							<span class="subtotal info">
								￥{{ (product.price*product.num).toFixed(2) }}
							</span>
							<span class="operation info">
								<span class="delete">删除</span></br>
								<span class="add-to-focus">移到我的关注</span>
							</span>
						</li>
					</ul>
				</li>
			</ul>
			<summary-bar :width="'940px'">
			</summary-bar>
		</div>
		<!-- 汇总栏 -->
		<div class="summary-container" v-show="scrollBottom > 340">
			<summary-bar :width="'1200px'">
			</summary-bar>
		</div>
  	</user-center-temp>
  </div>
</template>

<script>
import UserCenterTemp from '@/components/UserCenterTemp'
import SummaryBar from '@/components/SummaryBar'

export default {
  name: 'ShoppingCart',
  components: {
  	'user-center-temp': UserCenterTemp,
  	'summary-bar': SummaryBar,
  },
  data () {
    return {
    	activeIndex: 0,
    	scrollBottom: 0,
    	messageCategory: [
    		{
    			index: 0,
    			item: '全部商品',
    			showNum: 0, 
    		},
    		{
    			index: 1,
    			item: '降价商品',
    			showNum: 0,
    		},
    	],
    	shops: [
    		{
    			index: 0,
    			name: '和平茶叶专营店',
    			title: '优选好店',
    			products: [
    				{
    					index: 0,
    					name: '龙井茶 首件28元买2送1同款再送杯125g茶叶2019新茶 龙井绿茶 浙江龙井 绿茶礼盒罐装',
    					price: 40.00,
    					originalPrice: 40.00,
    					num: 1,
    					imgName: '0-0.jpg',
    				},
    				{
    					index: 1,
    					name: '碧螺春 首件28元买2送1同款再送杯 云雾 绿茶 2019新茶 罐装明前新茶春茶茶叶礼盒装',
    					price: 38.00,
    					originalPrice: 40.00,
    					num: 2,
    					imgName: '0-1.jpg',
    				},
    				{
    					index: 2,
    					name: '买2送1同款 蒲公英茶 蒲公英根叶茶炒制长白山婆婆丁茶花草茶可搭桑叶茶丁香茶胎菊玫瑰花茶祛湿降火茶',
    					price: 19.90,
    					originalPrice: 21.90,
    					num: 2,
    					imgName: '0-2.jpg',
    				},
    				{
    					index: 3,
    					name: '【买2送2同款再送杯】红豆薏米芡实茶祛湿茶200g养生茶苦荞大麦蒲公英根芡实薏仁茶除去湿气湿热茶',
    					price: 29.90,
    					originalPrice: 32.00,
    					num: 1,
    					imgName: '0-3.jpg',
    				},
    			],
    		},
    		{
    			index: 1,
    			name: '麦斯威尔旗舰店',
    			title: '旗舰店',
    			products: [
    				{
    					index: 0,
    					name: '麦斯威尔原味速溶咖啡100条盒装 （1.3KG/盒）（新老包装交替发货）',
    					price: 99.00,
    					originalPrice: 99.00,
    					num: 1,
    					imgName: '1-0.jpg',
    				},
    				{
    					index: 1,
    					name: '麦斯威尔 英国进口 速溶香醇咖啡500g/罐 可冲277杯（新老包装交替发货）',
    					price: 69.90,
    					originalPrice: 79.00,
    					num: 2,
    					imgName: '1-1.jpg',
    				},
    			],
    		},
    		{
    			index: 2,
    			title: '自营店',
    			name: '每日优鲜自营店',
    			products: [
    				{
    					index: 0,
    					name: '豪士乳酸菌小口袋面包网红小吃蛋糕心里软680g*2箱 早餐零食夹心蛋糕零食品 680g*2箱',
    					price: 50.80,
    					originalPrice: 52.00,
    					num: 1,
    					imgName: '2-0.jpg',
    				},
    				{
    					index: 1,
    					name: '越南进口 Lipo原味鸡蛋面包干300g*2袋 奶香味饼干糕点早餐零食 原味+巧克力味',
    					price: 28.80,
    					originalPrice: 28.80,
    					num: 3,
    					imgName: '2-1.jpg',
    				},
    				{
    					index: 2,
    					name: '天喔（ten wow） 天喔茶庄蜂蜜柚子茶饮料250ml*16盒整箱 上海特产果味茶饮品饮料 250ml*16盒',
    					price: 29.00,
    					originalPrice: 29.00,
    					num: 1,
    					imgName: '2-2.jpg',
    				},
    			],
    		},	
    	],
    }
  },
  methods: {
  	changeActiveIndex: function (index) {
  		this.activeIndex = index;
  	},
  	getProductImg: function (name) {
  		return require('../assets/user-center/shopping-cart/' + name);
  	},
  	// 加减商品数量
  	addProductNum: function (product, bool) {
  		if (bool) {
  			product.num ++;
  		} else if (product.num > 1) {
  			product.num --;
  		}
  	},
  	// 计算降价金额
  	calReducedMoney: function (obj) {
  		return (obj.originalPrice - obj.price).toFixed(2);
  	},
  	// 计算滚动条移动条下方与屏幕地面的距离；
  	calScrollBottom: function () {
  		var scrollTop = document.documentElement.scrollTop,
	  		// 滚动条与顶部的距离，可理解为滚动条移动条部分的顶部与屏幕顶部之间的距离；
	  		clientHeight = document.documentElement.clientHeight,
	  		// 屏幕可视高度，可理解为滚动条移动条部分的长度；
	  		scrollHeight = document.documentElement.scrollHeight;
	  		// 滚动条可滚动的总高度，可理解为整条滚动条的长度；
	  	this.scrollBottom = scrollHeight - clientHeight - scrollTop;
  	},
  	// 自动检测滚动条下拉距离，隐藏金额汇总栏
  	autoHideSummaryBar: function () {
  		var calScrollBottom = this.calScrollBottom;
  		var fixHeaderAgain = this.fixHeaderAgain;
	  	window.onscroll = function () {
	  		fixHeaderAgain();
	  		calScrollBottom();
	  	};
  	},
  	// 解决与固定表头的事件冲突
  	fixHeaderAgain: function () {
  		this.$emit('fix-header');
  	},
  },
  mounted () {
  	this.calScrollBottom();
  	this.autoHideSummaryBar();
  }
};
</script>

<style scoped>
	.shopping-cart .products {
		min-height: 300px;
		/*background: */
		padding-bottom: 10px;
	}
	.shopping-cart .products input {
		width: 14px;
		height: 14px;
		outline: none;
	}
	/* 购物车列表头部栏 */
	.shopping-cart .products .header {
		height: 40px;
		padding-left: 20px;
		margin: 20px;
		background: #eee;
		font-size: 13px;
	}
	.shopping-cart .products .header .header-container {
		position: relative;
		height: 100%;
	}
	.shopping-cart .products .shop-list>li:last-child {
	}
	/* 统一设置样式 */
	.shopping-cart .products .header .header-title,
	.shopping-cart .products .shop-list>li .product-list>li .info {
		position: absolute;
		width: 80px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
		/*border: 1px solid red;*/
		box-sizing: border-box;
		background: transparent;
	}
	/* '商品' */
	.shopping-cart .products .header .product-name-title {
		left: 180px;
	}
	.shopping-cart .products .header .product-price-title,
	.shopping-cart .products .shop-list>li .product-list>li .product-price {
		left: 500px;
	}
	.shopping-cart .products .header .product-num-title,
	.shopping-cart .products .shop-list>li .product-list>li .product-num {
		left: 600px;
	}
	.shopping-cart .products .header .subtotal-title,
	.shopping-cart .products .shop-list>li .product-list>li .subtotal {
		left: 700px;
	}
	.shopping-cart .products .header .operation-title,
	.shopping-cart .products .shop-list>li .product-list>li .operation {
		left: 800px;
	}
	.shopping-cart .products .shop-list>li .product-list>li .info {
		top: 30px;
	}
	/* 统一设置样式 结束 */

	/* 全选checkbox */
	.shopping-cart .products .header .all-selected-title {
		text-align: left;
	}
	.shopping-cart .products .header .all-selected-title span {
		vertical-align: 2.5px;
		margin-left: 10px;
	}
	
	/*  */
	/* 商家列表 */
	.shopping-cart .products .shop-list>li {
		margin: 20px;
	}

	/* 店家信息 */
	.shopping-cart .products .shop-list>li .shop-info {
		font-size: 12px;
		height: 30px;
		line-height: 30px;
		/*font-weight: bold;*/
		margin-left: 20px;
	}
	.shopping-cart .products .shop-list>li .shop-info>* {
		margin-right: 10px;
	}
	.shopping-cart .products .shop-list>li .shop-info input {
		vertical-align: -2px;
	}
	/* 店铺头衔 */
	.shopping-cart .products .shop-list>li .shop-info .shop-title {
		background: #ef1234;
		color: #fff;
		vertical-align: 1px;
		font-size: 12px;
		padding: 2px 5px;
		border-radius: 2px;
		box-shadow: 0px 2px 5px #666;
	}
	/* 店铺名称 */
	.shopping-cart .products .shop-list>li .shop-info .shop-name {
		font-weight: bold;
		font-size: 14px;
		color: #666;
	}
	/* 商品列表 */
	.shopping-cart .products .shop-list>li .product-list {
		box-sizing: border-box;
		border: 1px solid #ddd;
		padding: 20px 0;
	}
	.shopping-cart .products .shop-list>li .product-list>li {
		height: 100px;
		box-sizing: border-box;
		border-top: 1px dotted #eee;
		margin: 0 20px;
		position: relative;
		/*background: #aaa;*/
		/*margin: ;*/
	}
	.shopping-cart .products .shop-list>li .product-list>li:last-child {
		border-bottom: 1px dotted #eee;
	}
	/* 单件商品checkbox */
	.shopping-cart .products .shop-list>li .product-list>li input {
		position: absolute;
		top: 20px;
		/*left: 5px;*/
	}
	/* 商品区域：包括图片和商品名 */
	.shopping-cart .products .shop-list>li .product-list>li .product-area {
		position: absolute;
		width: 370px;
		height: 60px;
		top: 20px;
		left: 30px;
		cursor: pointer;
	}
	/* 商品图片 */
	.shopping-cart .products .shop-list>li .product-list>li img {
		position: absolute;
		width: 60px;
		height: 60px;
		box-sizing: border-box;
		border: 0.8px solid #ddd;
	}
	/* 商品名 */
	.shopping-cart .products .shop-list>li .product-list>li .product-name {
		position: absolute;
		width: 300px;
		height: 40px;
		line-height: 20px;
		font-size: 13px;
		overflow: hidden;
		top: 10px;
		left: 70px;
	}
	.shopping-cart .products .shop-list>li .product-list>li .product-area:hover .product-name {
		color: #ef1234;
	}
	.shopping-cart .products .shop-list>li .product-list>li .info {
		font-size: 12px;
	}
	/* 单价 */
	.shopping-cart .products .shop-list>li .product-list>li .product-price {
		line-height: 40px;
	}
	/*  降价金额*/
	.shopping-cart .products .shop-list>li .product-list>li .product-price .reduced-money {
		border: 1px solid rgba(239, 18, 52,0.3);
		box-sizing: border-box;
		color: #ef1234;
		border-radius: 1px;
		padding: 2px 2px;
	}
	.shopping-cart .products .shop-list>li .product-list>li .product-price .reduced-money .down-arrow {
		font-size: 14px;
	}
	/* 数量 */
	.shopping-cart .products .shop-list>li .product-list>li .product-num>* {
		display: inline-block;
		position: absolute;
		top: 10px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		box-sizing: border-box;
		border: 1px solid #ddd;  
	}
	.shopping-cart .products .shop-list>li .product-list>li .product-num .add {
		width: 20px;
		left: 0;
		cursor: pointer;
	}
	.shopping-cart .products .shop-list>li .product-list>li .product-num .subtract {
		width: 20px;
		right: 0;
		cursor: pointer;
	}
	.shopping-cart .products .shop-list>li .product-list>li .product-num .number {
		width: 40px;
		left: 20px;
		border-left: none;
		border-right: none;
		font-size: 12px;
	}
	/* 小计 */
	.shopping-cart .products .shop-list>li .product-list>li .subtotal {
		font-weight: bold;
	}
	/* 操作 */
	.shopping-cart .products .shop-list>li .product-list>li .operation {
		line-height: 20px;
		text-align: left;
		left: 830px;
	}
	.shopping-cart .products .shop-list>li .product-list>li .operation span:hover {
		color: #ef1234;
		cursor: pointer;
	}
	/* 汇总栏 */
	.shopping-cart .summary-container {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		box-shadow: 0px -1px 5px rgba(0,0,0,0.3);
		z-index: 10;
	}
</style>