<style scoped>
.tHead{
	margin:0;
	padding: 15px;
	border-bottom: 1px solid #000;
}
#bread >>>.el-breadcrumb__item:last-child .el-breadcrumb__inner{
	color: red;
}
.contain{
	padding:20px;
}
.block{
	margin:20px auto;
	width: 255px;
}
.month{
	padding:20px;
	display: flex;
}
.itemonth{
	display: inline-block;
	width:4.34%;
	height: 40px;
	border:1px solid #000;
	border-radius: 50%;
	text-align: center;
	line-height: 40px;
}
.itemonth:hover{
	background: #03a9f4;
	color: white;
	cursor: pointer;
}
.line{
	display: inline-block;
	width:4.34%;
	border-top: 1px solid #000;
	margin-top: 20px;
	box-sizing: border-box;
}
.table{
	padding:15px;
	height: 500px;
}
.el-table >>>th div{
	text-align: center;
}
/*.el-table >>>th>.cell{
    text-align: center;  
}*/
</style>
<template>
<div class="msg">
	<p class="tHead">
		<el-breadcrumb separator-class="el-icon-arrow-right" id="bread">
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item :to="{path: '/interaction'}">互动交流</el-breadcrumb-item>
		  <el-breadcrumb-item>留言办理</el-breadcrumb-item>
		</el-breadcrumb> 
	</p>
	<div class="contain">
		 <div class="block">
		    <el-date-picker
		      v-model="value5"
					format="yyyy"
					value-format="yyyy"
					@change="getTime"
		      type="year"
		      placeholder="选择年">
		    </el-date-picker>
		  </div>
		  <div class="month">
		  	<span @click="getMsg(1)" class="itemonth">1月</span><span class="line"></span>
		  	<span @click="getMsg(2)" class="itemonth">2月</span><span class="line"></span>
		  	<span @click="getMsg(3)" class="itemonth">3月</span><span class="line"></span>
		  	<span @click="getMsg(4)" class="itemonth">4月</span><span class="line"></span>
		  	<span @click="getMsg(5)" class="itemonth">5月</span><span class="line"></span>
		  	<span @click="getMsg(6)" class="itemonth">6月</span><span class="line"></span>
		  	<span @click="getMsg(7)" class="itemonth">7月</span><span class="line"></span>
		  	<span @click="getMsg(8)" class="itemonth">8月</span><span class="line"></span>
		  	<span @click="getMsg(9)" class="itemonth">9月</span><span class="line"></span>
		  	<span @click="getMsg(10)" class="itemonth">10月</span><span class="line"></span>
		  	<span @click="getMsg(11)" class="itemonth">11月</span><span class="line"></span>
		  	<span @click="getMsg(12)" class="itemonth">12月</span>
		  </div>

		  <div class="table">
		  	 <el-table
			    :data="tableData"
			    border
			    align="center"
			    style="width: 100%;text-align:center;">
			    <el-table-column
			      prop="leaveName"
			      label="留言人"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="leaveDetailedAddress"
			      label="办理单位"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="leaveEmail"
			      label="办理方式">
			    </el-table-column>
			     <el-table-column
			      prop="leaveAnsweringTime"
			      label="办理日期">
			    </el-table-column>
			  </el-table>
		  </div>
	</div>

</div>

</template>
<script>
// import Opinion from "./module/Opinion"

export default{
	data(){
		return {
			month:[1,2,3,4,5,6,7,8,9,10,11,12],
			value5:'',
			tableData: [{
			  date: '2016-05-02',
			  name: '零点',
			  unit: 'xx办公厅',
			  way:'按职责程序办理'
			}, {
			  date: '2016-05-04',
			  name: '王小虎',
			  unit: '上海市普陀区金沙江路 1517 弄',
			  way:'按职责程序办理'
			}, {
			  date: '2016-05-01',
			  name: '王小虎',
			  unit: '上海市普陀区金沙江路 1519 弄',
			  way:'按职责程序办理'
			}, {
			  date: '2016-05-03',
			  name: '王小虎',
			  unit: '上海市普陀区金沙江路 1516 弄',
			  way:'按职责程序办理'
			}]
		}
	},
	methods:{
		getMsg(val){
			console.log(this.value5)
			this.$axios.get('/leading/getLeaveWordAndAnsweringByMonthqqqq/?year='+this.value5 + '&month='+val).then(res => {
				this.tableData = res.data.data

			})
		},
		getTime(val){
			console.log(val)
			this.value5 = val

		}
	},
	created(){
		this.getMsg()
	},
	components:{
		
	}
}
</script>
