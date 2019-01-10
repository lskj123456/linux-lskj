<style scoped>
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
</style>
<template>
	<div id="funcOrg">
		<h3><span>{{header}}</span></h3>


		<div class="contain">

		  	<FuncModule
		  		:funcChildName="funcChildName1"
		  	>政府组成机构</FuncModule>
		  	<FuncModule
		  		:funcChildName="funcChildName2"
		  	>省政府直属机构</FuncModule>
		  	<FuncModule
		  		:funcChildName="funcChildName3"
		  	>部门管理机构</FuncModule>
		 
		  	
		</div>


	</div>
</template>
<script>
import FuncModule from "./FuncModule"
export default{
	data(){
		return {
			header:'机构职能',
			funcChildName1:['发展改革委','经济和信息化委','商务厅','发展改革委','经济和信息化委','商务厅'],
			funcChildName2:['省工商局','体育局','省工商局','体育局','商务厅'],
			funcChildName3:['粮食局','能源局','能源局','能源局','能源局'],
		}
	},
	methods:{
		getMes(){
			this.$axios.get('/leading/getAllFcategoryAndFuction').then(res => {
				console.log(res.data.fcategorys[0].functions)
				this.funcChildName1 = res.data.fcategorys[0].functions
				this.funcChildName2 = res.data.fcategorys[1].functions
				this.funcChildName3 = res.data.fcategorys[2].functions
			})
		}
	},
	created(){
		this.getMes()
	},
	components:{
		FuncModule
	}
}
</script>
