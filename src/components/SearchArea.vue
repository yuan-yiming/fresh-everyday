<template>
  <div class="search-area" id="search-area">
  		<div class="container">
	  		<router-link class="logo" :to="{name: 'Home'}" tag="span"></router-link>
	  		<div class="shopping-cart" @mouseenter="showShoppingCartList" @mouseleave="showShoppingCartList">
	  			<div class="shopping-cart-header">
	  				<span>我的购物车</span>
		  			<span class="shopping-cart-icon"></span>
			  		<span class="shopping-cart-number">{{ shoppingCartNumber }}</span>
	  			</div>
		  		<div class="shopping-cart-list" v-show="isShowShoppingCartList">
		  			<p v-if="myShoppingCart.length == 0" class="has-nothing">
		  				亲，您当前的购物车没有商品呢~
		  			</p>
	  				<ul>
	  					<li v-for="product in myShoppingCart" class="product-item">
	  						<img :src="productImageURL(product.id)">
	  						<div class="product-info">{{ product.name }}</div>
	  						<div class="product-number">
	  							<p><span class="price">￥{{ product.price }}</span> × {{ product.number }}</p>
	  							<p class="delete-product">删除</p>
	  						</div>
	  					</li>
	  				</ul>
	  				<div class="total">
						<span>共{{ shoppingCartNumber }}件商品</span>
						<span>共计￥{{ totalMoneyOfShoppingCart }}</span>
						<span @click="goToShoppindCart">去购物车</span>
	  				</div>
		  		</div>
		  	</div>
	  		<div class="search-box">
	  			<form class="search">
		  			<label class=""><input type="text" name="" placeholder="搜索 进口脐橙" value="西班牙 进口脐橙"><span>搜索</span></label>
		  		</form>
		  		<p class="hot-search">
		  			<router-link v-for="id in hotSearchIds" :to="{name: 'ProductDetails', params: {id:id}}" tag="span">
		  				{{ getProductInfo(id).name }}
		  			</router-link>
		  		</p>
	  		</div>
  		</div>
  	</div>
</template>

<script>
import products from '../../static/products.js'

export default {
	name: 'Product',
	data () {
		return {
			allProducts: products,
			isShowShoppingCartList: false,
			// 购物车
			myShoppingCart: [
				{
					id: 1,
					name: '京东海外直采 越南巴沙鱼柳（去皮） BAP认证 450g 2片/袋 原装进口 火锅烧烤食材',
					price: 11122.91,
					number: 1,
					imgUrl: '#',
				},
				{
					id: 2,
					name: '【云南褚柑正品 产地直发】现摘云南褚时健实建禇柑 5KG礼盒装 新鲜柑橘 生鲜水果哀牢山沃柑非褚橙 一级M10斤装',
					price: 1234.80,
					number: 3,
					imgUrl: '#',
				},
				{
					id: 1,
					name: '京东海外直采 越南巴沙鱼柳（去皮） BAP认证 450g 2片/袋 原装进口 火锅烧烤食材',
					price: 22.90,
					number: 1,
					imgUrl: '#',
				},
				{
					id: 2,
					name: '【云南褚柑正品 产地直发】现摘云南褚时健实建禇柑 5KG礼盒装 新鲜柑橘 生鲜水果哀牢山沃柑非褚橙 一级M10斤装',
					price: 12.80,
					number: 3,
					imgUrl: '#',
				},{
					id: 1,
					name: '京东海外直采 越南巴沙鱼柳（去皮） BAP认证 450g 2片/袋 原装进口 火锅烧烤食材',
					price: 22.90,
					number: 1,
					imgUrl: '#',
				},
			],
			hotSearchIds: [3, 4, 6, 13, 15, 22, 27, 30, 33, 39, 42, 44],
		}
	},
	computed: {
		// 购物车总商品数量
		shoppingCartNumber: function () {
			var count = 0;
			for (var i = 0; i < this.myShoppingCart.length; i++) {
				count += this.myShoppingCart[i].number;
			}
			return count;
		},
		// 购物车总额
		totalMoneyOfShoppingCart: function () {
			var count = 0;
			for (var i = 0; i < this.myShoppingCart.length; i++) {
				count += this.myShoppingCart[i].number * this.myShoppingCart[i].price;
			}
			return (new Number(count)).toFixed(2);
		},
	},
	methods: {
		showShoppingCartList: function () {
	  		this.isShowShoppingCartList = !this.isShowShoppingCartList;
	  	},
	  	productImageURL: function (id) {
			// require用法
			return require('../assets/product-img/' + id + '.jpg');
		},
		goToShoppindCart: function () {
			this.$router.push({path: '/user-center/shopping-cart'});
		},
		getProductInfo: function (id) {
			return this.allProducts[id-1];
		},
	},
};
</script>

