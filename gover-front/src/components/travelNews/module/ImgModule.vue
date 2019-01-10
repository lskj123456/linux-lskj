<style scoped>
a{
	text-decoration: none;
	color: #2c3e50;
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
.img{
	display: flex;
	justify-content: flex-start;
	padding: 20px 30px 0;
	font-size: 14px;
	flex-wrap: wrap;
}
.img .item{
	display: inline-block;
	width: 19%;
	/*margin:0 20px;*/
	padding:0 30px;
}

.item a img{
	width: 100%;
	height:200px;
	/*margin:0 10px;*/
}
.item a p{
	text-align: center;
}
</style>
<template>
<div class="imgTravel">
	<h3><span><slot></slot></span></h3>
	<div class="img">
		
		<div class="item" v-for="(item,index) in imgs" :key="index">
			<router-link :to="{path:'/InfoDetail/?id='+item.allmsgId}">
				<img :src="item.allmsgImg">
				<p>{{item.allmsgTitle}}</p>
			</router-link>
		</div>
		

	</div>
</div>

</template>
<script>
export default{
	props:['imgs'],
	data(){
		return {
			
		}
	}
}
</script>
