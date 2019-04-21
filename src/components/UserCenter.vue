<template>
  <div id="user-center">
  	<!-- 快捷栏 -->
	<shortcut-bar class="shortcut-bar"></shortcut-bar>
	<!-- 头部 -->
	<fixed-bar :class="{'header-fixed': isHeaderFixed}" class="header-fixed-bar">
		<span class="title">用户中心</span>
	</fixed-bar>
	<!-- 主视图区 -->
	<div class="main-view-wrapper">
		<div class="main-view">
			<!-- 左侧选项栏 -->
			<div class="side-bar">
				<ul class="side-nav">
					<li v-for="item in itemNav">
						<span
							:class="{active: isActiveBar(item.index)}"
							@click="selectItem(item)">
							{{ item.title }}
						</span>
					</li>
				</ul>
			</div>
			<div class="content">
				<router-view @fix-header="fixHeader"></router-view>
			</div>
		</div>
	</div>
	<!-- 底部 -->
	<app-footer></app-footer>
  </div>
</template>

<script>
import ShortcutBar from '@/components/ShortcutBar'
import AppFooter from '@/components/AppFooter'
import UserCenterHeader from '@/components/LoginHeader'
import FixedBar from '@/components/FixedBar'

export default {
	name: 'UserCenter',
	components: {
		'app-footer': AppFooter,
		'shortcut-bar': ShortcutBar,
		'fixed-bar': FixedBar,
		'user-center-header': UserCenterHeader,
	},
	data () {
		return {
		isHeaderFixed: false,
		currentActiveNavIndex: 0,
		itemNav: [
			{
				index: 0,
				title: '个人中心',
				name: 'UserCenterHome'
			},
			
			{
				index: 1,
				title: '我的订单',
				name: 'MyOrder2'
			},
			{
				index: 2,
				title: '我的关注',
				name: 'MyFocus'
			},
			{
				index: 3,
				title: '我的购物车',
				name: 'ShoppingCart'
			},
			{
				index: 4,
				title: '我的钱包',
				name: 'MyWallet'
			},
			{
				index: 5,
				title: '我的消息',
				name: 'MyMessage'
			},
			{
				index: 6,
				title: '售后服务',
				name: 'AfterSale'
			},
		],
	}
	},
	computed: {
		
	},
	methods: {
		isActiveBar: function (index) {
			return index == this.currentActiveNavIndex;
		},
		selectItem: function (item) {
			this.currentActiveNavIndex = item.index;
			this.$router.push({name: item.name});
			this.autoFixHeader();
		},
		// 固定头部
		fixHeader: function () {
			if (window.pageYOffset < 30) {
				this.isHeaderFixed = false;
			} else {
				this.isHeaderFixed = true;
			}
		},
		// 自动检测滚动条，固定header
		autoFixHeader: function () {
			var fixHeader = this.fixHeader;
			window.onscroll = function () {
				fixHeader();
			}
		},
	},
	mounted () {
		this.$router.push({name: 'UserCenterHome'});
		this.autoFixHeader();
	}, 
};
</script>

<style scoped>
	#user-center {
		width: 100%;
		/* 高度由子元素撑开，无需设置 */
		/*background: url('../assets/user-center/main-view-bg3.jpg') no-repeat;*/
	}
	/* 界面快捷栏 */

	/* 页面的头部 */
	#user-center .header-fixed-bar {
		position: relative;  /*默认fixed*/
		/*box-shadow: 0px 3px 15px #222;*/
	}
	#user-center .header-fixed {
		position: fixed;
		top: 0px;
		/*z-index: 10;*/
		/*box-shadow: 0px 3px 15px #222;*/
	}
	/* title */
	#user-center .header-fixed-bar .title {
		color: #fff;
		font-size: 20px;
		/*margin-left: 30px;*/
	}

	/* 主视区 */
	#user-center .main-view-wrapper {
		width: 100%;
		/*min-height: 600px;*/
		background: #f0f3ef;
		border-bottom: 1px solid #ddd;
	}
	#user-center .main-view {
		margin: 0 auto;
		width: 1200px;
		position: relative;
	}
	/* 右边导航栏 */
	#user-center .main-view .side-bar {
		height: 320px;
		width: 160px;
		box-sizing: border-box;
		position: absolute;
		top: 0px;
		left: 0px;
		background: #fff;
	}
	#user-center .main-view .side-bar>ul.side-nav {
		margin: 20px 0;
	}
	#user-center .main-view .side-bar>ul.side-nav>li {
		height: 40px;
		line-height: 40px;
	}

	#user-center .main-view .side-bar>ul.side-nav>li span.active {
		color: rgba(18,171,52);
		border-bottom: 2px solid #12ab34;
	}
	#user-center .main-view .side-bar>ul.side-nav>li span:hover {
		color: rgba(18,171,52);
		cursor: pointer;
	}
	
	#user-center .main-view .side-bar>ul.side-nav>li span {
		margin-left: 40px;
		color: #787878;
	}
	/* 中间内容区 */
	#user-center .main-view .content {
		color: #565656;
		min-height: 500px;
		margin-bottom: 40px;
		width: 1040px;
		margin-left: 160px; 
		box-sizing: border-box;
		/*background: #eee;*/
	}
	/* common-header */
	/*#user-center-common-header {
		width: 1020px;
		height: 60px;
		line-height: 60px;
		background: red;
		margin-bottom: 20px;
	}*/
	/* 底部 */
	#user-center .footer {
		width: 100%;
	}
</style>