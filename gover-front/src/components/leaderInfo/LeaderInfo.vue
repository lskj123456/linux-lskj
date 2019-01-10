
<style scoped>
h3{
	margin:0;
	padding:15px;
	background: #f2f2f2;
}
h3 span{
	color: #fff;
	background: #cb0f0e;
	padding:15px;
}
.jgModule{
	display: flex;
	padding-bottom: 10px;
	border-bottom: 1px solid #000;
}
.jgModule:last-child{
	border:none;
}
.header{
	height: 100px;
	float: left;
	line-height: 190px;
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
.contain{
	border-bottom: 2px solid #ccc;
}
</style>
<template>
	<div>
		<h3><span>{{header}}</span></h3>
		<div>
			<div class="contain" v-for="(item,index) in msg" :key="index">
				<div class="header">
					<span>{{item.name}}</span>
				</div>
				<div class="content2">
				<div  v-for="(item,index) in item.leaders" :key="index">
					<img :src="item.picture">
					<p>{{item.name}}</p>
				</div>
				</div>
			</div>

		</div>



	</div>

</template>
<script>
export default{
	data(){
		return {
			msg:[],
			header:'政府领导',
			imgs1:[
				{
					name:"李白",
					imgUrl:require('@/assets/img0.jpg')
				}
			],
			imgs2:[
				{name:"白居易",imgUrl:require('@/assets/img1.jpg')},
				{name:"杜甫",imgUrl:require('@/assets/img2.jpg')},
				{name:"李商隐",imgUrl:require('@/assets/img3.jpg')},
				{name:"王维",imgUrl:require('@/assets/img4.jpg')}
			],
			imgs3:[
				{name:"骆宾王",imgUrl:require('@/assets/logo.png')}
			]
		}
	},
	methods:{
		getMes(){
			this.$axios.get('/leading/getAllLcategory').then(res => {
				console.log(res)
				this.msg = res.data.lcategorys
			})
		}
	},
	created(){
		this.getMes()
	}
}
</script>
