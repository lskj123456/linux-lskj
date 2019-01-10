<style scoped>
.tHead{
	margin:0;
	padding: 15px;
	border-bottom: 1px solid #000;
}
#bread >>>.el-breadcrumb__item:last-child .el-breadcrumb__inner{
	color: red;
}
.contain{
	padding:20px 20px 60px 20px;

}
.contain span{
	padding: 30px;
}
a{
	text-decoration: none;
	color:#222222;
}
a:hover{
	color: red;
}
</style>
<template>
<div class="msg">
	<p class="tHead">
		<el-breadcrumb separator-class="el-icon-arrow-right" id="bread">
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item :to="{ path: '/interaction' }">互动交流</el-breadcrumb-item>
		  <el-breadcrumb-item>统计留言</el-breadcrumb-item>
		</el-breadcrumb> 
	</p>
	<div class="contain">
		<p v-for="(item,index) in datas" :key="index">
			<router-link :to="{path:'/interaction/tongjiDetail/?id='+ item.mesStaId}">
				<span v-html="item.mesStaTitle"></span>
				<span>{{item.date}}</span>
			</router-link>
		</p>
	</div>

</div>

</template>
<script>

export default{
	data(){
		return {
			datas:[
			{msg:'2018年8月份留言数量分布情况',date:'2018-09-01'},
			{msg:'2018年8月份留言数量分布情况',date:'2018-09-01'},
			{msg:'2018年8月份留言数量分布情况',date:'2018-09-01'},
			{msg:'2018年8月份留言数量分布情况',date:'2018-09-01'},
			]
		}
	},
	methods:{
		getMsg(){
			this.$axios.get('/leading/getAllMessageStatisticsqqqqq').then(res => {
				console.log(res)
				this.datas = res.data.data
				console.log(this.datas)
			})
		}
		
	},
	created(){
		this.getMsg()
	},
	components:{
		
	}
}
</script>
