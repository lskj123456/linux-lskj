<style scoped>
h3{
	margin:0;
	padding: 10px 15px;
	background: #f2f2f2;
}
.jgModule{
	display: flex;
	flex-direction: column;
	padding-bottom: 10px;
	border-bottom: 1px solid #000;
}
.jgModule:last-child{
	border:none;
}
.header{
	display: flex;
	align-items: center;
	line-height: 30px;
	margin:10px 0;
}
.header span{
	font-size: 18px;
	font-weight: bold;
	margin:10px 15px;
}
.content1{
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;

}
.content1 div{
	width: 17%;
	margin:10px 15px;
	box-sizing: border-box;
}
</style>
<template>

<div class="jgModule">
 	<div class="header">
 		<span>.<slot></slot></span>
 	</div>
 	<div class="content1">
 		<div v-for="(item,index) in funcChildName" :key="index">{{item.name}}</div>

 	</div>
</div>

</template>
<script>
export default{
	props:['funcChildName'],
	data(){
		return {
			
		}
	}
}
</script>
