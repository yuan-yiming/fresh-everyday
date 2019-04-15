<template>
	<div class="slide" @mouseenter="changeSlideSwicth" @mouseleave="changeSlideSwicth">
		<span class="slide-left-btn" @click="slideToLeft"></span>
		<span class="slide-right-btn" @click="slideToRight"></span>
		<ul class="slide-bottom-btn">
			<li v-for="image in slideImg" 
			:class="{'current-image': (image.index == currentImgIndex)}"
			@click="changeSlideImg(image.index)"></li>
		</ul>
		<ul v-bind:style="{left: position + 'px'}" class="slide-img">
			<li><img :src="getSlideImgPath('4.jpg')"></li>
			<!-- :style="{backgroundImage: getSlideImgPath(name)}" -->
			<li v-for="image in slideImg"><img :src="getSlideImgPath(image.name)"></li>
			<li><img :src="getSlideImgPath('1.jpg')"></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Slide',
		data () {
			return {
				position: -840,
				slideSwicth: true,
				currentImgIndex: 0,
				slideImg: [
					{
						index: 0,
						name: '1.jpg'
					},
					{
						index: 1,
						name: '2.jpg'
					},
					{
						index: 2,
						name: '3.jpg'
					},
					{
						index: 3,
						name: '4.jpg'
					},
				]
			}
		},
		methods: {
			// 滑动一张轮播图
			playOneStep: function (distance, direction) {
				if (direction == 'left') {
					if (this.position < 0) {
		  			this.position += distance;
		  			if (this.position >= 0) {
		  				this.position = -3360;
		  			}
		  		}
				} else if (direction == 'right') {
					if (this.position > -4200) {
		  			this.position -= distance;
		  			if (this.position <= -4200) {
		  				this.position = -840;
		  			}
		  		}
				}
			},
			// 自动轮播
			autoPlay: function (times, interval,direction) {
				if (this.slideSwicth) {
					var autoSlideDistance = 840;
					var count = 0;
			  		var _play = this.playOneStep;
			  		var timer= setInterval(function () {
			  			_play(autoSlideDistance/times, direction);
			  			count += 1;
			  			if (count >= times) {
			  				clearInterval(timer);
			  			}
			  		}, interval);
				  	if (direction == 'left') {
				  		if (this.currentImgIndex <= 0) {
				  			this.currentImgIndex = 3;
				  		} else {
				  			this.currentImgIndex--;
				  		}
				  	} else if (direction == 'right') {
				  		if (this.currentImgIndex >= 3) {
				  			this.currentImgIndex = 0;
				  		} else {
				  			this.currentImgIndex++;
				  		}
				  	}
				}
			},
			// 轮播图的开关，关掉后不可以自动轮播
			changeSlideSwicth: function () {
				this.slideSwicth = !this.slideSwicth;
			},
			// 获取轮播图路径
			getSlideImgPath: function (name) {
				// return 'url(' + require('../assets/slide-img/' + name + '.jpg') + ')';
				return require('@/assets/main-view-slide-img/' + name) ;
			},
			// 轮播图左边按钮
			slideToLeft: function () {
				this.changeSlideSwicth();
				this.autoPlay(20,20,'left');
				this.changeSlideSwicth();
			},
			// 轮播图右边按钮
			slideToRight: function () {
				this.changeSlideSwicth();
				this.autoPlay(20,20,'right');
				this.changeSlideSwicth();
			},
			// 选择轮播图片
			changeSlideImg: function (index) {
				var difference = index - this.currentImgIndex;
				if (difference > 0) {
					for (var i = 0; i < difference; i++) {
						this.slideToRight();
					}
				} else if (difference < 0) {
					for (var i = 0; i > difference; i--) {
						this.slideToLeft();
					}
				}
				this.currentImgIndex = index;
			},
		},
		// mouted时开始自动轮播
		mounted () {
			var autoPlay = this.autoPlay;
			var timer2 = setInterval(function () {
				autoPlay(20,20,'right');
			},3000);
		},
		computed: {
		}
	};
</script>

<style scoped>
	.slide {
		width: 840px;
		height: 100%;
		float: left;
		overflow: hidden;
		position: relative;
	}
	.slide:hover {
		cursor: pointer;
	}
	/* 轮播图照片部分 */
	.slide ul.slide-img {
		width: 5040px;
		height: 100%;
		position: absolute;
		top: 0;
		/*left: -840px;*/
	}
	.slide ul.slide-img li {
		width: 840px;
		height: 100%;
		float: left;
		box-sizing: border-box;
		/*background-repeat: no-repeat;
		background-size: 840px 420px;*/
	}
	.slide ul.slide-img li img {
		width: 840px;
		height: 100%;
	}
	/* 左轮播图右按钮 */
	.slide .slide-left-btn, 
	.slide .slide-right-btn {
		display: none;
		position: absolute;
		width: 32px;
		height: 64px;
		top: 178px;
		z-index: 1;
		background: rgba(0,0,0,0.3) no-repeat;
		background-size: 32px 32px;
		background-position: 0 16px;
	}
	.slide .slide-left-btn {
		left: 0;
		background-image: url('../assets/icons/slide-base/arrow-left.png');
	}
	.slide .slide-right-btn {
		right: 0;
		background-image: url('../assets/icons/slide-base/arrow-right.png');
	}
	.slide:hover .slide-left-btn, 
	.slide:hover .slide-right-btn {
		display: inline-block;
	}
	/* 轮播图底部按钮 */
	.slide .slide-bottom-btn {
		position: absolute;
		left: 360px;
		bottom: 10px;
		width: 120px;
		height: 20px;
		/*background-color: rgba(0,0,0,0.5);*/
		/*padding: 10px;*/
		z-index: 1;
	}
	.slide .slide-bottom-btn li {
		box-sizing: border-box;
		float: left;
		width: 16px;
		height: 16px;
		margin: 2px;
		background-color: rgba(200,200,200,0.8);
		/*opacity: 0.5;*/
		border-radius: 50%;
		/*border: 2px solid #ddd;*/
		box-shadow: 2px 2px 10px #000;
	}
	.slide .slide-bottom-btn li.current-image {
		width: 56px;
		background-color: #fff;
		border-radius: 25px;
		border: none;
	}
</style>