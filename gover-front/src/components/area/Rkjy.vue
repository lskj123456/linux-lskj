<template>
<div class="content">
	
		<AreaDemo
			:datas="datas"
		></AreaDemo>
</div>
</template>
<script>
import AreaDemo from "./AreaDemo"
export default{
	data(){
		return{

			datas:{
				msg2:'文字说明',
				msg3:'空间的富士康军事对抗冠军的身份第三方控件',
				imgUrl:require("@/assets/img4.jpg")
			}
			
		}
	},
	components:{
		AreaDemo
	}
}
</script>
<style scoped>
h3{
	margin:0 ;
}	
</style>