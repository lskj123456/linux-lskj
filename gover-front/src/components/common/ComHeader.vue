<template>
	<div id="com-header">
		<div class="bg-header">
			<div class="logo">
				<img src="@/assets/img/zflogo1_01.png">
				<h1>某某政府网站</h1>
			</div>
			<div class="right-div">
				<div class="search-div">
				  <el-input
				    @keyup.13.native=getSearch()
				    placeholder="请输入新闻内容"
				    suffix-icon="el-icon-search"
				    v-model="input">
					
				  </el-input>
				</div>
				<div class="weixin-div">
					
					
					<el-popover
					    placement="bottom"
					    trigger="hover">
					     <div style="text-align:center;height:100px;">
					   		 <img src="@/assets/img/lskj000.png" style="height:100%;">
					    </div>
					    <img src="@/assets/img/weixin1_01.png" slot="reference">
					</el-popover>

					<el-popover
					    placement="bottom"
					    width="100"
					    trigger="hover">
					    <div style="text-align:center;height:100px;">
					   		 <img src="@/assets/img/lskj000.png" style="height:100%;">
					    </div>
				    	<img src="@/assets/img/weibo_01.png" slot="reference">
					</el-popover>
					
				</div>
				
			</div>
			 
		</div>
		<div class="nav">
			<div class="navBox">
				<el-menu
				  :default-active="activeIndex"
				  :router="router"
				  class="el-menu-demo"
				  mode="horizontal"
				  @select="handleSelect"
				  background-color="#cb0f0e"
				  text-color="#fff"
				  active-text-color="#ffd04b" id="nav">
				  <el-menu-item index="/index">首页</el-menu-item>
				  <el-menu-item index="/area">地区简介</el-menu-item>
				  <el-menu-item index="/functionOrg">职能机构</el-menu-item>
				  <el-menu-item index="/leaderInfo">领导信息</el-menu-item>
				  <el-menu-item index="/goverNews">政务信息</el-menu-item>
				  <el-menu-item index=""><a href="#">政务服务</a></el-menu-item>
				  <el-menu-item index="/InfoDetail" style="display:none;">信息详情</el-menu-item>
				  <el-menu-item index="/interaction">互动交流</el-menu-item>
				  <el-menu-item index="/interaction/LeaveMsg" style="display:none;">我要留言</el-menu-item>
				  <el-menu-item index="/interaction/doMsg" style="display:none;">办理留言</el-menu-item>
				  <el-menu-item index="/interaction/tongjiMsg" style="display:none;">统计留言</el-menu-item>
				  <el-menu-item index="/interaction/tongjiDetail" style="display:none;">统计留言详情</el-menu-item>
				  <el-menu-item index="/investInfo">投资信息</el-menu-item>
				  <el-menu-item index="/travelInfo">旅游信息</el-menu-item>
				</el-menu>
			</div>
		</div>
	</div>

</template>

<style scoped>
    a{
	 	text-decoration: none;
	}

	.el-menu-item {
		width:11.1%;
		text-align:center;
	}
	#nav>>>.is-active{
		background:  #f56c6c;
	}
	.bg-header{
		width:1200px;
		margin: auto;
		display:flex;
		justify-content: space-between;
		padding:10px 20px;
	}
	.logo{
		display: flex;
		align-items: center;
	}
	.logo img{
		width: 50px;
		height: 50px;
		margin-right:20px; 
	}
	.logo h1{
		color:#d41618;
	}
	.right-div{
		display:flex;
		align-items: center;
	}
	.search-div{
		margin-right: 40px;
	}
	.weixin-div img{
		margin-right: 15px;
	}
/*	.weixin-div span:hover{
		color: red;
	}*/

	.el-input input{
		background: red;
	}
	.nav{
		width: 100%;
		background: #cb0f0e;
	}
	.navBox{
		width: 1200px;
		margin: auto;
	}

	/*导航栏*/
	
	.el-menu--horizontal>.el-menu-item.is-active{
		background: #e84f51;
	}
</style>
<script>
	export default{
		data(){
			return {
				data1:[],
				input: '',
				activeIndex:'/',
				router:true
			}
		},
		methods:{
			handleSelect(key, keyPath) {
		        console.log(key, keyPath);
			},
			getMsg(){
				this.$axios.get('web/webset/getWebMsg').then(res => {
					// 头部，底部   信息
					console.log(res)
					this.data1 = res.data.data
				})
			},
			getSearch(){
				if(this.input!==''){
					this.$router.push({path: '/search/?input='+this.input})
				}
			},
			created(){
				this.getMsg()
			}
		}
	}
</script>