<style scoped>
	 /*搜索区域 */
	.search-area {
		width: 100%;
		height: 120px;
		line-height: 80px;
		background-color: #fff;
		/*text-align: center;*/
	}
	.search-area .container {
		width: 1200px;
		margin: 0 auto;
		position: relative;
		/*background-color: red;*/
	}
	.search-area .logo {
		position: absolute;
		height: 49px;
		width: 180px;
		top: 15px;
		background: url('../assets/main-view/logo1.png') no-repeat;
		background-size: 180px 49px;
		cursor: pointer;
		/*width: 15%;*/
		/*display: inline-block;*/
		/*font-size: 57px;
		color: #12ab34;
		float: left;
		padding-left: 0px;*/
		/*border: 1px solid blue;*/
		/*font-weight: bold;*/
		/*font-family: WenYueSXSQiuYiNongTi;*/
		/*text-shadow: 2px 2px 5px #222;*/
	}
	/* 搜索框区域 */
	.search-area .search-box {
		position: absolute;
		width: 600px;
		height: 80px;
		left: 300px;
		/*top: 0;*/
		/*border: 1px solid red;*/
	}
	/* 热搜 */
	.search-area .search-box .hot-search {
		font-size: 13px;
		color: #999;
		height: 20px;
		line-height: 20px;
		position: absolute;
		bottom: 3px;
		/*background-color: red;*/
		margin-left: 0px;
	}
	.search-area .search-box .hot-search span {
		margin: 0 3px;
	}	
	.search-area .search-box .hot-search span:hover {
		cursor: pointer;
		color: #129934;
	}
	/* 搜索框 */
	.search-area .search-box .search input {
		position: absolute;
		top: 20px;
		width: 480px;
		height: 34px;
		outline: none;
		box-sizing: border-box;
		border: 1px solid #12ab34;
		padding: 0 10px;
	}
	.search-area .search-box .search span {
		position: absolute;
		left: 480px;
		top: 20px;
		width: 90px;
		height: 34px;
		line-height: 34px;
		text-align: center;
		border: none;
		background-color: #12ab34;
		color: #fff;
		font-size: 16px;
		outline: none;
		cursor: pointer;
	}
	/* 购物车 */
	.search-area .shopping-cart {
		position: absolute;
		top: 20px;
		right: 80px;
		display: inline-block;
		border: 1px solid #999;
		height: 34px;
		width: 150px;
		line-height: 34px;
		/*padding: 0 20px;*/
		
	}
	.search-area .shopping-cart .shopping-cart-header {
		position: absolute;
		top: 0.5px;
		right: 0.5px;
		width: 149px;
		height: 30px;
		/*background-color: red;*/
		/*border: 1px solid #999;*/
	}
	.search-area .shopping-cart:hover .shopping-cart-header {
		background-color: #fff;
		border-bottom: 1px solid #fff;
		z-index: 20;
	}
	.search-area .shopping-cart .shopping-cart-header span:first-child {
		margin-left: 20px;
		color: #129934;
	}
	.search-area .shopping-cart .shopping-cart-icon {
		display: inline-block;
		width: 22.2px;
		height: 19.2px;
		/*background-color: red;*/
		/*margin-top: */
		position: absolute;
		top: 5px;
		right: 20px;
		background:  url('../assets/app-header/icons/shopping-cart.png') no-repeat;
		background-size: 22.2px 19.2px;
		background-position: 0 0;
	}
	.search-area .shopping-cart .shopping-cart-number {
		display: inline-block;
		width: 20px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		/*background-color: red;*/
		font-size: 10px;
		font-weight: bold;
		color: #12ab34;
		position: absolute;
		top: 0px;
		right: 19px;
	}
	.search-area .shopping-cart .shopping-cart-list {
		/*box-sizing: border-box;*/
		position: absolute;
		top: 30px;
		right: -1px;
		width: 460px;
		background-color: #fff;
		border: 1px solid #999;
		font-size: 14px;
		z-index: 10;
		/*background-color: red;*/
	}
	.search-area .shopping-cart .shopping-cart-list ul {
		min-height: 100px;
		max-height: 320px;
		overflow: auto;
	}
	.search-area .shopping-cart .shopping-cart-list .product-item {
		box-sizing: border-box;
		height: 80px;
		/*width: */
		padding: 5px;
		border-bottom: 1px solid #eee;
		position: relative;
	}
	.search-area .shopping-cart .shopping-cart-list .product-item:hover {
		background-color: #eee;
	}
	.search-area .shopping-cart .shopping-cart-list .product-item img {
		box-sizing: border-box;
		width: 70px;
		height: 70px;
		border: 1px solid #eee;
	}
	.search-area .shopping-cart .shopping-cart-list .product-item .product-info {
		position: absolute;
		top: 5px;
		right: 5px;
		margin: 5px 95px;
		/*margin-bottom: 5px;*/
		height: 60px;
		line-height: 20px;
		/*background-color: red;*/
		overflow: hidden;
	}
	.search-area .shopping-cart .shopping-cart-list .product-item .product-number {
		position: absolute;
		top: 10px;
		right: 10px;
		height: 20px;
		line-height: 20px;
		/*background-color: red;*/
	}
	.search-area .shopping-cart .shopping-cart-list .product-item .product-number .price {
		color: red;
	}
	.search-area .shopping-cart .shopping-cart-list .product-item .delete-product {
		float: right;
		margin-right: 10px;
		/*font-size: 14px;*/
	}
	.search-area .shopping-cart .shopping-cart-list .product-item .delete-product:hover {
		cursor: pointer;
		color: red;
	}
	.search-area .shopping-cart .shopping-cart-list .total {
		padding: 0 20px;
		height: 40px;
		line-height: 40px;
		background-color: #eee;
		/*position: absolute;*/
		bottom: 0;
		left: 0;
	}
	.search-area .shopping-cart .shopping-cart-list .total span {
		margin: 0 10px;
	}
	.search-area .shopping-cart .shopping-cart-list .total span:nth-child(3) {
		float: right;
		display: inline-block;
		background-color: #12ab34;
		height: 20px;
		line-height: 20px;
		padding: 5px 10px;
		/*padding: 5px;*/
		color: #fff;
		font-weight: bold;
		border-radius: 2px;
		margin: 5px 20px;
	}
	.search-area .shopping-cart .shopping-cart-list .total span:nth-child(3):hover {
		cursor: pointer;
	}
	.search-area .shopping-cart .shopping-cart-list .has-nothing {
		text-align: center;
		margin-top: 35px;
		/*background-color: red;*/
	}
</style>