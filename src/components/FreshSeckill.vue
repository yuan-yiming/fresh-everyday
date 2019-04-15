<template>
  <div id="fresh-seckill">
  	<div class="container">
  		<div class="seckill-header">
  			<ul class="time-table">
  				<li v-for="period in timeTable" :class="{active: period.isActive}" @click="activateSeckill(period.index)">
  					<i :style="{backgroundImage: getTimeIconPath(period)}" class="time-icon"></i>
  					<p class="title">{{ period.title }}</p>
  					<p class="time">{{ period.time }}</p>
  				</li>
  			</ul>
  			<div class="count-down">
  				<p>{{ countDownTitle }}</p>
  				<ul class="time">
  					<li v-for="time in countDown" :class="{current: timeTable[currentIndex].isCurrent}">
  						<span class="time-line"></span>
	  					<span class="time-number">{{ time }}</span>
	  				</li>
  				</ul>
  			</div>
  		</div>
  		<div class="seckill-content">
  			<span class="temp-block left-block"></span>
			<span class="temp-block right-block"></span>
			<slide-seckill/>
		</div>
  	</div>
  </div>
</template>

<script>
import Vue from 'vue' 
// import SeckillContent from '@/components/SeckillContent'
import SlideSeckill from '@/components/SlideSeckill'

export default {
	name: 'FreshSeckill',
	components: {
		'slide-seckill': SlideSeckill,
	},
	data () {
		return {
			timer: null,
			countDown: [],
			// computedCountDown: [],
			countDownTitle: '距离本场结束还有',
			currentIndex: 0,
			timeTable: [
				{
					index: 0,
					title: '早市抢鲜中',
					time: '08:00 - 14:00',
					iconName: 'morning',
					isActive: false,
					isCurrent: false,
				},
				{
					index: 1,
					title: '午市抢鲜中',
					time: '14:00 - 20:00',
					iconName: 'noon',
					isActive: false,
					isCurrent: false,
				},
				{
					index: 2,
					title: '晚市抢鲜中',
					time: '20:00 - 08:00',
					iconName: 'night',
					isActive: false,
					isCurrent: false,
				},
			],
		}
	},
	methods: {
		// #2 页面加载时，更新当前抢鲜市场情况？
		updateSeckill: function () {
		  	var now = new Date();
		  	var hour = now.getHours();
		  	if (hour < 8) {
		  		this.timeTable[2].isActive = true;
		  		this.timeTable[2].isCurrent = true;
					this.timeTable[0].title = '早市未开始';
		  		this.timeTable[1].title = '午市未开始';
			  	this.currentIndex = 2;
		  	} else if (hour < 14) {
		  		this.timeTable[0].isActive = true;
		  		this.timeTable[0].isCurrent = true;
		  		this.timeTable[1].title = '午市未开始';
		  		this.timeTable[2].title = '晚市未开始';
		  		this.currentIndex = 0;
		  	} else if (hour < 20) {
		  		this.timeTable[1].isActive = true;
		  		this.timeTable[1].isCurrent = true;
		  		this.timeTable[0].title = '早市已结束';
		  		this.timeTable[2].title = '晚市未开始';
		  		this.currentIndex = 1;
		  	} else {
		  		this.timeTable[2].isActive = true;
		  		this.timeTable[2].isCurrent = true;
		  		this.timeTable[0].title = '早市已结束';
		  		this.timeTable[1].title = '午市已结束';
		  		this.currentIndex = 2;
		  	}
		},
		// #3 更新倒计时牌子
		updateCountDownNumber: function (index) {
			// endTime表示当场秒杀结束时间 		
			var startTime, endTime, tempArr, now, hour, min, sec;

			// 获取当前时间
			now = this.getThisMoment();
			hour = now[0];
			min = now[1];
			sec = now[2];

			// 将当前时间与startTime/endTime做对比
			// 选择时早市判断
			if (index == 0) {
				startTime = 8;
				endTime = 14;
				if (hour < startTime) {
					this.getCountDown(startTime);
	  			this.countDownTitle = '距离本场开始还有';
				} else if (hour < endTime) {
					this.getCountDown(endTime);
	  			this.countDownTitle = '距离本场结束还有';
				} else {
					this.countDown = ['00', '00', '00'];
					this.countDownTitle = '本场秒杀已经结束';
				}
			// 午市
			} else if (index == 1) {
				startTime = 14;
				endTime = 20;
				if (hour < startTime) {
					this.getCountDown(startTime);
	  			this.countDownTitle = '距离本场开始还有';
				} else if (hour < endTime) {
					this.getCountDown(endTime);
	  			this.countDownTitle = '距离本场结束还有';
				} else {
					this.countDown = ['00', '00', '00'];
					this.countDownTitle = '本场秒杀已经结束';
				}
			// 晚市
			} else {
				startTime = 20;
				endTime = 8;
				if (hour < 8) {
					this.getCountDown(endTime);
	  			this.countDownTitle = '距离本场结束还有';
				} else if (hour < startTime) {
					this.getCountDown(startTime);
	  			this.countDownTitle = '距离本场开始还有';
				} else {
					this.getCountDown(32);
	  			this.countDownTitle = '距离本场结束还有';
				}
			}
		},
		// #4 改变index、改变图标颜色
		// 点击选中某次抢鲜市场：
		activateSeckill: function (index) {
			// 使图标和时间信息处于激活状态
			for (var i = 0; i < 3; i++) {
				this.timeTable[i].isActive = false;
			}
			this.timeTable[index].isActive = true;
			this.currentIndex = index;
		},
		// 获取当前时刻的时间
		getThisMoment: function () {
			var moment = new Date(),
			h = moment.getHours(),
			m = moment.getMinutes(),
			s = moment.getSeconds();
		return [h, m, s];
		},
		// 获取当前秒杀市场的索引
		getIndex: function () {
			return this.currentIndex;
		},
		// 获取当前选中市场与的给定时间点的时间差，并更新data数据
		getCountDown: function (hour) {
			var tempArr,
			now = this.getThisMoment(),
			h = hour - 1 - now[0] , 
			m = 59 - now[1],
			s = 59 - now[2];
			// return 
			if (h > 24) {
				h = h -24;
			}
			tempArr = [h > 9 ? h : '0' + h, m > 9 ? m : '0' + m, s > 9 ? s : '0' + s];

			Vue.set(this, 'countDown', tempArr);
			// console.log(this.countDown);
		},
		// 获取icon路径
		getTimeIconPath: function (obj) {
			var iconName = obj.isActive ? obj.iconName + '-active' : obj.iconName;
			return 'url(' + require('../assets/fresh-seckill/icons/' + iconName + '.png') + ')';
		},
	},
	// #1 钩子函数：创建timer
	created () {
		this.updateSeckill();
		var updateCountDownNumber = this.updateCountDownNumber;
		var getIndex = this.getIndex;
		updateCountDownNumber(getIndex());
		this.timer = setInterval(function () {
			updateCountDownNumber(getIndex());
			if (true) {}
		}, 1000);
	},
	// 钩子函数：销毁timer
	beforeDestroy () {
		clearInterval(this.timer);
	},
};
</script>

