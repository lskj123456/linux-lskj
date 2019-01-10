
<style scoped>
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
a{
	text-decoration: none;
	color: #2c3e50;
}
.contain p a{
	display: flex;
	justify-content: space-between;
	
}
.contain p a:hover{
	color:#cb0f0e;
} 
.more{
	display: flex;
	justify-content: flex-end;
}
.more:hover{
	color: red;
}
.date{
	color: #a3a3a3;
}
</style>
<template>
<div id="goverInfo">
	<h3>
		<span><slot></slot></span>
		<span><a href="#">更多 》</a></span>
	</h3>
	<div class="contain">
		<p v-for="(item,index) in govers" :key="index">
			<a href="#">
				<span>{{item.secId}}</span>
				<span>{{item.msg2}}</span>
				<span class="date">{{item.date}}</span>
			</a>
		</p>
		<!-- <p class="more">
			<span><a href="#">更多 》</a></span>
		</p> -->
	</div>
</div>

</template>
<script>
export default{
	props:['govers'],
	data(){
		return {
		
		}
	},
	created(){
		
	}
}
</script>
