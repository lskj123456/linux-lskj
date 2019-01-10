<style scoped>
a{
	text-decoration: none;
	color: #2c3e50;
}
a:hover{
	color: #cb0f0e;
}
.news{
	border-bottom:  1px solid #000;
}
h3{
	margin:0;
	padding: 10px 15px;
	margin-right: 30px;
	background: #f2f2f2;
}
.msgRow{
	padding:15px 0;
	border-bottom:  1px solid #000;
	display: flex;
	justify-content: space-between;
}
.msgRow:last-child{
	border:none;
}
.msgRow>div{
	width: 45%;
}
</style>
<template>
<div class="serve">
	<div class="news">
		<ServeModule :datas="news">最新公开消息</ServeModule>

	</div>
	<div class="msgRow">
		<ServeModule :datas="powers">行政权力运行</ServeModule>
		<ServeModule :datas="moneys">财政资金</ServeModule>
		
	</div>
	<div class="msgRow">
		<ServeModule :datas="pz">公共资源配置</ServeModule>
		<ServeModule :datas="xm">重大项目</ServeModule>
		
	</div>
	<div class="msgRow">
		<ServeModule :datas="fw">公共服务</ServeModule>
		<ServeModule :datas="qy">国有企业</ServeModule>
	</div>
	<div class="msgRow">
		<ServeModule :datas="aq">食品药品安全</ServeModule>
		<ServeModule :datas="bh">环境保护</ServeModule>
	</div>
</div>

</template>
<script>
import ServeModule from "./ServeModule"
export default{
	data(){
		return {
			msg:[],
			news:[
				{msg:'xx高质量推进自贸试验区建设   引领全域开放'},
				{msg:'xx高质量推进自贸试验区建设   引领全域开放'},
				{msg:'xx高质量推进自贸试验区建设   引领全域开放'},
				{msg:'xx高质量推进自贸试验区建设   引领全域开放'},
				{msg:'xx高质量推进自贸试验区建设   引领全域开放'},
			],
			powers:[
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
			],
			moneys:[
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
			],
			pz:[
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
			],
			xm:[
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
			],
			fw:[
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
			],
			qy:[
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
			],
			aq:[
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
			],
			bh:[
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
				{msg:'xx专题研究一体化政务服务平台建设工作'},
			]
		}
	},
	methods:{
		getMsg(){
			this.$axios.get('/leading/getFirstSectionsTwoAndThree219').then(res => {
				console.log(res)
			})
		}
		// 	  this.$axios.get('/leading/getAllMsgOfSecIdOfFive193').then(res => {
		// 		  console.log(res)
		// 	  })
		// }
	},
	created(){
		this.getMsg()
	},
	components:{
		ServeModule
	}
}
</script>
