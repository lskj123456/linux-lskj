<style scoped>
#comFooter{
	
	width: 1200px;
	margin: auto;
}
a{
  text-decoration: none;
  color: #475669;
}
a:hover{
  color: #009edf;
}
.linkAddress{
	padding: 20px 0;
	border-top: 1px solid #e5e5e7;
	border-bottom: 1px solid #e5e5e7;
}
.linkAddress>span{
	font-weight: bold;
}
.navLink{
	display: inline-block;
}
.navLink a{
	margin: 0 20px;
}
.el-row {
	height: 100px;
	line-height: 20px;
	margin-bottom: 20px;
	&:last-child {
	  margin-bottom: 0;
	}
}
.el-col {
	height: 100px;
	border-radius: 4px;
	background: #fff;
}
.bg-purple {
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	
}
.bg-purple img{
	width: 50px;
	height: 50px;
}
.bg-p{
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-size: 12px;
}
.bg-p p{
	margin: 0;
}

.grid-content p span{
	margin: 0 20px;
}
.grid-content p span:first-child{
	margin: 0 20px 0 0;
}
</style>
<template>
	<div id="comFooter">
		<div class="linkAddress">
			<span>链接导航</span>
			<div class="navLink">
				<a href="#"><span>某某网站</span></a>
				<a href="#"><span>地方政府网站</span></a>
			</div>
		</div>

		<el-row type="flex" justify="space-around" align="top">
		  <el-col :span="4">
		  	 <div class="grid-content bg-purple">
			  	<img :src=data1.logo>
			 </div>
		  </el-col>
		  <el-col :span="20">	
		  	<div class="grid-content bg-p">
		  		<p><span>{{data1.title}}</span><span>Copyright 2018 www.xx.gov.cn  All Rights Reserved</span></p>
		  		<p>版权所有：xxx</p>
		  		<p><span>{{data1.telephone}}</span><span>{{data1.icp}}</span><span>{{data1.fax}}</span></p>
		    </div>
		   </el-col>
		</el-row>
	</div>

</template>
<script>
	export default{
		data(){
			return {
				data1:[]
			}
		},
		methods: {
			getMsg(){
				this.$axios.get('web/webset/getWebMsg').then(res => {
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


