<template>
  <div class="my-order">
  	<div class="title common-title">
  		<p>我的订单</p>
  	</div>
  	<div class="orders">
		<ul class="header-bar">
			<li v-for="cate in orderCategory" 
				:class="{active: cate.index == activeIndex}"
				@click="selectOrderItem(cate.index)">
				<span class="order-item">{{ cate.item }}
				</span>
				<span class="order-num" 
					v-if="getOrderCategoryNum(cate.index)">
					{{ getOrderCategoryNum(cate.index) }}
				</span>
			</li>
		</ul>
		<!-- 订单列表 -->
		<ul class="order-list">
			<li v-for="order in filterOrderCategory(orders)">
				<!-- 订单标题行 -->
				<div class="order-title">
					<span>日期：{{ getOrderDate(order.date) }}</span>
					<span>订单号：{{ order.orderNum }}</span>
					<span>收货人</span>
					<span>金额</span>
					<span>状态</span>
					<span>操作</span>
				</div>
				<!-- 订单内容 -->
				<div class="order-content">
					<!-- 订单内商品列表 -->
					<ul class="product-list">
						<li v-for="product in order.products" class="product-info">
							<img :src="getProductImgPath(product.imgName)" class="product-img">
							<span class="product-name">{{ product.name }}</span>
							<span class="product-num">×{{ product.num }}</span>
						</li>
					</ul>
					<div class="order-info" 
						:style="{height: getOrderInfoHeight(order)}"
						:class="{'waitting-for-payment': order.status == 1,
								'waitting-for-product': order.status == 2,
								'order-is-finished': order.status == 3}">
						<span class="receiver">
							{{ order.receiver }}
						</span>
						<span class="total-money">
							总额 ￥{{ getOrderTotalMoney(order.products) }}
						</span>
						<span class="order-status" >
							{{ getOrderStatus(order.status) }}
						</span>
						<span class="order-operation">
							<span>{{ getOrderOperation(order.status) }}</span>
						</span>
					</div>
				</div>
			</li>
		</ul>
		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'MyOrder',
  data () {
    return {
    	activeIndex: 0,
    	orderCategory: [
    		{
    			index: 0,
    			item: '所有订单',
    		},
    		{
    			index: 1,
    			item: '待付款',
    		},
    		{
    			index: 2,
    			item: '待收货',
    		},
    		{
    			index: 3,
    			item: '待评价',
    		},
    	],
    	orders: [
			{
				index: 0,
				// status: 1代表待付款，2代表待收货，3代表待评价
				status: 1,  
				// date由数组内有6个数字表示
				date: [2019,4,11,16,27,17],
				orderNum: 46163861496,
				receiver: '袁大明',
				// 一个订单内可以包含多个产品
				products: [
					{
						index: 0,
						name: '豪士口袋面包菠萝夹心果粒吐司750g 早餐食品三明治蛋糕饼干',
						imgName: '0-0.jpg',
						num: 2,
						price: 31.00,
					},
					{
						index: 1,
						name: '港荣蒸蛋糕 饼干蛋糕 手撕面包口袋吐司 营养早餐食品 休闲零食小吃 奶香整箱900g',
						imgName: '0-1.jpg',
						num: 1,
						price: 39.90,
					},
				],
			},
			{
				index: 1,
				status: 2,  
				date: [2019,4,11,16,27,17],
				orderNum: 51861631496,
				receiver: '袁大明',
				products: [
					{
						index: 0,
						name: '绿鲜知 圣女果 小番茄 樱桃番茄约500g 新鲜蔬菜',
						imgName: '1-0.jpg',
						num: 1,
						price: 9.90,
					},
					{
						index: 1,
						name: '绿鲜知 水果玉米 黄白粒玉米 约1kg 新鲜蔬菜',
						imgName: '1-1.jpg',
						num: 2,
						price: 29.90,
					},
				],
			},
			{
				index: 2,
				status: 3,  
				date: [2019,3,10,16,27,17],
				orderNum: 24163861496,
				receiver: '袁大明',
				products: [
					{
						index: 0,
						name: '【遵义馆】贵州农家土猪肉原味香肠腊肠500g',
						imgName: '2-0.jpg',
						num: 2,
						price: 36.90,
					},
				],
			},
		],
    }
  },
  computed: {
  },
  methods: {
  	selectOrderItem: function (index) {
  		this.activeIndex = index;
  	},
  	// 获取订单分类数量
  	getOrderCategoryNum: function (index) {
  		var count = 0;
  		for (var i = 0; i < this.orders.length; i++) {
  			if (this.orders[i].status == index) {
  				count ++;
  			}
  		}
  		return count;
  	},
  	// 
  	filterOrderCategory: function (obj) {
  		var tempOrderList = [];
  		if (this.activeIndex == 0) {
  			return obj;
  		} else {
			for (var i = 0; i < obj.length; i++) {
				if (obj[i].status == this.activeIndex) {
					tempOrderList.push(obj[i]);
				}	
			}
			return tempOrderList;
  		}
  	},
  	// 将日期从数组形式转化为字符串形式
  	getOrderDate: function (date) {
  		return date[0] + '-' + date[1] + '-' + date[2] + ' ' + date[3] + ':' + date[4] + ':' + date[5];
  	},
  	getOrderTotalMoney: function (products) {
  		var count = 0;
  		for (var i = 0; i < products.length; i++) {
  			count += (products[i].price * products[i].num);
  		}
  		return count;
  	},
  	getOrderStatus: function (status) {
  		var statusStr;
  		if (status == 1) {
  			statusStr = '待付款';
  		} else if (status == 2) {
  			statusStr = '待收货';
  		} else if (status == 3) {
  			statusStr = '已完成';
  		}
  		return statusStr;
  	},
  	getOrderOperation: function (status) {
  		var operation;
  		if (status == 1) {
  			operation = '去付款';
  		} else if (status == 2) {
  			operation = '查看物流';
  		} else if (status == 3) {
  			operation = '去评价';
  		}
  		return operation;
  	},
  	getOrderInfoHeight: function (order) {
  		return order.products.length*100+'px'
  	},
  	getProductImgPath: function (imgName) {
  		return require('../assets/user-center/my-order/' + imgName);
  	},
  },
  filters: {
  	
  }
};
</script>

