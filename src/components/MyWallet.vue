<template>
  <div class="my-wallet">
  	<user-center-temp 
	  	:active-index='activeIndex'
	  	:item-category="myWalletCategory"
  		:title="'我的钱包'"
  		@change-active-index="changeActiveIndex">
  		<div class="wallet-list">
			<p class="wallet-content">
				我的钱包里有{{ currentItem.num }}{{ currentItem.unit }}{{ currentItem.item }}。 
				<a href="javascript:;" class="see-details">查看详情 >></a>
			</p>
		</div>
  	</user-center-temp>
  </div>
</template>

<script>
import UserCenterTemp from '@/components/UserCenterTemp'

export default {
  name: 'MyWallet',
  components: {
  	'user-center-temp': UserCenterTemp,
  },
  data () {
    return {
    	activeIndex: 0,
    	myWalletCategory: [
    		{
    			index: 0,
    			item: '优惠券',
    			unit: '张',
    			showNum: 2,
    			num: 2,
    		},
    		{
    			index: 1,
    			item: '礼品卡',
    			unit: '张',
    			showNum: 5, 
    			num: 5,
    		},
    		{
    			index: 2,
    			item: '红包',
    			unit: '个',
    			showNum: 3, 
    			num: 3,
    		},
    		{
    			index: 3,
    			item: '积分',
    			unit: '',
    			showNum: 199,
    			num: 392,
    		},
    	],
    	afterSaleList: [
    		{
    			index: 0,
    		},
    	], 
    }
  },
  computed: {
  	currentItem: function () {
  		return this.myWalletCategory[this.activeIndex];
  	},
  },
  methods: {
  	changeActiveIndex: function (index) {
  		this.activeIndex = index;
  		// this.countOrderShowedNum();
  	},
  }
};
</script>

<style scoped>
	.my-wallet .wallet-list {
		min-height: 200px;
		/*background: */
	}
	.my-wallet .wallet-content {
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		margin: 20px;
		background: #eee;
		font-size: 13px;
		position: relative;
	}
	.my-wallet .wallet-content .see-details {
		text-decoration: underline;
	}
	.my-wallet .wallet-content .see-details:hover {
		color: #ef1234;
		cursor: pointer;
	}
</style>