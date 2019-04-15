<template>
  <div class="product-list">
  	<div class="list-title">
  		<p v-if="loweringPriceList.length">
  			<span class="item-name">{{ item }}</span> 中共有{{ loweringPriceList.length }}件降价商品。
  			<!-- 筛选商品 -->
  			<span class="all-product selector-btn"
	  			:class="{active: isSelectedAll}"
  				@click="showingAllProduct(true)">全部商品</span>
  			<span class="only-lower-price selector-btn"
	  			:class="{active: !isSelectedAll}"
  				@click="showingAllProduct(false)">降价商品</span></p>
  		<p v-if="allProductList.length == 0"><span class="item-name">{{ item }}</span> 中暂时没有内容！</p>
  	</div>
  	<!-- 展示的商品列表 -->
  	<ul class="list-content">
  		<li v-for="product in showingProductList">
			<img :src="getProductImgPath(product.imageName)">
			<span class="lowering-price" 
				v-show="calLoweringPrice(product) > 0">
				<span class="lowering-price-icon">降</span> 
				<span class="lowering-price-text" 
					:class="{'slide-down': product.isSlideDown, 'slide-up': product.isSlideDown === false}">
					比{{ item == '我的收藏夹' ? '收藏' : '关注' }}时降价
					￥{{ calLoweringPrice(product) }}
				</span>
			</span>
			<p class="name">{{ product.name }}</p>
			<p class="price">￥{{ product.currentPrice.toFixed(2) }}</p>
			<p class="comments"><span>{{ product.commentNum }}人评价</span></p>
			<p class="favorable-rate">{{ product.favorableRate }}%好评</p>
			<p class="remind-when-lowering-price">降价通知</p>
			<p class="add-to-shopping-cart"><span></span>加入购物车</p>
			<p class="unfollow">取消{{ item == '我的收藏夹' ? '收藏' : '关注' }}</p>
  		</li>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'FocusProductListBase',
  props: ['item','allProductList'],
  data () {
    return {
    	// isSlideDown: false,
    	// 默认选择降价商品
    	isSelectedAll: true,
    	showingProductList: [],
    	loweringPriceList: null,
    }
  },
  methods: {
  	getProductImgPath: function (name) {
  		return require('../assets/user-center/my-focus/' + name);
  	},
  	// 获取降价商品
  	getLoweringPriceList: function (originalProductList) {
  		var loweringPriceList = [];
		for (var i = 0; i < originalProductList.length; i++) {
			if (originalProductList[i].currentPrice < originalProductList[i].originalPrice) {
				loweringPriceList.push(originalProductList[i]);
			}
		}
		return loweringPriceList;
  	},
  	// 是否展示全部商品
  	showingAllProduct: function (bool) {
  		this.isSelectedAll = bool;
  		if (bool) {
  			this.showingProductList = this.allProductList;
  		} else {
  			this.showingProductList = this.loweringPriceList;
  		}
	},
	// 计算降价金额
	calLoweringPrice: function (product) {
		return (product.originalPrice - product.currentPrice).toFixed(2);
	},
  },
  beforeMount () {
  	this.loweringPriceList = this.getLoweringPriceList(this.allProductList);
  	this.showingProductList = this.allProductList;
  },
};
</script>

<style scoped>
	/* 组件的框架 */
	.product-list {
		
	}
	/* 标题 */
	.product-list .list-title {
		/*width: 980px;*/
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		margin: 20px;
		/*box-sizing: border-box;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;*/
		background: #eee;
		font-size: 13px;
		position: relative;
	}
	.product-list .list-title .item-name {
		font-weight: bold;
	}
	.product-list .list-title .selector-btn {
		margin-left: 20px;
		/*border: 1px solid #ef1234;*/
		padding: 5px 10px;
		border-radius: 1px;
		font-size: 12px;
		color: #ef1234;
	}
	.product-list .list-title .selector-btn:hover {
		cursor: pointer;
		font-weight: bold;
	}
	.product-list .list-title .active {
		background: #ef1234;
		color: #fff;
	}
	.product-list .list-title .active:hover {
		font-weight: normal;
	}
	/* 内容 */
	.product-list .list-content {
		overflow: hidden;
		margin-left: 20px;
	}
	/* 每件商品 */
	.product-list .list-content>li {
		width: 230px;
		height: 350px;
		float: left;
		position: relative;
		margin: 0 20px 20px 0;
		box-sizing: border-box;
		border: 1px solid #ddd;
		overflow: hidden;
	}
	.product-list .list-content>li:nth-child(4n+0) {
		margin-right: 0;
	}
	.product-list .list-content>li img {
		width: 170px;
		height: 170px;
		position: absolute;
		top: 20px;
		left: 30px;
	}
	/* 降价标记 */
	.product-list .list-content>li .lowering-price {
		text-align: center;
	}
	/* 降价标记 */
	.product-list .list-content>li .lowering-price-icon {
		position: absolute;
		left: 10px;
		top: 4px;
		width: 25px;
		height: 25px;
		line-height: 25px;
		font-size: 12px;
		color: #fff;
		font-weight: bold;
		background: #ef1234;
		border-radius: 50%;
		box-shadow: 2px 2px 10px #999;
	}
	/* 悬浮商品，提示下沉 */
	.product-list .list-content>li .lowering-price-text {
		height: 30px;
		line-height: 30px;
		width: 100%;
		/*border-bottom: 1px solid #ddd;*/
		box-shadow: 2px 2px 10px #000;
		background: #ef1234;
		color: #fff;
		font-size: 14px;
		font-weight: bold;
		position: absolute;
		top: -40px;
		left: 0px;
		transition: top 0.3s;
	}
	.product-list .list-content>li:hover .lowering-price-text {
		top: 0px;
	}
	.product-list .list-content>li .name,
	.product-list .list-content>li .price {
		position: absolute;
		top: 210px;
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		text-align: center;
		white-space: nowrap;
		text-overflow:ellipsis;
		overflow: hidden;
		width: 200px;
		padding: 0 15px;
		/*background: red;*/
	}
	.product-list .list-content>li .price {
		top: 230px;
		font-size: 14px;
		font-weight: bold;
	}
	/*  */
	.product-list .list-content>li p:nth-child(n+5) {
		position: absolute;
		width: 50%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		box-sizing: border-box;
		border-top: 1px solid #ddd;
		font-size: 12px;
	}
	.product-list .list-content>li p:nth-child(n+5):hover {
		color: #ef1234;
		cursor: pointer;
	}
	.product-list .list-content>li p.comments {
		line-height: 14px;
		bottom: 30px;
		color: #999;
	}
	.product-list .list-content>li p.comments>span {
		/*height:*/
		margin-top: 8px;
		width: 100%;
		display: inline-block;
		border-right: 1px solid #ddd;
		box-sizing: border-box;
	}
	.product-list .list-content>li .favorable-rate {
		color: #999;
		bottom: 30px;
		right: 0;
	}
	.product-list .list-content>li p:nth-child(n+7) {
		width: 33.3%;
		background: #eee;
		color: #777;
		bottom: 0;
	}
	.product-list .list-content>li p:nth-child(n+7):hover {
		color: #fff;
		background: #ef1234;
		border-color: #ef1234;
	}
	.product-list .list-content>li .unfollow {
		right: 0;
	}
	.product-list .list-content>li .add-to-shopping-cart {
		border-right: 1px solid #ddd;
		left: 33.3%;
	}
	.product-list .list-content>li .remind-when-lowering-price {
		border-right: 1px solid #ddd;
	}
</style>