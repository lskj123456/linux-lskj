<template>
	<div>
		<div id="goverInfo"  v-for="(item,index) in govers" :key="index">
			<h3>
				<span>{{item.secName}}</span>
				<span><router-link :to="{path:'more/?id='+item.secId+'&name='+item.secName}"> 更多 》</router-link></span>
			</h3>
			<div class="contain">
				<p v-for="(ite,index) in item.allmessages" :key="index">
					<router-link :to="{path:'/InfoDetail/?id='+ite.allmsgId}">
					{{ite.allmsgTitle}}
					</router-link> 
				</p>
				<!-- <p class="more">
					<span><a href="#">更多 》</a></span>
				</p> -->
			</div>
		</div>

		<!-- <GoverInfoModule
			:govers="govers2"
		>常务会议</GoverInfoModule>

		<GoverInfoModule
			:govers="govers3"
		>政府文件</GoverInfoModule>

		<GoverInfoModule
			:govers="govers4"
		>公示公告</GoverInfoModule> -->

	</div>

</template>
<script>
import GoverInfoModule from "./GoverInfoModule"
export default{
	data(){
		return {
			govers:[],
			allMsg:[],
			id : [],
			govers1:[
				{msg1:"全面开展脱贫攻坚“两队两补”工作",msg2:'',date:''},
				{msg1:"全面开展脱贫攻坚“两队两补”工作",msg2:'',date:''},
				{msg1:"全面开展脱贫攻坚“两队两补”工作",msg2:'',date:''},
				{msg1:"全面开展脱贫攻坚“两队两补”工作",msg2:'',date:''},
				{msg1:"全面开展脱贫攻坚“两队两补”工作",msg2:'',date:''},
			],
			govers2:[
				{msg1:"伊利主持召开省政府第10次常务会议",msg2:'决定实施自贸试验区发展引领性工程',date:'（08月24日）'},
				{msg1:"伊利主持召开省政府第10次常务会议",msg2:'决定实施自贸试验区发展引领性工程',date:'（08月24日）'},
				{msg1:"伊利主持召开省政府第10次常务会议",msg2:'决定实施自贸试验区发展引领性工程',date:'（08月24日）'},
				{msg1:"伊利主持召开省政府第10次常务会议",msg2:'决定实施自贸试验区发展引领性工程',date:'（08月24日）'},
				{msg1:"伊利主持召开省政府第10次常务会议",msg2:'决定实施自贸试验区发展引领性工程',date:'（08月24日）'},
			],
			govers3:[
				{msg1:"xx省政府办公厅关于加强企业创新主体培育的指导意见",msg2:'',date:'（09月07日）'},
				{msg1:"xx省政府办公厅关于加强企业创新主体培育的指导意见",msg2:'',date:'（09月07日）'},
				{msg1:"xx省政府办公厅关于加强企业创新主体培育的指导意见",msg2:'',date:'（09月07日）'},
				{msg1:"xx省政府办公厅关于加强企业创新主体培育的指导意见",msg2:'',date:'（09月07日）'},
				{msg1:"xx省政府办公厅关于加强企业创新主体培育的指导意见",msg2:'',date:'（09月07日）'},
			],
			govers4:[
				{msg1:"xx省旅游局发展委员会关于“黄金周”地方接待旅游花费抽样调查项目比选结果...",msg2:'',date:'（09月07日）'},
				{msg1:"xx省旅游局发展委员会关于“黄金周”地方接待旅游花费抽样调查项目比选结果...",msg2:'',date:'（09月07日）'},
				{msg1:"xx省旅游局发展委员会关于“黄金周”地方接待旅游花费抽样调查项目比选结果...",msg2:'',date:'（09月07日）'},
				{msg1:"xx省旅游局发展委员会关于“黄金周”地方接待旅游花费抽样调查项目比选结果...",msg2:'',date:'（09月07日）'},
				{msg1:"xx省旅游局发展委员会关于“黄金周”地方接待旅游花费抽样调查项目比选结果...",msg2:'',date:'（09月07日）'},
			]
		}
	},
	methods:{
		getMsg(){
			this.$axios.get('/leading/getFirstSectionsTwoAndThree187').then(res => {
				console.log(res)
				this.govers = res.data.data.sections
			})
		},
		// getAllmsg(){
		// 	this.$axios.get('/leading/getFirstSectionsTwoAndThree187').then(res => {
		// 		console.log(res)
		// 		this.govers = res.data.data.sections
		// 	})
		// }
	},
	created(){
		this.getMsg()
		// this.getAllmsg()
	},
	components:{
		GoverInfoModule
	}
}
</script>
<style>
h3{
	margin:0;
	background: #eee;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
h3 span:first-child{
	color: #fff;
	background: #cb0f0e;
	padding:15px;
}
h3 span:last-child{
	font-weight: normal;
	font-size: 14px;
	padding: 0 20px;
}
a{
	text-decoration: none;
	color: #2c3e50;
}
.contain p a{
	display: flex;
	justify-content: space-between;
	
}
.contain p a:hover{
	color:#cb0f0e;
} 
.more{
	display: flex;
	justify-content: flex-end;
}
.more:hover{
	color: red;
}
.date{
	color: #a3a3a3;
}
</style>