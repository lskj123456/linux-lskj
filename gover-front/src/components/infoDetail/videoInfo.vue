<style scoped>

.head{
	text-align: center;
	font-weight: bold;
	font-size: 30px;
	margin:20px 0;
}
#bread >>>.el-breadcrumb__item:last-child .el-breadcrumb__inner{
	color: red;
}

.edit{
	display: flex;
	justify-content: space-between;
	margin: 10px 0;
	padding: 10px 0;
	border-bottom: 1px solid #000000;
}
.edit .sty{
	margin: 0  20px;;
}
.edit .sty:last-child{
	margin: 0 20px 0 0;
}
.zt{
	margin: 0 5px;
}
.zt:hover{
	color: red;
	cursor: pointer;
}
i{
	font-size: 20px;
}
.contain{
	padding: 30px 15px;
}
</style>
<template>
<div class="detail">
	 <el-breadcrumb separator-class="el-icon-arrow-right" id="bread">
	  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
	  <el-breadcrumb-item>政务信息</el-breadcrumb-item>
	  <el-breadcrumb-item>信息详情</el-breadcrumb-item>
	</el-breadcrumb>
<!-- 	<p class="bread">
		<span>首页 > </span>
		<span>政务信息 > </span>
		<span>信息详情 > </span>
	</p>  -->
	<header class="head">{{data1.highEndInterviewTitle}}</header>
	<div class="edit">
		<div>
			<span class="sty">{{data1.highEndInterviewCreatetime}}</span>
			<span class="sty">来源：经济日报</span>
		</div>
		<div>
			<span class="sty">
				<span>【 字体：</span>
				<span class="zt">大</span>
				<span class="zt">中</span>
				<span class="zt">小</span>
				<span>】</span>
			</span>
			<i class="el-icon-message zt"></i>
			<span class="sty zt">打印</span>
			<i class="el-icon-share zt"></i>
			<span class="sty zt">[微博]</span>
			<span class="sty zt">[微信]</span>
		</div>
	</div>

	<div class="contain">
		<p></p>
	</div>
	<div>
		<video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player>

	</div>
	<!-- <div>
		<el-dialog :visible.sync="detialPlayVideo" @close="closePlay">
			<VideoTest :video-url="videoUrl" :state="state"></VideoTest>
		</el-dialog>
	</div> -->
</div>

</template>
<script>
// import VideoTest from './VideoTest'
export default{
	data(){
		return {
            data1:[],
			id:this.$route.query.videoId,
				 // 视频播放
	      playerOptions : {
	        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
	        autoplay: false, //如果true,浏览器准备好时开始回放。
	        muted: false, // 默认情况下将会消除任何音频。
	        loop: false, // 导致视频一结束就重新开始。
	        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
	        language: 'zh-CN',
	        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
	        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
	        sources: [{
	          type: "video/mp4",
	          // type: "video/qlv",
	          src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'//url地址
	          // src: 'http://www.html5videoplayer.net/videos/madagascar3.mp4'//url地址
	          // src: "" //url地址
	        }],
	        poster: "", //你的封面地址
	        // width: document.documentElement.clientWidth,
	        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
	        controlBar: {
	          timeDivider: true,
	          durationDisplay: true,
	          remainingTimeDisplay: false,
	          fullscreenToggle: true  //全屏按钮
	        }
	   	  }
		}
    },
    methods:{
        getMes(){
			this.$axios.post('highEndInterview/highEndInterviewupdateselect/selectHighEndInterviewByID',this.$qs.stringify({highEndInterviewId:this.id})).then(res => {
                console.log(res)
                this.data1 = res.data.data.highEndInterview
                this.playerOptions.sources[0].src= res.data.data.highEndInterview.highEndInterviewVideoUrl
            })
		}
    },
	created(){
        this.getMes()
		console.log(this.$route.query.videoId)
		this.playerOptions.sources[0].src=' http://192.168.0.120:8102/upload/10a259eb5d414f72b977b21b000384da.mp4'
		// console.log(this.playerOptions.sources[0])
	},
	// watch: {
	// 	videoUrl: function (val) {
	// 		// const myPlayer = this.$refs.videoPlayer.player
	// 		if (val !== '') {
	// 			this.$refs.videoPlayer.player.src(val)
	// 		}
	// 	},
	// 	state: function (val) {
	// 		if (val) {
	// 			this.$refs.videoPlayer.player.pause()
	// 		}
	//   }
	// }
}
</script>
