<template>
  <div class="user-center-temp">
  	<!-- 1.标题 -->
  	<div class="title common-title">
  		<p>
  			{{ title }}
  		</p>
  	</div>
  	<!-- 2.内容区域 -->
  	<div class="content">
		<ul class="header-nav">
			<li v-for="cate in itemCategory" 
				:class="{active: cate.index == activeIndex}"
				@click="selectItem(cate.index)">
				<span class="item">{{ cate.item }}
				</span>
				<span class="num" 
					v-if="cate.showNum"
					:style="{fontSize:cate.showNum>99?'11px':'13px'}">
					{{ cate.showNum<99?cate.showNum:'99+' }}
				</span>
			</li>
		</ul>
		<!-- 内容列表 -->
		<slot></slot>
		</div>
  	</div>
  </div>
</template>


<script>
export default {
  name: 'UserCenterTemp',
  props: ['title', 'itemCategory', 'activeIndex'],
  data () {
    return {
    }
  },
  methods: {
  	// 1.选择查看的项目
  	selectItem: function (index) {
  		this.$emit('change-active-index', index);
  	},
  },
  mounted () {
  	this.localActivaIndex = this.activeIndex;
  }
};
</script>

<style scoped>
	.user-center-temp {
		padding: 20px 0 0 20px;
	}
	/* 1. 标题 */
	.user-center-temp .title {
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		color: #222;
		padding-left: 20px;
		background: #fff;
		margin-bottom: 20px;
	}
	/* 2.内容区域 */
	.user-center-temp .content {
		width: 1020px;
		/*min-height: 300px;*/
		background: #fff;
		box-sizing: border-box;
	}
	/* 2.1 订单区域顶部的分类导航栏 */
	/* 直接给ul容器清除浮动即可，高度由子元素自动撑开，基本无需再设置其他属性 */
	.user-center-temp .content .header-nav {
		/*border: 1px solid red;*/
		margin-left: 20px;
	}
	.user-center-temp .content .header-nav::after {
		content: '';
		clear: both;
		display: block;
		/*height: 0px;*/
	}
	.user-center-temp .content .header-nav li {
		height: 50px;
		line-height: 50px;
		float: left;
		/*font-size: 18px;*/
		box-sizing: border-box;
		border-bottom: 2px solid #eee;
		color: #424242;
		position: relative;
	}
	.user-center-temp .content .header-nav li .item {
		padding: 0 20px;
		border-left: 1px solid #eee;
	}
	.user-center-temp .content .header-nav li:first-child .item {
		border-left: none;
	}
	.user-center-temp .content .header-nav li:hover {
		color: #ef1234;
		cursor: pointer;
	}
	.user-center-temp .content .header-nav li.active {
		color: #ef1234;
		border-bottom: 2px solid #ef1234;
	}
	.user-center-temp .content .header-nav li .num {
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
</style>