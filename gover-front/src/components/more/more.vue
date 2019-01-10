<template>
    <div>
        <el-row type="flex" justify="space-around" align="middle">
        <!-- 【5】点击更多进入列表页面 -->
          <el-col :span="12">
            <h3 class="title"><span>{{secName}}</span></h3>
            <div class="content">
                <p v-for="(item,index) in list" :key="index">
                    <router-link :to="{path:'/InfoDetail/?id='+item.allmsgId}"><span>{{item.allmsgTitle}}</span></router-link>
                </p>
            </div>
          </el-col>
        </el-row>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"  
         
          layout="total, prev, pager, next"
          :total="totalCount">
        </el-pagination>
    </div>
</template>
<script>
    export default{
        name: "More",
        data(){
            return{
                secName: this.$route.query.name,
                secId: this.$route.query.id,
                currentPage: 1,
                list: [],
                totalCount: null,
                page : 1
            }
        },
        methods:{
            handleCurrentChange (val) {
              this.currentPage = val;
              console.log(val)
              this.getMes(this.secId,this.currentPage)
            },
            getMes() {
                this.$axios.post('/leading/getAllMsgOfSecId',this.$qs.stringify({secId:this.secId,page:this.currentPage})).then(res => {
                    console.log(res)
                    this.list = res.data.data.list;
                    console.log(this.list)
                    this.totalCount = res.data.data.number
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
    .content p{
        padding-left: 10px;
    }
    .content p a{
        color: #475669;
        text-decoration: none;
    }
    .content p a:hover{
        color: #cb0f0e;
    }
    .title{
      width: 550px;
      height: 50px;
      line-height: 50px;
      color: #fff;
      background-color: #ccc;
    }
    .title span{
        padding-left: 10px;
        text-align: center;
        display: block;
        width: 30%;
        height: 50px;
        background-color: #cb0f0e;
    }
     .el-row {
          margin: 20px 0;
          &:last-child {
            margin-bottom: 0;
          }
        }
</style>