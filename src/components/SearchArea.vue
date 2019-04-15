<template>
  <div class="search-area" id="search-area">
  		<div class="container">
	  		<span class="logo">每日生鲜</span>
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
						<span>去购物车</span>
	  				</div>
		  		</div>
		  	</div>
	  		<div class="search-box">
	  			<form class="">
		  			<input type="" name="" placeholder="搜索商品"><button>搜索</button>
		  		</form>
		  		<p><span>大闸蟹</span>|<span>三文鱼</span>|<span>牛排</span>|<span>鳕鱼</span>|<span>车厘子</span>|<span>奇异果</span>|<span>泰国榴莲</span>|<span>云南蓝莓</span>|<span>海南贵妃芒</span></p>
	  		</div>
  		</div>
  	</div>
</template>

<script>
export default {
	name: 'Product',
	data () {
		return {
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
			]
		}
	},
	computed: {
		shoppingCartNumber: function () {
			var count = 0;
			for (var i = 0; i < this.myShoppingCart.length; i++) {
				count += this.myShoppingCart[i].number;
			}
			return count;
		},
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
		/*width: 15%;*/
		/*display: inline-block;*/
		font-size: 57px;
		color: #12ab34;
		float: left;
		padding-left: 0px;
		/*border: 1px solid blue;*/
		/*font-weight: bold;*/
		font-family: WenYueSXSQiuYiNongTi;/*wenyuexinqingnian;*/
		/*text-shadow: 2px 2px 5px #222;*/
	}
	/* 搜索框 */
	.search-area .search-box {
		position: absolute;
		width: 600px;
		left: 300px;
		/*top: 0;*/
		/*border: 1px solid red;*/
	}
	/*display: inline-block;*/
	.search-area .search-box>p {
		font-size: 13px;
		height: 20px;
		line-height: 20px;
		position: absolute;
		bottom: 10px;
		/*background-color: red;*/
		margin-left: -8px;
	}
	.search-area .search-box>p>span {
		margin: 0 8px;
	}	
	.search-area .search-box>p>span:hover {
		cursor: pointer;
		color: #129934;
	}
	.search-area .search-box input {
		width: 80%;
		height: 30px;
		outline: none;
		border: 1px solid #12ab34;
		vertical-align: 10px;
		padding: 0 10px;
	}
	.search-area .search-box button {
		width: 16%;
		height: 32px;
		border: none;
		background-color: #12ab34;
		vertical-align: 8px;
		color: #fff;
		font-size: 16px;
		outline: none;
	}
	.search-area .search-box button:hover {
		cursor: pointer;
	}
	/* 购物车 */
	.search-area .shopping-cart {
		position: absolute;
		top: 15px;
		right: 80px;
		display: inline-block;
		border: 1px solid #999;
		height: 30px;
		width: 150px;
		line-height: 30px;
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
		z-index: 2;
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
		z-index: 1;
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