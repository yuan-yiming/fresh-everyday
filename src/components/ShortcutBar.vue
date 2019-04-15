<template>
  <div class="shortcut-bar">
  		<div class="container">
	  		<span class="welcome">欢迎来到每日生鲜！</span>
	  		<div class="address" @mouseenter="showAddressSelectedBar" @mouseleave="showAddressSelectedBar">
	  			<div class="current-address">
		  			<span>{{ currentCity }}</span>
	  			</div>
		  		<div class="address-selected-bar" v-show="isShowAddressSelectedBar">
		  			<p><h3>热门城市</h3></p>
		  			<ul class="hot-city">
		  				<li v-for="hot in hotCities" @click="selectCity(hot)">
		  					{{ hot }}
		  				</li>
		  			</ul>
		  			<ul class="all-city">
		  				<li v-for="city in allCities" @click="selectCity(city)">
		  					{{ city }}
		  				</li>
		  			</ul>
		  		</div>
	  		</div>
	  		<ul class="right-part">
	  			<router-link :to="{name: 'Login'}" tag="li" class="login">[登录]</router-link>
	  			<router-link :to="{name: 'Register'}" tag="li" class="register">[注册]</router-link>
	  			<li class="user-center" @mouseenter="userCenterDown" @mouseleave="userCenterDown">
	  				<router-link :to="{name: 'UserCenter'}" tag="span">用户中心</router-link>
	  				<ul v-show="isUserCenterDown">
	  					<li v-for="item in userCenter">{{ item.name }}<span v-show="item.number" class="item-number"> {{ item.number }}</span></li>
	  				</ul>
	  			</li>
	  			<!-- 订单、收藏、降价商品、优惠券、消息、返修退换货 -->
	  			<li class="business-cooperation" @mouseenter="businessCooperationDown" @mouseleave="businessCooperationDown">
	  				<span>商务合作</span>
	  				<ul v-show="isBusinessCooperationDown">
	  					<li v-for="item in businessCooperation">{{ item.name }}</li>
	  				</ul>
	  			</li>
	  			<li class="app-qrcode" @mouseenter="showAppQrcode" @mouseleave="showAppQrcode">
	  				<span>生鲜APP</span>
	  				<div class="qrcode" v-show="isShowAppQrcode">
	  					<p>扫码下载手机APP</p>
	  					<img src="../assets/app-header/app-qrcode.png">
	  				</div>
	  			</li>
	  		</ul>
  		</div>
  	</div>
</template>

<script>
export default {
	name: 'ShortcutBar',
	data () {
		return {
			isShowAddressSelectedBar: false,
			isUserCenterDown: false,
			isBusinessCooperationDown: false,
			isShowAppQrcode: false,
			currentCity: '广州',
			hotCities: ['北京','上海','广州','深圳','杭州'],
			allCities: ['长春','大连','德州','保定','长沙','福州',
				'厦门','合肥','哈尔滨','北京','南京','三亚','武汉','温州',
				'上海','广州','深圳','杭州','天津','重庆','东莞','云浮','惠州','佛山'],
			// 用户中心
			userCenter: [
				{
					name: '我的订单',
					url: '#',
					number: 3,
				},
				{
					name: '我的收藏',
					url: '#',
					number: 1,
				},
				{
					name: '降价商品',
					url: '#',
					number: 5,
				},
				{
					name: '我的购物车',
					url: '#',
					number: 2,
				},
				{
					name: '我的优惠券',
					url: '#',
					number: 2,
				},
				{
					name: '售后服务',
					url: '#',
				},

				{
					name: '我的消息',
					url: '#',
					number: 4,
				}
			],
			// 商务合作
			businessCooperation: [
				{
					name: '商家入驻',
					url: '#'
				},
				{
					name: '广告服务',
					url: '#'
				},
				{
					name: '物流合作',
					url: '#'
				},
				{
					name: '企业采购',
					url: '#'
				},
				{
					name: '成为供应商',
					url: '#'
				},
			],
		}
	},
	methods: {
		showAddressSelectedBar: function () {
			this.isShowAddressSelectedBar = !this.isShowAddressSelectedBar;
		},
		selectCity: function (city) {
			this.currentCity = city;
		},
		userCenterDown: function () {
			this.isUserCenterDown = !this.isUserCenterDown;
		},
		businessCooperationDown: function () {
			this.isBusinessCooperationDown = !this.isBusinessCooperationDown;
		},
		showAppQrcode: function () {
			this.isShowAppQrcode = !this.isShowAppQrcode;
		},	
	}
};
</script>

