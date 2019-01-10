<template>
	<div id="area">
	  <el-row :gutter="20">
		  <el-col :span="4">
        <div class="bg-purple">
           <el-menu :router="router" class="el-menu-vertical-demo bg" @open="handleOpen" @close="handleClose" @select="handleSelect">
            <el-menu-item index="/area/zrArea/" v-for="(item,index) in message" :key="index" @click="getId(index)">{{item.name}}</el-menu-item>
            <!-- <el-menu-item index="/area/rkjy">人口就业</el-menu-item>
            <el-menu-item index="/area/jjsl">经济实力</el-menu-item>
            <el-menu-item index="/area/dwjj">对外经济</el-menu-item> -->
           </el-menu>
        </div>
      </el-col>
		  <el-col :span="19">
        <div class="contain">
           <router-view/>
        </div>
      </el-col>
		</el-row>

	</div>

</template>

<style scoped>
.el-row {
  height:500px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
	height:500px;
  border-radius: 4px;
}
.bg-purple{
  background: #d3dce6;
}
.bg{
  background: #d3dce6;
}
.contain{
  background: #fff;
  height: 500px;
}
</style>
<script>
import Bus from './bus.js'
export default{
  data(){
    return {
      id : 1,
      router:true,
      message: null,
    }
  },
  methods:{
    handleOpen(){

    },
    handleClose(){

    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getMes(){
      this.$axios.post('/leading/getAllAddressAndCategory').then(res => {
        console.log(res)
        this.message = res.data.addresss
      })
    },
    getId(secId){
      this.id = secId
      Bus.$emit ('id',this.id)
    }
  },
  created(){
    this.getMes()
  }
}
</script>