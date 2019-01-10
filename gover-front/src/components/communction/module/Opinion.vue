<style scoped>
a{
	text-decoration: none;
	color: #2c3e50;
}
h3{
	margin:0;
	padding:15px;
	background: #f2f2f2;
}
h3 span{
	color: #fff;
	background: #cb0f0e;
	padding:15px;
}
.msgTitle{
	margin: 10px 0px;
}

.msgTitle span{
	padding:  10px 30px;
	font-size: 16px;
	font-weight: bold;
    cursor: pointer;
}
.msgTitle span:hover{
	color: #409EFF;

}
.msgDetail{
	padding: 0 30px;
	font-size: 14px;
}
.msgHead{
	font-size: 16px;

}
.msgDetail p{
	display: flex;
	justify-content: space-between;
}
</style>
<template>
<div class="opinion">
	<h3><span><slot></slot></span></h3>
	
	<div class="msgTitle">
		<!-- <a href="/InfoDetail"><span>我要留言</span></a> -->
		<span @click="funcMsg('/interaction/LeaveMsg')">我要留言</span>
		<span @click="funcMsg('/interaction/doMsg')">留言办理</span>
		<span @click="funcMsg('/interaction/tongjiMsg')">留言统计</span>
		
	</div>

	<div class="msgDetail" v-for="(item,index) in data1" :key="index" v-if="index<5">
		<div class="msgHead">{{item.name}}</div>
		<a href="#">
			<p>
				<span>{{item.mesStaTitle}}</span>
				<span>{{item.mesStaCreatetime}}</span>	  
			</p>
		</a>

	</div>
	<router-view/>
</div>

</template>
<script>
export default{
	props:['msgs'],
	data(){
		return {
			data1:[]
		}
	},
	methods:{
		funcMsg(data){
			this.$router.push(data)
		},
		getMsg(){
			this.$axios.get('/leading/getAllMessageStatisticsqqqqq').then(res => {
				console.log(res)
				this.data1 = res.data.data
			})
		}
	},
	created(){
		this.getMsg()
	}
}
</script>
