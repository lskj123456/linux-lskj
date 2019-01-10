<style scoped>
a{
  text-decoration: none;
  color: #475669;
}
a:hover{
  color: #cb0f0e;
}
.main{
	height: 260px;
	padding:15px;
	margin: 0 10px;
	background: #fff;
	overflow: hidden;
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
	margin-top: 30px;
}
</style>
<template>
<div class="main">
	<h3>
		<span><slot></slot></span>
		<span><router-link :to="{path:'more/?id='+ datas.secId+'&name='+datas.secName}">更多 》</router-link></span>
	</h3>
	<div class="content">
		<!-- {{datas}} -->
		<p v-for="(item,index) in datas.allmessages" :key="index">
			<router-link :to="{path:'/InfoDetail/?id='+item.allmsgId}"><span>{{item.allmsgTitle}}</span><span>{{item.allmsgModifytime}}</span></router-link>
		</p>
	</div>
</div>
</template>
<script>
export default{
	props:['datas'],
	data(){
		return{
			secId:this.datas.secId
		}
	},
	methods:{
	},
	// beforeUpdate(){
	// 	console.log(this.datas)
	// 	// this.secIds()
	// },
	// updated(){
	// 	const id = this.props
	// 	this.secId = id
	// 	console.log(this.secId)
	// },
	// beforeMount(){
	// 	console.log(this.datas)
	// },
	// mounted(){
	// 	console.log(this.datas)
	// }
	// ,
	mounted(){
		console.log(this.datas)
	}
}
</script>