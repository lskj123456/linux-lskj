<style scoped>
a{
  text-decoration: none;
  color: #475669;
}
/*a:hover{
  color: #cb0f0e;
}*/
.main{
	width:100%;
	height: 246px;

}
.bg{
	width:100%;
	height: 246px;
	position: relative;

}
.bg img{
	width: 100%;
	height:100%;
}
.mask{
	position: absolute;
	top:15px;
	right:0;
	width: 50%;
	height:246px;
	background: rgba(222,205,207,.5);
}
.mask h1{
	text-align: center;
	color: #d10e12;
	margin:44px 0;
}
.btn{
	display: flex;
	justify-content: center;
}
</style>
<template>
<div class="main">
	<div class="bg">
		<img src="@/assets/img1.jpg">
	</div>
	<div class="mask">
		<h1><slot></slot></h1>
		<div class="btn">
			<el-button type="primary" icon="el-icon-caret-right" v-for="(item,index) in datas.sections" :key="index">
				<router-link :to="{path:'more/?id='+ item.secId+'&name='+item.secName}">{{item.secName}}</router-link>
			</el-button>
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