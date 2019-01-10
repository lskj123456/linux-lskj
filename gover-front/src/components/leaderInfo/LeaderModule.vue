
<style scoped>

.jgModule{
	display: flex;
	padding-bottom: 10px;
	border-bottom: 1px solid #000;
}
.jgModule:last-child{
	border:none;
}
.header{
	flex: 1;
	display: flex;
	align-items: center;
	margin:10px 0;

}
.header span{
	width: 100px;
	font-size: 18px;
	font-weight: bold;
	margin:10px 30px;
	text-align: center;
}
.content2{
	flex:9;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;

}
.content2 div{
	width: 20%;
	margin:20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.content2 div img{
	display: block;
	width: 100px;
	height: 100px;
}
</style>
<template>

<div class="jgModule">
	<div class="header">
		<span>{{leader}}</span>
	</div>
	<div class="content2">
		<div v-for="(ite,i) in leader" :key="i">
			<div  v-for="(item,index) in ite.leaders" :key="index">
				<img :src="item.picture">
				<p>{{item.name}}</p>
			</div>
		</div>
	</div>
</div>

	  		

</template>
<script>
export default{
	props:['leader','imgs'],
	data(){
		return {
			
		}
	}
}
</script>
