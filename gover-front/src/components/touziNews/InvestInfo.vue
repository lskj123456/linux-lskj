<style scoped>
a{
	text-decoration: none;
	color: #2c3e50;
}
a:hover{
	color: #cb0f0e;
}
h3{
	margin:0;
	padding:15px 0 15px;
	background: #f2f2f2;
}
h3 span{
	color: #fff;
	background: #cb0f0e;
	padding:15px;
}
.row{
	display: flex;
}

.row>div{
	flex: 1;
	padding:0px 20px;
}
/*.bdr{
	border-right: 1px solid #000;
}*/
.content{
	padding:0 30px;
}
.content p a{
	display: flex;
	justify-content: space-between;
	padding-right: 30px;
}
.more{
	margin: 10px 30px;
	display: flex;
	justify-content: flex-end;
}
.row1{
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
}
.row1>div{
	width: 48%;
	margin: 16px 0 0 0;
}
.row1 span{
	font-weight: bold;
	margin-left: 10px;
}
.yuan{
	margin: 10px 30px 0 0;

	display: flex;
	justify-content: space-around;
	align-items: center;
}
.yuan img{
	display: inline-block;
	width: 150px;
	height: 200px;
}
.fuwu{
	height: 200px;
	background: #d3dce6;
	margin: 10px 30px 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
<template>
<div class="touzi">
	<div class="row">
		<!-- 投资动态 -->
		<div>
			<h3><span>{{dtId.secName}}</span></h3>
			<div class="content bdr">
				<p v-for="(item,index) in dt" :key="index">
					<router-link to="{path:'/InfoDetail/?id='+ item.allmsgId}"><span>{{item.allmsgTitle}}</span><span>{{item.allmsgCreatetime}}</span></router-link>
				</p>
				<div class="more"><router-link :to="{path:'more/?id='+ dtId.secId+'&name='+dtId.secName}"><span>更多 》 </span></router-link></div>
			</div>
		</div>
		<!-- 投资政策 -->
		<div>
			<h3><span>{{zcId.secName}}</span></h3>
			<div class="content">
				<p v-for="(item,index) in zc" :key="index">
					<router-link :to="{path:'/InfoDetail/?id='+item.allmsgId}"><span>{{item.allmsgTitle}}</span><span>{{item.allmsgCreatetime}}</span></router-link>
				</p>
				<div class="more"><router-link :to="{path:'more/?id='+ zcId.secId+'&name='+zcId.secName}"><span>更多 》 </span></router-link></div>
			</div>
		</div>
	</div>
	<div class="row">
		<!-- 招商活动 -->
		<div>
			<h3><span>{{zsId.secName}}</span></h3>
			<div class="content bdr">
				<p v-for="(item,index) in zs" :key="index">
					<router-link :to="{path:'/InfoDetail/?id='+item.allmsgId}"><span>{{item.allmsgTitle}}</span><span>{{item.allmsgCreatetime}}</span></router-link>
				</p>

				<div class="more"><router-link :to="{path:'more/?id='+ zsId.secId+'&name='+zsId.secName}"><span>更多 》 </span></router-link></div>
				
			</div>
		</div>
		<!-- 重大项目 -->
		<div>
			<h3><span>{{xmId.secName}}</span></h3>
			<div class="content">
				<p v-for="(item,index) in xm" :key="index">
					<router-link :to="{path:'/InfoDetail/?id='+item.allmsgId}"><span>{{item.allmsgTitle}}</span><span>{{item.allmsgCreatetime}}</span></router-link>
				</p>
				<div class="more"><router-link :to="{path:'more/?id='+ xmId.secId+'&name='+xmId.secName}"><span>更多 》 </span></router-link></div>
			</div>
		</div>
	</div>
	
	<!-- 投资数据 -->
	<div class="row">
		<div>
			<h3><span>{{sjId.secName}}</span></h3>
			<div class="content bdr">
				<p v-for="(item,index) in sj" :key="index">
					<router-link :to="{path:'/InfoDetail/?id='+item.allmsgId}"><span>{{item.allmsgTitle}}</span><span>{{item.allmsgCreatetime}}</span></router-link>
				</p>

				<div class="more"><router-link :to="{path:'more/?id='+ sjId.secId+'&name='+sjId.secName}"><span>更多 》 </span></router-link></div>
			</div>
		</div>
		<!-- 投资导向 -->
		<div>
			<h3><span>{{dxId.secName}}</span></h3>
			<div class="content row1">
					<div v-for="(item,index) in dx" :key="index">
						<i class="el-icon-message"></i> 
						<router-link :to="{path:'/InfoDetail/?id='+item.allmsgId}"><span>{{item.allmsgTitle}}</span></router-link>
					</div>
			</div>
		</div>
	</div>

	<div class="row">
		<!-- 产业园区 -->
		<div>
			<h3><span>{{cyId.secName}}</span></h3>
			<div class="content bdr">
				<div  class="yuan">
					<router-link v-for="(item,index) in cy" :key="index" :to="{path:'/InfoDetail/?id='+item.allmsgId}"><img :src="item.allmsgImg" v-if="index<3"></router-link>
				</div>
				<div class="more"><router-link :to="{path:'more/?id='+ cyId.secId+'&name='+cyId.secName}"><span>更多 》 </span></router-link></div>
			</div>
		</div>
		<!-- 投资服务 -->
		<div>
			<h3><span>{{fwId.secName}}</span></h3>
			<div class="content">
				<router-link :to="{path:'more/?id='+ fwId.secId+'&name='+fwId.secName}">
					<div class="fuwu" v-for="(item,index) in fw" :key="index">{{fw[0].allmsgTitle}}</div>
				</router-link>
			</div>
		</div>
	</div>

</div>

</template>
<script>
export default{
	data(){
		return {
			dt:[],dtId:[],  //投资动态
			zc:[],zcId:[],	//政策
			zs:[],zsId:[], 	//招商活动
			xm:[],xmId:[],	//重大项目
			sj:[],sjId:[],  //投资数据
			dx:[],dxId:[],	//投资导向
			cy:[],cyId:[],  //产业园区
			fw:[],fwId:[],
		}
	},
	methods:{
		getMes(){
			// 投资动态
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive193').then(res => {
				console.log(res)
				this.dt = res.data.data.allmessages
				this.dtId = res.data.data
				console.log(this.dtId.secId)
				// this.data1 = res.data.data
				// this.dataSecid = res.data.data.secId
			// console.log(this.data1.secId)
			})
			//投资政策
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive194').then(res => {
				//console.log(res)
				this.zc = res.data.data.allmessages
				this.zcId = res.data.data
			})
			//招商活动
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive195').then(res => {
				//console.log(res)
				this.zs = res.data.data.allmessages
				this.zsId = res.data.data
			})
			//重大项目
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive196').then(res => {
				//console.log(res)
				this.xm = res.data.data.allmessages
				this.xmId = res.data.data
			})
			//投资数据
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive197').then(res => {
				//console.log(res)
				this.sj = res.data.data.allmessages
				this.sjId = res.data.data
			})
			//投资导向
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive198').then(res => {
				//console.log(res)
				this.dx = res.data.data.allmessages
				this.dxId = res.data.data
			})
			//产业园区
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive199').then(res => {
				console.log(res)
				this.cy = res.data.data.allmessages
				this.cyId = res.data.data
				console.log(this.cy[0].allmsgImg)
				// this.dxId = res.data.data
			})
			//网上服务指南
			this.$axios.get('/leading/getAllMsgOfSecIdOfFive200').then(res => {
				console.log(res)
				this.fw = res.data.data.allmessages
				this.fwId = res.data.data
				console.log(this.fw)
				// this.cy = res.data.data.allmessages
				// console.log(this.cy[0].allmsgImg)
				// this.dxId = res.data.data
			})
		}
	},
	created(){
		this.getMes()
	}
}
</script>
