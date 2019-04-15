<template>
  <div class="message">
  	<user-center-temp 
	  	:active-index='activeIndex'
	  	:item-category="messageCategory"
  		:title="'我的消息'"
  		@change-active-index="changeActiveIndex">
  		<div class="message-list">
			<p class="no-message">
				无未读{{ messageCategory[activeIndex].item }}。
			</p>
		</div>
  	</user-center-temp>
  </div>
</template>

<script>
import UserCenterTemp from '@/components/UserCenterTemp'

export default {
  name: 'MyMessage',
  components: {
  	'user-center-temp': UserCenterTemp,
  },
  data () {
    return {
    	activeIndex: 0,
    	messageCategory: [
    		{
    			index: 0,
    			item: '系统通知',
    			showNum: 0, 
    		},
    		{
    			index: 1,
    			item: '社区消息',
    			showNum: 0,
    		},
    		{
    			index: 2,
    			item: '系统公告',
    			showNum: 0, 
    		},
    		{
    			index: 3,
    			item: '私信',
    			showNum: 0,
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
	.message .message-list {
		min-height: 200px;
		/*background: */
	}
	.message .no-message {
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		margin: 20px;
		background: #eee;
		font-size: 13px;
		position: relative;
	}
</style>