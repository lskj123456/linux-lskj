<style scoped>

.head{
	text-align: center;
	font-weight: bold;
	font-size: 24px;
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
.imgBox{
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
<template>
<div class="detail">
	 <el-breadcrumb separator-class="el-icon-arrow-right" id="bread">
	  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
	  <el-breadcrumb-item :to="{ path: '/interaction/tongjiMsg' }">统计留言</el-breadcrumb-item>
	  <el-breadcrumb-item>统计留言详情</el-breadcrumb-item>
	</el-breadcrumb> 
	<header class="head">{{data.mesStaTitle}}</header>
	<div class="edit">
		<div>
			<span class="sty">{{data.mesStaCreatetime}}</span>
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
		<!-- //测试 -->
			<div class="ql-container ql-snow">
	            <div class="ql-editor" v-html="data.mesStaContents">
	            </div>
	        </div>
	</div>

</div>

</template>
<script>
export default{
	data(){
		return {
			data:[],
			mesStaId: this.$route.query.id
		}
	},
	created(){
		//测试
		this.$axios.post('messageStatistics/msgstadeleteselect/getMessageStatisticsById',this.$qs.stringify({mesStaId:this.mesStaId})).then(res=>{
			console.log(res);
			this.data = res.data;
			// this.data = arr[arr.length-1].concern_content

		}).catch(res=>{console.log(res)})
	}
}
</script>
