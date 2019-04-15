<template>
	<div class="side-bar">
		<ul class="menu-level-1">
			<li v-for="category in categories" @mouseenter="showMenuLevel2(category)" @mouseleave="showMenuLevel2(category)">
				<div class="menu-container">
					<span class="category-icon"></span>
					<p class="category-name">
						{{ category.name }}
						<span class="gt">&gt;</span>
					</p>
					<p class="hot-choice">
						<span v-for="hot in category.includedProduct.slice(0,3)"> {{ hot }} </span>
					</p>
				</div>
				<div class="menu-level-2" v-show="category.show">
					<h3><a href="#">{{ category.name }}</a></h3>
					<div class="product-list">
						<span v-for="product in category.includedProduct">
							{{ product }}
						</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
	  name: 'SideBar',
	  data () {
	    return {
	    	categories: [
	    		{
	    			index: 0,
	    			show: false,
	    			name: '新鲜水果',
	    			includedProduct: ['苹果','香蕉','芒果','番石榴','火龙果','圣女果','榴莲','百香果','菠萝','西瓜','水蜜桃','哈密瓜']
	    		},
	    		{
	    			index: 1,
	    			show: false,
	    			name: '海鲜水产',
	    			includedProduct: ['扇贝','三文鱼','鳕鱼','大闸蟹','竹节虾','小龙虾','生蚝','鲍鱼','墨鱼','基围虾','金枪鱼','红虾']
	    		},
	    		{
	    			index: 2,
	    			show: false,
	    			name: '精选肉类',
	    			includedProduct: ['猪蹄','五花肉','肥牛','牛排','牛腩','羊肉卷','鸡翅','鸡腿','鸭掌','鸭舌','鸡柳','鸭脖']
	    		},
	    		{
	    			index: 3,
	    			show: false,
	    			name: '冷饮冻食',
	    			includedProduct: ['汤圆','冰激凌','果汁','手抓饼','云吞','水饺','包子','乳酸菌','蛋糕','牛肉丸','鱼丸','鱼豆腐']
	    		},
	    		{
	    			index: 4,
	    			show: false,
	    			name: '蔬菜蛋品',
	    			includedProduct: ['鸡蛋','菜心','西兰花','黄瓜','生菜','玉米','胡萝卜','西红柿','香芋','番薯','葱','鸭蛋']
	    		},
	    	],
	    }
	  },
	  computed: {
	  	hotChoice: function (productList) {
	  		return productList.slice(0,3);
	  	},
	  },
	  methods: {
	  	showMenuLevel2: function (obj) {
	  		obj.show = !obj.show;
	  	},
	  }
	};
</script>

<style scoped>

	/* 左边侧栏导航栏 */
	.side-bar {
		width: 15%;
		height: 420px;
		background-color: #ff5555;
		position: absolute;
		top: 0;
		background-color: #fff;
		z-index: 2;
	}
	.side-bar ul li {
		box-sizing: border-box;
		height: 84px;
		width: 100%;

	}
	.side-bar ul li .menu-container {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		line-height: 30px;
		position: relative;
		padding: 12px 0px 12px 48px;
		background-color: #eee;
		z-index: 2;
		border: 1px solid #eee;
		border-top: 1px dotted #999;
	}
	.side-bar ul li:hover .menu-container {
		background-color: #fff;
		border-right: 1px solid #fff;
		/*border-top:  */
	}
	.side-bar ul li:first-child .menu-container {
		border: none;
	}
	.side-bar ul li .category-icon {
		display: inline-block;
		width: 30px;
		height: 30px;
		background:  url('../assets/main-view/icons/fruit.png') no-repeat 0 0;
		background-size: 30px;
		position: absolute;
		top: 18px;
		left: 8px;
	}
	.side-bar ul li:nth-child(2) .category-icon {
		background-image: url(../assets/main-view/icons/seafood.png);
	}
	.side-bar ul li:nth-child(3) .category-icon {
		background-image: url(../assets/main-view/icons/meat.png);
	}
	.side-bar ul li:nth-child(4) .category-icon {
		background-image: url(../assets/main-view/icons/juice.png);
	}
	.side-bar ul li:nth-child(5) .category-icon {
		background-image: url(../assets/main-view/icons/vegetables.png);
	}
	.side-bar ul li:nth-child(1):hover .category-icon {
		background-image: url(../assets/main-view/icons/fruit-active.png);
	}
	.side-bar ul li:nth-child(2):hover .category-icon {
		background-image: url(../assets/main-view/icons/seafood-active.png);
	}
	.side-bar ul li:nth-child(3):hover .category-icon {
		background-image: url(../assets/main-view/icons/meat-active.png);
	}
	.side-bar ul li:nth-child(4):hover .category-icon {
		background-image: url(../assets/main-view/icons/juice-active.png);
	}
	.side-bar ul li:nth-child(5):hover .category-icon {
		background-image: url(../assets/main-view/icons/vegetables-active.png);
	}
	.side-bar ul li .category-name {
		/*background: red;*/
		font-weight: bold;
	}
	.side-bar ul li .category-name:hover {
		/*padding-left: 5px;*/
		cursor: pointer;
		color: #12ab34;
	}
	.side-bar ul li .category-name .gt {
		float: right;
		font-weight: lighter;
		margin-right: 10px;
	}
	.side-bar ul li .hot-choice {
		color: #999;
		font-size: 13px;
		/*background: blue;*/
	}
	.side-bar ul li .hot-choice:hover {
		cursor: pointer;
	}
	.side-bar ul li .hot-choice span:hover {
		color: #12ab34;
		font-weight: bold;
	}
	.side-bar ul li .menu-level-2 {
		position: absolute;
		top: 168px;
		left: 179px;
		width: 240px;
		height: 252px;
		background-color: #fff;
		box-sizing: border-box;
		border: 1px solid #ddd;
		z-index: 1;
		padding: 0 20px;
	}
	.side-bar ul li:nth-child(1) .menu-level-2 {
		top: 0px;
	}
	.side-bar ul li:nth-child(2) .menu-level-2 {
		top: 84px;
	}
	.side-bar ul li .menu-level-2 h3 {
		height: 52px;
		line-height: 52px;
		/*text-align: center;*/
		padding-left: 10px;
	}
	.side-bar ul li .menu-level-2 h3 a {
		color: #12ab34
	}
	.side-bar ul li .menu-level-2 .product-list {
		height: 200px;
		/*line-height: 50px;*/
	}
	.side-bar ul li .menu-level-2 .product-list span {
		display: inline-block;
		margin: 10px 12px 20px 12px;
		/*width: 65px;*/
		/*height: 50px;*/
		box-sizing: border-box;
		text-align: center;
		font-size: 14px;
	}
	.side-bar ul li .menu-level-2 .product-list span:hover {
		color: #12ab34;
		cursor: pointer;
	}
</style>