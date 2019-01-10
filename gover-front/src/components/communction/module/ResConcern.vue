
<style scoped>
h3,h3 span{
	padding: 15px;
}
h3{
	margin:0;
	background: #f2f2f2;
}
h3 span{
	color: #fff;
	background: #cb0f0e;
}
.contain{
	padding:30px;
}
.contain p a{
	display: flex;
	justify-content: space-between;
	text-decoration: none;
	color: #2c3e50;
}
.contain p a:hover{
	color:#409EFF;
} 
.more{
	text-align: right;
}
.more:hover{
	color: red;
}
</style>
<template>
<div id="resconcern">
	<h3><span><slot></slot></span></h3>
	<div class="contain">

		<p v-for="(item,index) in concerns" :key="index">
			<router-link :to="{path:'contents?index='+ index}">
				<span>{{item.respAndThouTitle}}</span>
				<span v-html="item.respAndThouContents"></span>
				<span>{{item.respAndThouCreatetime}}</span>
			</router-link>
		</p>
<!-- 		<p class="more">
			<el-button type="text">更多 》 </el-button>
		</p> -->
	</div>
</div>

</template>
<script>
export default{
	props:['concerns'],
	data(){
		return {
		
		}
	}
}
</script>
