<style scoped>

</style>
<template>
<div>
	
	<Opinion
		:msgs="msgs"
	>意见征集</Opinion>
	<ResConcern
		:concerns="concerns"
	>回应关切</ResConcern>

	<TopTalk
		:talks="talks"
	>高端访谈</TopTalk>


</div>

</template>
<script>
import Opinion from "./module/Opinion"
import TopTalk from "./module/TopTalk"
import ResConcern from "./module/ResConcern"
export default{
	data(){
		return {
			msgs:[
				{name:'银保监会答网民',msg:'关于“异地补办银行卡困难重重”的留言',date:'2018-09-13'},
				{name:'银保监会答网民',msg:'关于“异地补办银行卡困难重重”的留言',date:'2018-09-13'},
				{name:'银保监会答网民',msg:'关于“异地补办银行卡困难重重”的留言',date:'2018-09-13'},
				{name:'银保监会答网民',msg:'关于“异地补办银行卡困难重重”的留言',date:'2018-09-13'},
			],
			concerns:[
				{msg1:"银保监会：银行卡丢失？这些银行可异地补办",msg2:'',date:'2018-09-07'},
				{msg1:"银保监会：银行卡丢失？这些银行可异地补办",msg2:'',date:'2018-09-07'},
				{msg1:"银保监会：银行卡丢失？这些银行可异地补办",msg2:'',date:'2018-09-07'},
				{msg1:"银保监会：银行卡丢失？这些银行可异地补办",msg2:'',date:'2018-09-07'},
				{msg1:"银保监会：银行卡丢失？这些银行可异地补办",msg2:'',date:'2018-09-07'},
			],
			talks:[
				{url:require('@/assets/img1.jpg'),msg:'200秒快问快答！李克强欧洲行，看专家全景解读'},
				{url:require('@/assets/img1.jpg'),msg:'200秒快问快答！李克强欧洲行，看专家全景解读'},
				{url:require('@/assets/img1.jpg'),msg:'200秒快问快答！李克强欧洲行，看专家全景解读'},
				{url:require('@/assets/img1.jpg'),msg:'200秒快问快答！李克强欧洲行，看专家全景解读'},
				{url:require('@/assets/img1.jpg'),msg:'200秒快问快答！李克强欧洲行，看专家全景解读'},
			]
		}
	},
	components:{
		Opinion,TopTalk,ResConcern
	}
}
</script>
