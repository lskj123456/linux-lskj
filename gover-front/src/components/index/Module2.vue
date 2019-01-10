<style scoped>
a{
  text-decoration: none;
  color: #475669;
}
a:hover{
  color: #cb0f0e;
}
.main{
	height: 246px;
	padding:15px;
	margin: 0 10px;
	background: #fff;
}
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
.content{
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
}
.content>div{
	width: 33%;
	/*margin: 16px 0 0 0;*/
	/*padding: 10px 0;*/
	box-sizing: border-box;
}
.content>div:hover{
	color:#fff;
	
}
.content>div>a{
	display: inline-block;
	padding:10px 0;
	color:#cb0f0e;
	width:100%;	
}
.content>div>a:hover{
	display: inline-block;
	padding:10px 0;
	color:#fff;
	background: red;
	width:100%;
}

</style>
<template>
<div class="main">
	<h3>
		<span><slot></slot></span>
		<span><router-link :to="{path:''}">更多 》</router-link></span>
	</h3>
	<div class="content">
		<div v-for="(item,index) in datas" :key="index">
			<router-link :to="{path:'more/?id='+item.secId+'&name='+item.secName}">
				<i class="el-icon-caret-right"></i>
				<span>{{item.secName}}</span>
			</router-link>
		</div>
	</div>	
</div>
</template>
<script>
export default{
	props:['datas'],
	data(){
		return{

		}
	},
	methods:{
	
	}
}
</script>