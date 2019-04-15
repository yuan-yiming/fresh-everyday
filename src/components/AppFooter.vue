<template>
  <div id="footer">
  	<div class="good-service-wrapper">
  		<good-service 
  		:good-service-info="goodServiceInfo" 
  		class="good-service">
  		</good-service>
  	</div>
  	<div class="footer-info-container">
  		<ul class="footer-info">
  			<li v-for="info in footerInfo">
  				<p>{{ info.title }}</p>
  				<ul class="footer-items">
  					<li v-for="item in info.items">
  						<span>{{ item }}</span>
  					</li>
  				</ul>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
import GoodService from '@/components/GoodService'

export default {
  name: 'AppFooter',
  components: {
  	'good-service': GoodService,
  },
  data () {
    return {
    	goodServiceInfo: {
    		titleColor: 'rgba(18,171,52)',
    		contentColor: 'rgba(18,171,52,0.6)',
    		iconSuffix: '-active',
    	},
    	footerInfo: [
    		{
    			title: '购物指南',
    			items: ['购物流程', '支付方式', '售后服务'],
    		},
    		{
    			title: '配送方式',
    			items: ['配送运费', '配送范围', '配送时间'],
    		},
    		{
    			title: '商家服务',
    			items: ['平台规则', '商家入驻', '联系我们'],
    		},
    		{
    			title: '联系客服',
    			items: ['在线客服', '致电客服', '邮箱反馈'],
    		},
    	],
    }
  }
};
</script>

<style scoped>
	#footer {
		width: 100%;
		height: 300px;
	}
	#footer .good-service-wrapper {
		width: 100%;
		height: 100px;
		/*margin-top: 60px;*/
		background-color: #eee;
	}
	#footer .good-service-wrapper .good-service {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		/*background-color: #fff;*/
	}
	/* 底部信息部分 */
	#footer .footer-info-container {
		width: 100%;
		height: 200px;
		background: url('../assets/app-footer/app-footer-bg.jpg') no-repeat;
		background-size: 2000px;
		background-position: 50% 0;
		color: #fff;
	}
	#footer .footer-info-container ul.footer-info {
		width: 800px;
		margin: 0 auto;
		/*height: 100%;*/
		padding: 30px 0;
		line-height: 36px;
	}
	#footer .footer-info-container ul.footer-info>li {
		width: 25%;
		margin: 0 auto;
		float: left;
		box-sizing: border-box;
		padding-left: 60px;
	}
	#footer .footer-info-container ul.footer-info>li p {
		font-size: 22px;
	}
	#footer .footer-info-container ul.footer-info>li ul.footer-items {
		
	}
	#footer .footer-info-container ul.footer-info>li ul.footer-items>li span {
		opacity: 0.5;
		font-size: 14px;
		cursor: pointer;
	}
	#footer .footer-info-container ul.footer-info>li ul.footer-items>li span:hover {
		opacity: 1;
	}
</style>