<style scoped>
	/* 快捷导航栏 */
	.shortcut-bar {
		/*margin: 0*/
		width: 100%;
		background-color: #efefef;
		font-size: 13px;
		/*color: #12ab34;*/
	}
	.shortcut-bar .container {
		width: 1200px;
		height: 30px;
		line-height: 30px;
		margin: 0 auto;
		position: relative;
		/*background-color: red;*/
	}
	.shortcut-bar .welcome {
		display: inline-block;
		/*width: 120px;*/
		height: 30px;
		/*background-color: red;*/
		vertical-align: 12px;
	}
	/* 地址 */
	.shortcut-bar .address {
		display: inline-block;
		position: relative;
		/*padding: 0 18px;*/
		width: 44px;
		height: 30px;
		/*border: none;*/
		z-index: 20;
	}
	.shortcut-bar .address .current-address {
		display: inline-block;
		position: absolute;
		top: -1.5px;
		left: 0;
		width: 100%;
		height: 29px;
		line-height: 30px;
		border-top: none;
		z-index: 20;
		padding-left: 25px;
		border: 1px solid #eee;
		border-top: none;
		background: url('../assets/app-header/icons/address.png') no-repeat;
		background-position: 5px 6px;
		background-size: 16px 16px;
	}
	.shortcut-bar .address:hover .current-address {
		color: #12ab34;
		background-image: url('../assets/app-header/icons/address-active.png');
	}
	.shortcut-bar .address:hover .current-address {
		background-color: #fff;
		border-bottom: 2px solid #fff;
		border-left: 1px solid #999;
		border-right: 1px solid #999;
		/*background-image: url('../assets/address-active.png');
		color: #12ab34;
		cursor: pointer;*/
	}
	.shortcut-bar .address .address-selected-bar {
		position: absolute;
		width: 300px;
		top: 28px;
		left: 0;
		padding: 10px;
		border: 1px solid #999;
		background-color: #fff;
		z-index: 1;
	}
	.shortcut-bar .address .address-selected-bar ul {
		overflow: hidden;
		/*background-color: red;*/
	}
	.shortcut-bar .address .address-selected-bar .all-city {
		border-top: 1px solid #999;
		margin-top: 10px;
		padding-top: 10px;
	}
	.shortcut-bar .address .address-selected-bar li {
		float: left;
		list-style: none;
		width: 44px;
		padding-left: 16px;
		height: 30px;
		/*background-color: red;*/
	}
	.shortcut-bar .address-selected-bar ul>li:hover {
		color: #12ab34;
		cursor: pointer;
		background-color: #eee;
	}
	/* 快捷导航栏右侧 */
	.shortcut-bar .right-part {
		display: inline-block;
		float: right;
	}
	.shortcut-bar .right-part>li {
		float: left;
		padding: 0 10px;
	}
	
	.shortcut-bar .right-part>li:first-child:hover,
	.shortcut-bar .right-part>li:nth-child(2):hover,
	.shortcut-bar .right-part .user-center>span:hover,
	.shortcut-bar .right-part .business-cooperation>span:hover,
	.shortcut-bar .right-part .app-qrcode>span:hover,
	.shortcut-bar .right-part>li>ul>li:hover {
		color: #12ab34;
		cursor: pointer;
	}
	.shortcut-bar .right-part>li>ul>li:hover {
		/*background-color: #eee;*/
	}
	.shortcut-bar .right-part>li>ul>li {
		position: relative;
		/*border: 1px solid red;*/
	}
	.shortcut-bar .right-part>li>ul>li .item-number {
		color: #fff;
		font-size: 12px;
		font-weight: bold;
		display: inline-block;
		width: 18px;
		height: 16px;
		line-height: 16px;
		text-align: center;
		background-color: #12ab34;
		border-radius: 50%;
		margin-left: 5px;
	}
	/* 用户中心 & 商务合作 & 手机生鲜*/
	.shortcut-bar .right-part .user-center,
	.shortcut-bar .right-part .business-cooperation,
	.shortcut-bar .right-part .app-qrcode {
		width: 52px;
		height: 30px;
		position: relative;
		z-index: 20;
	}
	.shortcut-bar .right-part .user-center>span,
	.shortcut-bar .right-part .business-cooperation>span,
	.shortcut-bar .right-part .app-qrcode>span {
		box-sizing: border-box;
		display: inline-block;
		width: 100%;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 20;
	}
	.shortcut-bar .right-part .user-center:hover>span,
	.shortcut-bar .right-part .business-cooperation:hover>span,
	.shortcut-bar .right-part .app-qrcode:hover>span {
		background-color: #fff;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #999;
		border-right: 1px solid #999;
		z-index: 20;
	}
	.shortcut-bar .right-part .user-center ul,
	.shortcut-bar .right-part .business-cooperation ul {
		box-sizing: border-box;
		border: 1px solid #999;
		position: absolute;
		top: 29px;
		left: 0px;
		width: 110px;
		padding: 0px 10px;
		background-color: #fff;
	}
	.shortcut-bar .right-part .app-qrcode div {
		text-align: center;
		box-sizing: border-box;
		border: 1px solid #999;
		position: absolute;
		top: 29px;
		right: 0px;
		/*height: 100px;*/
		padding: 10px 10px 0 10px;
		background-color: #fff;
	}
	.shortcut-bar .right-part .app-qrcode div img {
		width: 140px;
		height: 140px;
	}
</style>