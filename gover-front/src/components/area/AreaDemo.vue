

<style scoped>
.top{
	display: flex;
	justify-content: space-around;
}
.top_l{
	display: inline-block;
	width: 200px;
	height: 200px;
	margin-right: 20px;
	background: red;
	overflow: hidden;
}
.top_l img{
	width: 100%;
	height: 100%;
}
.top_r{
	flex:1;
	display: inline-block;
	height:200px;
}
.desc{
	margin-top: 20px;
}	
</style>
<template>
	<div class="demo">
		<div class="top">
			<div class="top_r" v-html="datas[this.index].address.summary"></div>
		</div>
	</div>
</template>

<script>
import Bus from './bus.js'
export default{
	props:['datas'],
	data(){
		return{
			index: 0,
		}
	},
	created(){
		Bus.$on('id',(data) => {
			this.index = data
			console.log(this.index);
		})
		// this.getMsg()
		console.log(this.index)
		// console.log(this.remark)
	}
}	
</script>
