<template>
	<div class="user-center-home">
		<div class="profile">
			<div class="user">
				<div class="user-avatar">
					<img src="../assets/user-center/home/avatar.png">
				</div>
				<p class="user-name">用户名：{{ user.name }}</p>
				<p class="user-account">账 号：{{ user.account }}</p>
			</div>
			<div class="wallet">
				<div class="common-title">我的钱包</div>
				<div v-for="value in wallet">
					<p class="num"><span>{{ value.num }}</span></p>
					<p class="item">{{ value.item }}</p>
				</div>
			</div>
		</div>
		<div class="record">
			<div class="my-order">
				<div class="common-title">我的订单</div>
				<div v-for="value in order" 
					:class="{active: value.index==hoverOrderIndex}"
					@mouseenter="hoverOrderIndex = value.index"
					@mouseleave="hoverOrderIndex = null">
					<span class="order-icon" 
						:style="{'background-position': getOrderIconPosition(value)}">
						<span class="item-num" v-if="value.num">{{ value.num }}</span>
					</span>
					<p class="item">{{ value.item }}</p>
				</div>
			</div>
			<div class="my-interest">
				<div class="common-title">我的关注</div>
				<div v-for="value in interest">
					<p class="num"><span>{{ value.num }}<span class="hot">{{ value.hot }}</span></span></p>
					<p class="item">{{ value.item }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'UserCenterHome',
  data () {
    return {
    	user: {
    		name: '袁大明',
    		account: '88888888@qq.com',
    		// avatarLink: ,
    	},
    	wallet: [
    		{
    			index: 0,
    			item: '优惠券',
    			num: 2,
    		},
    		{
    			index: 1,
    			item: '积分',
    			num: 392,
    		},
    		{
    			index: 2,
    			item: '红包',
    			num: 5,
    		},
    	],
    	order: [
    		{
    			index: 0,
    			item: '待付款',
    			num: 1,
    			iconPosition: '2px -244px',
    			activeIconPosition: '2px -307px',
    		},
    		{
    			index: 1,
    			item: '待收货',
    			num: 0,
    			iconPosition: '-96px -246px',
    			activeIconPosition: '-96px -309px',
    		},
    		{
    			index: 2,
    			item: '待评价',
    			num: 2,
    			iconPosition: '-197px -246px',
    			activeIconPosition: '-197px -309px',
    		},
    		{
    			index: 3,
    			item: '退换/售后',
    			num: 1,
    			iconPosition: '-297px -247px',
    			activeIconPosition: '-297px -310px',
    		},
    		{
    			index: 4,
    			item: '全部订单',
    			iconPosition: '-399px -247px',
    			activeIconPosition: '-399px -310px',
    		}
    	],
    	hoverOrderIndex: null,
    	interest: [
    		{
    			index: 0,
    			item: '商品关注',
    			num: 16,
    			hot: '7个降价',
    		},
    		{
    			index: 1,
    			item: '店铺关注',
    			num: 4,
    			hot: '12件新品'
    		},
    		{
    			index: 2,
    			item: '商品收藏',
    			num: 8,
    			hot: '3个降价',
    		},
    	],
    }
  },
  methods: {
  	// 
  	// 获取order icon的位置参数
  	getOrderIconPosition: function (value) {
  		if (value.index == this.hoverOrderIndex) {
  			return value.activeIconPosition;
  		} else {
  			return value.iconPosition;
  		}
  	},
  }
};
</script>

