<template>
   <div class="main">
       <div v-for="(item,index) in data1" :key="index" class="cont">
           <router-link :to="{path:'/InfoDetail/?id='+item.mId}"><p v-html="item.mTitle"></p></router-link>
       </div>
   </div>
</template>
<script>
    export default{
        name: "Search",
        data(){
            return {
                data1:[],
                input: this.$route.query.input
            }
        },
        methods:{
            getSearch(){
                //this.$router.go(0)
				this.$axios.get('leading/search/searchMessage/?messageTitleKeyword=' + this.input).then(res => {
                    console.log(res.data.data)
                    this.data1 = ''
                    this.data1 = res.data.data
                    console.log(this.data1)
				})
			}
        },
        mounted(){
            this.getSearch()
        }
    }

</script>
<style scoped>
    .main{
        width: 1200px;
        margin: 0 auto;
    }
</style>