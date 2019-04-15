<template>
  <div class="my-focus">
  	<user-center-temp 
  		:active-index='activeIndex'
	  	:item-category="focusCategory"
  		:title="'我的关注'"
  		@change-active-index="changeActiveIndex">
		<!-- 我的收藏 列表 -->
		<div v-show="activeIndex == 0">
			<product-list 
				@show-all-product=""
				:item="'我的收藏夹'"
				:all-product-list="favoriteList">
			</product-list>
		</div>
		<!-- 关注的商品 列表 -->
		<div v-show="activeIndex == 1">
			<product-list
				@show-all-product=""
				:item="'关注的商品'"
				:all-product-list="focusList">
			</product-list>
		</div>
		<!-- 关注的店铺 列表 -->
		<div v-show="activeIndex == 2">
			<product-list
				:item="'关注的店铺'"
				:all-product-list="storeList">
			</product-list>
		</div>
	</user-center-temp>
  </div>
</template>

<script>
import UserCenterTemp from '@/components/UserCenterTemp'
import FocusProductListBase from '@/components/FocusProductListBase'

export default {
	name: 'MyFocus',
	components: {
		'user-center-temp': UserCenterTemp,
		'product-list': FocusProductListBase,
	},
	data () {
		return {
			activeIndex: 0,
			// showAllProduct:
			focusCategory: [
		    	{
					index: 0,
					item: '我的收藏夹',
					showNum: 0,
				},
				{
					index: 1,
					item: '关注的商品',
					showNum: 0,
				},
				{
					index: 2,
					item: '关注的店铺',
					showNum: 0,
				},
			],
			focusList: [
				{
					index: 0,
					imageName: '1-0.jpg',
					name: '金良玉地 有机 速冻油豆角 500g 速冻蔬菜 东北特产',
					originalPrice: 10.90,
					currentPrice: 9.90,
					commentNum: 29014,
					favorableRate: 98,
				},
				{
					index: 1,
					imageName: '1-1.jpg',
					name: '福成美食家 早餐精选培根 400g 山姆店同款 家庭装 烧烤食材',
					originalPrice: 29.90,
					currentPrice: 29.90,
					commentNum: 22314,
					favorableRate: 98,
				},
				{
					index: 2,
					imageName: '1-2.jpg',
					name: '美味连连 大连美早樱桃车厘子 美早大樱桃2斤 大连樱桃 樱桃水果 京东生鲜',
					originalPrice: 109.90,
					currentPrice: 108.00,
					commentNum: 8714,
					favorableRate: 98,
				},
				{
					index: 3,
					imageName: '1-3.jpg',
					name: '广西百香果 新鲜水果 24粒装 单果50-100g',
					originalPrice: 29.90,
					currentPrice: 28.60,
					commentNum: 20914,
					favorableRate: 98,
				},
				{
					index: 4,
					imageName: '1-4.jpg',
					name: '台湾金钻凤梨 1个装 单果1.2kg以上 新鲜水果',
					originalPrice: 48.90,
					currentPrice: 48.90,
					commentNum: 27314,
					favorableRate: 98,
				},
				{
					index: 5,
					imageName: '1-5.jpg',
					name: '湾仔码头 多菜多益水饺 白菜紫甘蓝猪肉口味 720g （早餐 火锅食材 烧烤 饺子）',
					originalPrice: 35.90,
					currentPrice: 32.90,
					commentNum: 98114,
					favorableRate: 98,
				},
			],
			favoriteList: [
				{
					index: 0,
					imageName: '2-0.jpg',
					name: '速冻粽子 豆沙口味 500g（5只 端午节 精选糯米 早餐食材）',
					originalPrice: 17.90,
					currentPrice: 16.90,
					commentNum: 42314,
					favorableRate: 98,
				},
				{
					index: 1,
					imageName: '2-1.jpg',
					name: '冷冻黑椒三文鱼段(MSC认证）250g 半成品方便菜 袋装 自营海鲜水产',
					originalPrice: 28.90,
					currentPrice: 26.90,
					commentNum: 9084,
					favorableRate: 98,
				},
				{
					index: 2,
					imageName: '2-2.jpg',
					name: '泰国山竹5A级 新鲜水果山竹 京东生鲜水果 约2.5kg',
					originalPrice: 89.90,
					currentPrice: 79.90,
					commentNum: 20314,
					favorableRate: 98,
				},
				{
					index: 3,
					imageName: '2-3.jpg',
					name: '冷冻蒜蓉粉丝扇贝虾夷扇贝烧烤食材贝类海鲜 4袋（共1000g）',
					originalPrice: 69.90,
					currentPrice: 69.90,
					commentNum: 2624,
					favorableRate: 98,
				},
				{
					index: 4,
					imageName: '2-4.jpg',
					name: '【仅剩100份·168元】美享时刻 手工整切牛排套餐10片进口S级牛肉微腌黑椒西冷菲力儿童牛扒 生鲜',
					originalPrice: 199.90,
					currentPrice: 188.00,
					commentNum: 7824,
					favorableRate: 98,
				},
				{
					index: 5,
					imageName: '2-5.jpg',
					name: '百菲酪 纯水牛奶 200ml*10盒',
					originalPrice: 49.90,
					currentPrice: 46.90,
					commentNum: 31144,
					favorableRate: 97,
				},
				{
					index: 6,
					imageName: '2-6.jpg',
					name: '海南桂花香荔枝 500g装 新鲜水果',
					originalPrice: 44.80,
					currentPrice: 44.80,
					commentNum: 234,
					favorableRate: 99,
				},

			],
			storeList: [],
		}
	},
	methods: {
		// 获取降价商品数量
		getLowerPriceItems: function (productList) {
			var tempList = [];
			for (var i = 0; i < productList.length; i++) {
				if (productList[i].currentPrice < productList[i].originalPrice) {
					tempList.push(productList[i]);
				}
			}
			return tempList;
		},
		// 改变展示项目的index
		changeActiveIndex: function (index) {
			this.activeIndex = index;
		},
		// 获取每个选项展示的数字
		countItemsShowNum: function () {
			this.focusCategory[0].showNum = this.getLowerPriceItems(this.favoriteList).length;
			this.focusCategory[1].showNum = this.getLowerPriceItems(this.focusList).length; 
		},
	},
	mounted () {
		this.countItemsShowNum();
	},
};
</script>

<style scoped>
	.my-focus {
		/*padding: 20px 0 0 20px;*/
	}	
</style>