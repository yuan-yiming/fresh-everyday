<template>
	<div class="slide" 
		:style="{
			width: slideInfo.width + 'px',
			height: slideInfo.height + 'px'
			}"
		@mouseenter="changeSlideSwicth" 
		@mouseleave="changeSlideSwicth">
		<span class="side-btn slide-left-btn" 
			:class="{'is-always-showed': slideInfo.isAlwaysShowedSideBtn}"
			:style="{top: slideInfo.height * 0.5 - 32 + 'px', left: slideInfo.sideBtnPositionX + 'px'}"
			@click="slideTo('left')">
		</span>
		<span class="side-btn slide-right-btn"
			:class="{'is-always-showed': slideInfo.isAlwaysShowedSideBtn}"
			:style="{top: slideInfo.height * 0.5 - 32 + 'px', right: slideInfo.sideBtnPositionX + 'px'}" 
			@click="slideTo('right')">
		</span>
		<ul class="slide-bottom-btn" 
			:style="{
				left: slideInfo.width * 0.5 - 60 + 'px'
			}">
			<!-- .slice(1, slideInfo.slideNum + 1) -->
			<li v-for="image in slideContent"  
			:class="{'current-image': (image.index == currentImgIndex)}"
			@click="selectSlideContent(image.index)"></li>
		</ul>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'Slide',
		props: ['slideInfo', 'slideContent', 'sideBtnInfo', 'bottomBtnInfo'],
		data () {
			return {
				offset: 0,
				slideSwicth: true,
				currentImgIndex: 0,
				autoTimer: null,
				// isAutoPlay: true,
			}
		},
		methods: {
			// 轮播图移动一帧动画
			playOneFrame: function (distance, direction) {
				// 最右边的轮播的图片的offset
				var rightMostOffset = -this.slideInfo.width * (this.slideInfo.slideNum + 1);
				// console.log(rightMostOffset);
				if (direction == 'left') {
					// this.offset < 0: 表示当前轮播的图片不是最左边的,则可以向左运动(图片顺序4,1,2,3,4,1)
					if (this.offset < 0) {
			  			this.offset += distance;
			  			// 每次运动完都要判断一下轮播图片是否到达了最左边(图片顺序4,1,2,3,4,1)
			  			if (this.offset >= 0) {
			  				// 表示如果轮播图片到达了最左边,则跳到右边倒数第2张图(图片顺序4,1,2,3,4,1)
			  				this.offset = -this.slideInfo.width * this.slideInfo.slideNum;
			  			}
			  		}
				} else if (direction == 'right') {

					// console.log('rightMostOffset:' + rightMostOffset);
					// 表示当前轮播的图片不是最右边的,则可以向右运动(图片顺序4,1,2,3,4,1)
					if (this.offset > rightMostOffset) {
			  			this.offset -= distance;
			  			// 每次运动完都要判断一下轮播图片是否到达了最右边(图片顺序4,1,2,3,4,1)
			  			if (this.offset <= rightMostOffset) {
			  				// 表示如果轮播图片到达了最左边,则跳到左边第2张图(图片顺序4,1,2,3,4,1)
			  				this.offset = -this.slideInfo.width;
			  			}
			  		}
				}
				this.$emit('play-one-step', this.offset);
			},
			// 轮播图自动轮播一张图片
			playOneImg: function (times, interval, direction) {
				if (this.slideSwicth) {
					// console.log(this.offset);
					var autoSlideDistance = this.slideInfo.width;
					var count = 0;
			  		var playOneFrame = this.playOneFrame;
			  		var lastSlideIndex = this.slideInfo.slideNum - 1;
			  		var timer = setInterval(function () {
			  			playOneFrame(autoSlideDistance/times, direction);
			  			count += 1;
			  			if (count >= times) {
			  				clearInterval(timer);
			  			}
			  		}, interval);
			  		// 改变下面按钮
				  	if (direction == 'left') {
				  		if (this.currentImgIndex <= 0) {
				  			this.currentImgIndex = lastSlideIndex;
				  		} else {
				  			this.currentImgIndex--;
				  		}
				  	} else if (direction == 'right') {
				  		if (this.currentImgIndex >= lastSlideIndex) {
				  			this.currentImgIndex = 0;
				  		} else {
				  			this.currentImgIndex++;
				  		}
				  	}
				}
			},
			// 轮播图开关，打开开关才可以轮播图片
			changeSlideSwicth: function () {
				this.slideSwicth = !this.slideSwicth;
			},
			// 轮播图左右两边按钮
			slideTo: function (direction) {
				this.changeSlideSwicth();
				// console.log('slideto' + direction);
				this.playOneImg(20,20,direction);
				this.changeSlideSwicth();
			},
			// 轮播图底部按钮
			selectSlideContent: function (index) {
				var difference = index - this.currentImgIndex;
				if (difference > 0) {
					for (var i = 0; i < difference; i++) {
						this.slideTo('right');
					}
				} else if (difference < 0) {
					for (var i = 0; i > difference; i--) {
						this.slideTo('left');
					}
				}
				this.currentImgIndex = index;
			},
		},
		mounted () {
			this.offset = -this.slideInfo.width;
			if (this.slideInfo.isAutoPlay) {
				var playOneImg = this.playOneImg;
				this.autoTimer = setInterval(function () {
					playOneImg(20,20,'right');
				},3000);
			}
		},
		// 销毁轮播图定时器
		beforeDestroy () {
			clearInterval(this.autoTimer);
			// console.log(typeof this.autoTimer);
		},
		computed: {
		}
	};
</script>

<style scoped>
	.slide {
		/*width: 840px;*/
		/*height: 100%;*/
		float: left;
		overflow: hidden;
		position: relative;
	}
	.slide .side-btn:hover, 
	.slide .slide-bottom-btn:hover {
		cursor: pointer;
	}

	/* 左轮播图右按钮 */
	.slide .side-btn {
		display: none;
		position: absolute;
		width: 32px;   
		height: 64px;  

		z-index: 2;
		background: rgba(0,0,0,0.2) no-repeat;
		background-size: 32px 32px; 
		background-position: 0 16px;  
	}
	.slide .is-always-showed {
		display: inline-block;
	}
	.slide .slide-left-btn {
		left: 0;
		background-image: url('../assets/slide-base/arrow-left.png');
	}
	.slide .slide-right-btn {
		right: 0;
		background-image: url('../assets/slide-base/arrow-right.png');
	}
	.slide:hover .side-btn {
		display: inline-block;
	}
	/* 轮播图底部按钮 */
	.slide .slide-bottom-btn {
		position: absolute;
		/*left: 360px; */   /*42.5%*/
		bottom: 10px;   /*0.025%*/
		width: 120px;   /*15%*/
		height: 20px;   /*0.05%*/
		/*background-color: rgba(0,0,0,0.5);*/
		/*padding: 10px;*/
		z-index: 2;
	}
	.slide .slide-bottom-btn li {
		box-sizing: border-box;
		float: left;
		width: 16px;   /*0.05% -4*/
		height: 16px;  /*0.05% -4*/
		margin: 2px;
		background-color: rgba(200,200,200,0.8);
		/*opacity: 0.5;*/
		border-radius: 50%;
		/*border: 2px solid #ddd;*/
		box-shadow: 2px 2px 10px #000;   /*定制的*/
	}
	.slide .slide-bottom-btn li.current-image {
		width: 56px;   /*15%-0.05%-4*/
		background-color: #fff;
		border-radius: 25px;
		border: none;
	}
</style>