
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header{
  padding:0;
}
.content{
  width:1200px;
  margin:auto;
}
.el-footer{
  height:auto;
  padding:0;
}
</style>
<template>
  <div id="app">
    <el-container>
      <!-- <el-header> -->
          <!-- <img src="./assets/logo.png"> -->
           <ComHeader></ComHeader>
          <!-- <a href="http://www.baidu.com">百度</a> -->

      <!-- </el-header> -->

      <el-main style="padding:20px 0 0;">
        <div class="content">
           <router-view/>
        </div>
      </el-main>

      <el-footer>
        <ComFooter></ComFooter>
        
      </el-footer>
    </el-container>
    
  </div>
</template>

<script>
import ComHeader from './components/common/ComHeader'
import ComFooter from './components/common/ComFooter'
export default {
  name: 'App',
  components:{
    ComHeader,ComFooter
  }
}
</script>


