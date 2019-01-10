
<style scoped>
a{
	text-decoration: none;
	color: #2c3e50;
}
a:hover{
	color: #cb0f0e;
}
.news{
	border-bottom:  1px solid #000;
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
</style>
<template>
<div>
	<h3>
		<span><slot></slot></span>
		<span><a href="#">更多 》</a></span>
	</h3>
	<div class="content">
		<p v-for="(item,index) in datas" :key="index">
			<a href="#">{{item.msg}}</a>
		</p>

	</div>
</div>

</template>
<script>
export default{
	props:['datas'],
	data(){
		return {
		
		}
	}
}
</script>
