<template>
	<slide-base 
		:slide-content="slideContent"
		:slide-info="slideInfo"
		@play-one-step="updateOffset">
		<ul v-bind:style="{left: offset + 'px'}" class="slide-content">
			<li><img :src="getSlideImgPath('4.jpg')"></li>
			<li v-for="image in slideContent"><img :src="getSlideImgPath(image.name)"></li>
			<li><img :src="getSlideImgPath('1.jpg')"></li>
		</ul>
	</slide-base>
</template>

<script>
	import SlideBase from '@/components/SlideBase'

	export default {
		name: 'SlideMainView',
		props: [],
		data () {
			return {
				offset: -840,
				slideInfo: {
					slideNum: 4,
					playInterval: 3000,
					width: 840,
					height: 420,
					isAutoPlay: true,
				},
				slideContent: [
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
		components: {
			'slide-base': SlideBase,
		},
		methods: {
			// 获取轮播图路径
			getSlideImgPath: function (name) {
				// return 'url(' + require('../assets/main-view-slide-img/' + name + '.jpg') + ')';
				return require('../assets/main-view/' + name) ;
			},
			updateOffset: function ($event) {
				this.offset = $event;
				// console.log($event);
			},
		}
	};
</script>

<style scoped>
	/* 轮播图轮播内容部分 */
	ul.slide-content {
		width: 5040px;
		height: 100%;
		position: absolute;
		top: 0;
		/*left: -840px;*/
	}
	ul.slide-content li {
		width: 840px;
		height: 100%;
		float: left;
		box-sizing: border-box;
		/*background-repeat: no-repeat;
		background-size: 840px 420px;*/
	}
	ul.slide-content li img {
		width: 840px;
		height: 100%;
	}
</style>