<style scoped>
	.user-center-home {
		padding: 20px 0 0 20px;
	}
	/* profile */
	.user-center-home .profile {
		height: 200px;
		width: 1020px;
		/*background: red;*/
		position: relative;
	}
	/* 通用标题 */
	.user-center-home .common-title {
		/*width: 700px;*/
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		color: #222;
		/*font-weight: bold;*/
		box-sizing: border-box;
		padding: 0 20px;
		border-bottom: 1px solid #eee;
	}
	/* 个人资料 */
	.user-center-home .profile .user {
		width: 300px;
		height: 200px;
		background: #fff;
		position: absolute;
		text-align: center;
		line-height: 30px;
	}
	.user-center-home .profile .user .user-avatar {
		display: inline-block;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-top: 18px;
	}
	.user-center-home .profile .user .user-avatar img {
		width: 100%;
		height: 100%;
	}
	.user-center-home .profile .user p {
		/*color: #666;*/
	}
	/* 钱包 */
	.user-center-home .profile .wallet {
		width: 700px;
		height: 200px;
		background: #fff;
		position: absolute;
		left: 320px;
	}
	.user-center-home .profile .wallet div:nth-child(n+2) {
		box-sizing: border-box;
		border-right: 1px solid #eee;
		height: 150px;
		line-height: 40px;
		padding: 30px;
		width: 233.3px;
		float: left;
		text-align: center;
	}
	.user-center-home .profile .wallet div:last-child {
		border: none;
	}
	.user-center-home .profile .wallet div:nth-child(n+2) .num span {
		color: #424242;
		font-weight: bold;
		font-size: 24px;
	}
	.user-center-home .profile .wallet div:nth-child(n+2) .num span:hover {
		color: #ef1234;
		cursor: pointer;
	}
	.user-center-home .profile .wallet div:nth-child(n+2) .num:hover {
		color: green;
	}
	/* record */
	.user-center-home .record {
		margin-top: 20px;
		height: 200px;
		width: 1020px;
		/*background: red;*/
		position: relative;
	}
	.user-center-home .record>div {
		position: absolute;
		height: 200px;
		background: #fff;
	}
	/* 我的订单 */
	.user-center-home .record .my-order {
		left: 0px;
		width: 660px;
	}
	.user-center-home .record .my-order>div:nth-child(n+2) {
		width: 132px;
		height: 150px;
		float: left;
		/*box-sizing: border-box;
		border-right: 1px solid #eee;*/
		position: relative;
		text-align: center;
		cursor: pointer;
	}
	.user-center-home .record .my-order>div.active {
		box-shadow: 0px 0px 10px #999;
	}
	.user-center-home .record .my-order>div:nth-child(n+2) .order-icon {
		display: inline-block;
		width: 60px;
		height: 60px;
		position: absolute;
		top: 20px;
		left: 36px;
		/*background: url('https://misc.360buyimg.com/user/myjd/home/2.0.8/css/i/sprite.png') no-repeat;*/
		background:  url('../assets/user-center/home/icons.png') no-repeat;
		background-size: 630px 391px;
		/*background-position: */
	}
	.user-center-home .record .my-order>div:nth-child(n+2) .order-icon>span {
		position: absolute;
		width: 20px;
		height: 20px;
		line-height: 20px;
		/*text-align: center;*/
		border-radius: 50%;
		background-color: #ef1234;
		color: #fff;
		font-size: 14px;
		top: -5px;
		right: -5px;
	}
	.user-center-home .record .my-order>div:nth-child(n+2) p {
		margin-top: 90px;
	}
	/* 我的关注 */
	.user-center-home .record .my-interest {
		left: 680px;
		width: 340px;
	}
	.user-center-home .record .my-interest>div:nth-child(n+2) {
		width: 113.3px;
		height: 150px;
		line-height: 40px;
		float: left;
		/*text-align: center;*/
		box-sizing: border-box;
		padding: 30px 0 0 30px;
	}
	.user-center-home .record .my-interest>div:nth-child(n+2) .num span {
		color: #424242;
		/*font-weight: bold;*/
		font-size: 20px;
		position: relative;
	}
	.user-center-home .record .my-interest>div:nth-child(n+2) .num>span:hover {
		color: #ef1234;
		cursor: pointer;
	}
	.user-center-home .record .my-interest>div:nth-child(n+2) .num .hot {
		text-align: center;
		position: absolute;
		top: -15px;
		right: -60px;
		font-size: 12px;
		height: 18px;
		line-height: 18px;
		width: 60px;
		color: #ef1234;
		border-radius: 25px;
		border: 1px solid #ef1234;
	}
</style>