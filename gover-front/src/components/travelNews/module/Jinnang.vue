
<style scoped>
a{
	text-decoration: none;
	color: #2c3e50;	
}
/*h3{
	margin:0;
	padding: 10px 15px;
	background: #f2f2f2;
	border-bottom: 1px solid #000;
}*/
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
.contain{
	/*display: flex;*/

}
.contain p{
	margin: 16px 0 0 0;
}
a:hover{
	color:#cb0f0e;
} 
.more{
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin: 15px 30px;
}

</style>
<template>
<div id="tuijian">
	<h3><span><slot></slot></span></h3>
	<div class="contain">

		<p v-for="(item,index) in jinnangs" :key="index">
			<router-link :to="{path:'/InfoDetail/?id='+item.allmsgId}"><span>{{item.allmsgTitle}}</span></router-link>
		</p>
		<div class="more">
			<span><router-link :to="{path:'more/?id='+ jinnangsMsg.secId+'&name='+jinnangsMsg.secName}">更多 》</router-link></span>
		</div>
		
	</div>
</div>

</template>
<script>
export default{
	props:['jinnangs','jinnangsMsg'],
	data(){
		return {
		
		}
	}
}
</script>
