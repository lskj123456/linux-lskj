<template>
    <div class="conts">
        <div class="center">
            <div class="title">
                <h3>{{conts[index].respAndThouTitle}}</h3>
            </div>
            <p v-html="conts[index].respAndThouContents"></p>
        </div>
    </div>
</template>
<script>
    export default{
        name: "Contents",
        data(){
            return{
                index : this.$route.query.index,
			    conts:null || "民政部发布方案：着力推进“互联网+社会组织”等领域建设",
            }
        },
        methods:{
            getMes(){
                this.$axios.get('/leading/getAllRespondandthoughtfuloffive').then(res => {
                    console.log(res)
                    this.conts = res.data.data
                })
		    }
        },
        created(){
           this.getMes()
           // console.log(this.secId)
        }
            
    }
</script>
<style scoped>
    .conts .title{
       
        height: 50px;
        line-height: 50px;
        margin: 0 auto;
        color: rgb(203, 15, 14)
    }
    .conts .title h3{
        padding-left: 10px;
        width: 800px;
        background-color: rgb(203, 15, 14);
        color: #fff;
    }
    .center{
        margin: 0 auto;
        width: 800px;
    }
</style>