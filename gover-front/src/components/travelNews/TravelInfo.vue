<style scoped>
a{
	text-decoration: none;
	color: #2c3e50;
}
a:hover{
	color: #409EFF;
}
/*h3{
	margin:0;
	padding: 10px 0px;
	margin-right: 30px;
	background: #f2f2f2;
	border-bottom: 1px solid #000;
}*/
h3{
	margin:0;
	padding:15px 0 15px;
	background: #f2f2f2;
}
h3 span{
	color: #fff;
	background: #cb0f0e;
	padding:15px;
}
.row{
	display: flex;
}

.row>div{
	flex: 1;
	padding:0px 20px;
}
.bdr{
	display: flex;
	height: 200px;
	align-items: center;
	justify-content: space-around;
}
.bdr div{
	width: 252px;
	height:100px;
	line-height: 100px;
	background: #ecf8ff;
	float: left;
	text-align: center;
}
.content a p{
	display: flex;
	justify-content: space-between;
	padding-right: 30px;
}
.more{
	margin: 10px 30px;
	display: flex;
	justify-content: flex-end;
}
</style>
<template>
<div class="travel">
	<!-- 本地美景 -->
	<ImgModule
		:imgs='img1'
	>{{img1Msg.secName}}</ImgModule>
	<!-- 本地美食 -->
	<ImgModule
		:imgs='img2'
	>{{img2Msg.secName}}</ImgModule>
	<!-- 旅游推荐 -->
	<Tuijian
		:travels="travels"
		:travelsMsg="travelsMsg"
	>{{travelsMsg.secName}}</Tuijian>

<!-- 投诉建议 -->
	<div class="row">
		<div>
			<h3><span>{{tsMsg.secName}}</span></h3>
			<div class="content bdr">
				<div v-for="(item,index) in ts" :key="index">
					<router-link :to="{path:'/InfoDetail/?id='+item.allmsgId}">
						{{item.allmsgTitle}}
					</router-link>
				</div>		
			</div>
		</div>
		<div>
<!-- 旅游锦囊 -->
			<Jinnang
				:jinnangs="jinnangs"
				:jinnangsMsg = "jinnangsMsg"
			>{{jinnangsMsg.secName}}</Jinnang>
		</div>
	</div>
</div>

</template>
<script>
import ImgModule from "./module/ImgModule"
import Tuijian from "./module/Tuijian"
import Jinnang from "./module/Jinnang"
export default{
	data(){
		return {
			img1:[
				// {url:require('@/assets/img1.jpg'),msg:'青城山'},
				// {url:require('@/assets/img2.jpg'),msg:'九寨沟'},
				// {url:require('@/assets/img3.jpg'),msg:'峨眉山'},
				// {url:require('@/assets/img4.jpg'),msg:'都江堰'},
			],
			img1Msg:[],
			img2:[],
			img2Msg:[],
			travels:[
				{msg:'成都成为节后错峰游十大热门目的地之一'},
				{msg:'西岭雪山南国冰雪节即将开幕'},
				{msg:'成都成为节后错峰游十大热门目的地之一'},
				{msg:'西岭雪山南国冰雪节即将开幕'},
				{msg:'成都成为节后错峰游十大热门目的地之一'},
				{msg:'西岭雪山南国冰雪节即将开幕'},
				{msg:'成都成为节后错峰游十大热门目的地之一'},
				{msg:'西岭雪山南国冰雪节即将开幕'},
			],
			travelsMsg:[],
			ts:[],
			tsMsg:[],
			jinnangs:[
				// {msg:'康巴风情探秘'},
				// {msg:'天府美食荟萃'},
				// {msg:'天府古镇漫步'},
				// {msg:'特色旅游揽胜'},
				// {msg:'世界遗产及大熊猫之旅'},
			],
			jinnangsMsg:[]
		}
	},
	methods:{
		getMes(){
			//本地美景
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive202').then(res => {
				console.log(res)
				this.img1 = res.data.data.allmessages
				this.img1Msg = res.data.data
			})
			//本地美食
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive203').then(res => {
				console.log(res)
				this.img2 = res.data.data.allmessages
				this.img2Msg = res.data.data
			})
			//旅游推荐
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive204').then(res => {
				//console.log(res)
				this.travels = res.data.data.allmessages
				this.travelsMsg = res.data.data
				// this.img1 = res.data.data.allmessages
			})
			//投诉建议
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive205').then(res => {
				console.log(res)
				this.ts = res.data.data.allmessages
				this.tsMsg = res.data.data
			})
			//旅游锦囊
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive206').then(res => {
				console.log(res)
				this.jinnangs = res.data.data.allmessages
				this.jinnangsMsg = res.data.data
			})
		}
	},
	created(){
		this.getMes()
	},
	components:{
		ImgModule,Tuijian,Jinnang
	}
}
</script>
