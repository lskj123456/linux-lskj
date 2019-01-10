<style scoped>
a{
	text-decoration: none;
	color: #2c3e50;
}
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
.talk{
	display: flex;
	justify-content: flex-start;
	padding: 20px 30px;
	font-size: 14px;
	flex-wrap: wrap;
}
.talk a{
	display: inline-block;
	width: 20%;
	margin:0 20px;

}
img{
	display: block;
	width: 228px;
	height: 152px;
}

/* .item img{
	width: 100%;
} */
</style>
<template>
<div class="topTalk">
	<h3><span><slot></slot></span></h3>
	<div class="talk">
		<a href="#" v-for="(item,index) in talks" :key="index">
			<div class="item">
				<router-link :to="{path:'videoInfo/?videoId='+item.highEndInterviewId}">
					<img :src="item.highEndInterviewUrl">
				</router-link>
				<p>{{item.highEndInterviewTitle}}</p>
			</div>
		</a>

	</div>
</div>

</template>
<script>
export default{
	props:['talks'],
	data(){
		return {
			
		}
	}
}
</script>