<style scoped>
	.my-order {
		padding: 20px 0 0 20px;
	}
	/* 1.'我的订单' 标题 */
	.my-order .title {
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		color: #222;
		padding-left: 20px;
		background: #fff;
		margin-bottom: 20px;
	}
	/* 2.订单区域 */
	.my-order .orders {
		width: 1020px;
		/*min-height: 300px;*/
		background: #fff;
		box-sizing: border-box;
	}
	/* 2.1 订单区域顶部的分类选项栏 */
	/* 直接给ul容器清除浮动即可，高度由子元素自动撑开，基本无需再设置其他属性 */
	.my-order .orders .header-bar {
		/*border: 1px solid red;*/
		margin-left: 20px;
	}
	.my-order .orders .header-bar::after {
		content: '';
		clear: both;
		display: block;
		/*height: 0px;*/
	}
	.my-order .orders .header-bar li {
		height: 50px;
		line-height: 50px;
		float: left;
		/*font-size: 18px;*/
		box-sizing: border-box;
		border-bottom: 2px solid #eee;
		color: #424242;
		position: relative;
	}
	.my-order .orders .header-bar li .order-item {
		padding: 0 20px;
		border-left: 1px solid #eee;
	}
	.my-order .orders .header-bar li:first-child .order-item {
		border-left: none;
	}
	.my-order .orders .header-bar li:hover {
		color: #ef1234;
		cursor: pointer;
	}
	.my-order .orders .header-bar li.active {
		color: #ef1234;
		border-bottom: 2px solid #ef1234;
	}
	.my-order .orders .header-bar li .order-num {
		width: 18px;
		height: 18px;
		line-height: 18px;
		text-align: center;
		position: absolute;
		top: 3px;
		right: 3px;
		color: #fff;
		font-size: 13px;
		background-color: #ef1234;
		border-radius: 50%;
	}
	/* 2.2 下面的订单列表 */
	.my-order .orders .order-list {
		/*width: 100%;*/
		padding: 0 20px;
		overflow: auto;
	}
	/* 每个订单 */
	.my-order .orders .order-list>li {
		box-sizing: border-box;
		border: 0.8px solid #ddd;
		margin: 20px 0;
	}
	/* 每个订单的头部 */
	.my-order .orders .order-list>li .order-title {
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		box-sizing: border-box;
		border-bottom: 0.8px solid #ddd;
		background: #eee;
		/*color: #999;*/
		font-size: 13px;
		position: relative;
	}
	.my-order .orders .order-list>li .order-title span {
		position: absolute;
	}
	.my-order .orders .order-list>li .order-title span:nth-child(2) {
		left: 250px;
	}
	.my-order .orders .order-list>li .order-title span:nth-child(3) {
		left: 530px;
	}
	.my-order .orders .order-list>li .order-title span:nth-child(4) {
		left: 655px;
	}
	.my-order .orders .order-list>li .order-title span:nth-child(5) {
		left: 780px;
	}
	.my-order .orders .order-list>li .order-title span:nth-child(6) {
		left: 905px;
	}

	/* 每个订单的内容区 */
	.my-order .orders .order-list>li .order-content {
		/*border: 2px solid green;*/
		overflow: hidden;
	}
	/* 每个订单左侧商品列表 */
	.my-order .orders .order-list>li .order-content .product-list {
		height: 100%;
		width: 50%;
		float: left;
	}
	.my-order .orders .order-list>li .order-content .product-list>li {
		height: 100px;
		line-height: 100px;
		box-sizing: border-box;
		border-bottom: 0.8px solid #ddd;
		border-right: 0.8px solid #ddd;
		position: relative;
	}
	/* 商品图片 */
	.my-order .orders .order-list>li .order-content .product-list>li .product-img {
		/*display: inline;*/
		width: 70px;
		height: 70px;
		margin: 15px;
		box-sizing: border-box;
		border: 0.8px solid #ddd;
	}
	/* 商品名 */
	.my-order .orders .order-list>li .order-content .product-list>li .product-name {
		width: 280px;
		height: 60px;
		line-height:30px;
		font-size: 13px; 
		position: absolute;
		top: 20px;
		left: 100px;
		/*background: red;*/
	}
	/* 商品数量 */
	.my-order .orders .order-list>li .order-content .product-list>li .product-num {
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		position: absolute;
		left: 420px;
		top: 30px;
		color: #999;
		/*background: red;*/
	}
	.my-order .orders .order-list>li .order-content .product-list>li:last-child {
		border-bottom: none;
	}
	/* 每个右侧订单信息区域 */
	.my-order .orders .order-list>li .order-content .order-info {
		width: 50%;
		float: right;
	}
	.my-order .orders .order-list>li .order-content .order-info>span {
		display: inline-block;
		box-sizing: border-box;
		padding-top: 20px;
		width: 118.8px;
		height: 100%;
		border-right: 0.8px solid #ddd;
		text-align: center;
		font-size: 13px;
	}
	.my-order .orders .order-list>li .order-content .order-info>span:last-child {
		border-right: none;
	}
	/* 等待付款 & 等待收货 */
	.my-order .orders .order-list>li .order-content .waitting-for-payment .order-status,
	.my-order .orders .order-list>li .order-content .waitting-for-product .order-status {
		color: #f40;
	}
	.my-order .orders .order-list>li .order-content .waitting-for-payment .order-operation span {
		color: #ef1234;
		border: 1px solid #ef1234;
		border-radius: 1px;
		padding: 5px 20px;
		font-weight: bold;
	}
	.my-order .orders .order-list>li .order-content .waitting-for-payment .order-operation span:hover {
		color: #fff;
		background: #ef1234;
		cursor: pointer;
	}
	/* 订单已完成 */
	.my-order .orders .order-list>li .order-content .order-is-finished .order-status {
		color: #999;
	}
	.my-order .orders .order-list>li .order-content .waitting-for-product .order-operation span,
	.my-order .orders .order-list>li .order-content .order-is-finished .order-operation span {
		font-weight: bold;
	}
	.my-order .orders .order-list>li .order-content .waitting-for-product .order-operation span:hover,
	.my-order .orders .order-list>li .order-content .order-is-finished .order-operation span:hover {
		cursor: pointer;
		color: #ef1234;
	}
	
	
</style>