<style scoped>
	#fresh-seckill {
		width: 100%;
		height: 570px;
	}
	#fresh-seckill .container {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		padding-top: 40px;
		/*background-color: #e55;*/
	}
	/* 生鲜秒杀顶部 */
	#fresh-seckill .seckill-header {
		height: 80px;
		width: 100%;
		background-color: rgba(0,0,0,0.8);
		border-top-left-radius: 40px;
		position: relative;
	}
	/* 生鲜秒杀 时间段 */
	#fresh-seckill .seckill-header .time-table {
		width: 720px;
		height: 100%;
		margin-left: 60px;
	}
	#fresh-seckill .seckill-header .time-table li {
		float: left;
		width: 180px;
		height: 100%;
		/*border: 1px solid green;*/
		box-sizing: border-box;
		position: relative;
		padding: 16px 0 0 60px;
		margin-right: 40px;
		line-height: 24px;
		color: #999;
	}
	#fresh-seckill .seckill-header .time-table li:hover {
		cursor: pointer;
	}
	#fresh-seckill .seckill-header .time-table li.active {
		color: #12ab34;
	}
	#fresh-seckill .seckill-header .time-table li .time-icon {
		position: absolute;
		width: 40px;
		height: 40px;
		top: 20px;
		left: 10px;
		background-size: 40px;
		/*background-color: blue;*/
	}
	#fresh-seckill .seckill-header .time-table li .time {
		font-size: 14px;
	}
	/* 秒杀倒计时 */
	#fresh-seckill .seckill-header .count-down {
		position: absolute;
		top: -20px;
		right: 10px;
		height: 90px;
		width: 340px;
		background-color: #12ab34;
		border-radius: 0 0 40px 40px;
		text-align: center;
	}
	#fresh-seckill .seckill-header .count-down p {
		color: #fff;
		font-size: 12px;
		margin-top: 10px;
	}
	#fresh-seckill .seckill-header .count-down .time {
		width: 240px;
		height: 50px;
		margin: 10px auto;
		/*background-color: red;*/
	}
	#fresh-seckill .seckill-header .count-down .time li {
		float: left;
		height: 42px;
		line-height: 42px;
		width: 50px;
		margin: 0 15px;
		background-color: rgba(0,0,0,0.3);
		font-size: 36px;
		color: #fff;
		position: relative;
		/*opacity: 0.5;*/
	}
	#fresh-seckill .seckill-header .count-down .time li:nth-child(1)::after,
	#fresh-seckill .seckill-header .count-down .time li:nth-child(2)::after {
		content: ':';
		position: absolute;
		display: inline-block;
		width: 30px;
		height: 50px;
		top: 0;
		left: 50px;
		color: rgba(0,0,0,0.3);
		/*background-color: red;*/
	}
	#fresh-seckill .seckill-header .count-down .time li.current {
		background-color: rgba(34,34,34);
	}
	#fresh-seckill .seckill-header .count-down .time li.current:nth-child(1)::after,
	#fresh-seckill .seckill-header .count-down .time li.current:nth-child(2)::after {
		color: #222;
	}
	#fresh-seckill .seckill-header .count-down .time li .time-line {
		position: absolute;
		left: 0;
		top: 20px;
		width: 50px;
		height: 2px;
		background-color: #12ab34;
	}
	#fresh-seckill .seckill-header .count-down .time li .time-number {
		position: absolute;
		left: 0;
		top: 0;
		width: 50px;
		height: 42px;
		/*background-color: #12ab34;*/
	}
	/* 生鲜秒杀内容区 */
	#fresh-seckill .seckill-content {
		box-sizing: border-box;
		border: 10px solid #666;  
		border-top: none;
		height: 450px;
		width: 100%;
		position: relative;
		/*padding-top: 80px;*/
	}
	#fresh-seckill .seckill-content .temp-block {
		display: inline-block;
		width: 40px;
		height: 100%;
		position: absolute;
		top: 0;
		background-color: #fff;
		z-index: 1;
	}
	#fresh-seckill .seckill-content .left-block {
		left: 0;
	}
	#fresh-seckill .seckill-content .right-block {
		right: 0;
	}
</style>