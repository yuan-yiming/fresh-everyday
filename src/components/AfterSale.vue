<template>
  <div class="after-sale">
  	<user-center-temp 
	  	:active-index='activeIndex'
	  	:item-category="afterSaleCategory"
  		:title="'售后服务'"
  		@change-active-index="changeActiveIndex">
  		<div class="message-list">
			<p class="no-message">
				暂无{{ activeIndex == 0 ? afterSaleCategory[activeIndex].item + '的订单' : afterSaleCategory[activeIndex].item}}。
			</p>
		</div>
  	</user-center-temp>
  </div>
</template>

<script>
import UserCenterTemp from '@/components/UserCenterTemp'

export default {
  name: 'AfterSale',
  components: {
  	'user-center-temp': UserCenterTemp,
  },
  data () {
    return {
    	activeIndex: 0,
    	afterSaleCategory: [
    		{
    			index: 0,
    			item: '处理中',
    			showNum: 0, 
    		},
    		{
    			index: 1,
    			item: '退/换货记录',
    			showNum: 0,
    		},
    		{
    			index: 2,
    			item: '退款明细',
    			showNum: 0, 
    		},
    	],
    	afterSaleList: [
    		{
    			index: 0,
    		},
    	], 
    }
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
	.after-sale .message-list {
		min-height: 200px;
		/*background: */
	}
	.after-sale .no-message {
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		margin: 20px;
		background: #eee;
		font-size: 13px;
		position: relative;
	}
</style>