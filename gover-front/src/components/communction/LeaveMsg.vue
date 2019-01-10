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
.contain>p{
	text-align: center;
}
.contain #fix{
	width:800px;
	margin: auto;
	padding: 30px;
	/*background: #f2f2f2;*/
	box-sizing: border-box;
}
.vcode-1{
	width: 50%;
}
.vcode span{
	display: inline-block;
	width: 20%;
	text-align: center;
}
.vcode span:last-child{
	cursor: pointer;
}
</style>
<template>
<div class="msg">
	<p class="tHead">
		<el-breadcrumb separator-class="el-icon-arrow-right" id="bread"> 
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item :to="{ path: '/interaction' }">互动交流</el-breadcrumb-item>
		  <el-breadcrumb-item>我要留言</el-breadcrumb-item>
		</el-breadcrumb> 
	</p>
	<div class="contain">
		<p>为了你的留言得到及时有效处理和回应，请填写真实信息。我们将严格保护你的个人隐私</p>
		<div id="fix">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			  <el-form-item label="昵称" prop="leaveNickname">
			    <el-input v-model="ruleForm.leaveNickname" placeholder="请输入昵称"></el-input>
			  </el-form-item>
			  <el-form-item label="姓名" prop="leaveName">
			    <el-input v-model="ruleForm.leaveName" placeholder="请输入姓名"></el-input>
			  </el-form-item>
			  <el-form-item label="身份证号码" prop="leaveIdNumber">
			    <el-input v-model="ruleForm.leaveIdNumber" placeholder="请输入身份证号码"></el-input>
			  </el-form-item>
			  <el-form-item label="联系电话" prop="leaveTel">
			    <el-input v-model="ruleForm.leaveTel" placeholder="请输入联系电话"></el-input>
			  </el-form-item>
			  <el-form-item label="电子邮件" prop="leaveEmail">
			    <el-input v-model="ruleForm.leaveEmail" placeholder="请输入电子邮件"></el-input>
			  </el-form-item>
			  <el-form-item label="职业" prop="leaveJob">
			    <el-input v-model="ruleForm.leaveJob" placeholder="请输入职业"></el-input>
			  </el-form-item>
			   <el-form-item label="通讯地址" prop="leaveContactAddress">
			    <el-input v-model="ruleForm.leaveContactAddress" placeholder="请输入通讯地址"></el-input>
			  </el-form-item>
			   <el-form-item label="详细地址" prop="leaveDetailedAddress">
			    <el-input v-model="ruleForm.leaveDetailedAddress" placeholder="请输入详细地址"></el-input>
			  </el-form-item>
			   <el-form-item label="标题" prop="leaveGbooklisttitle">
			    <el-input v-model="ruleForm.leaveGbooklisttitle" placeholder="请输入留言标题"></el-input>
			  </el-form-item>
			  <el-form-item label="留言内容" prop="leaveMessageContents">
			    <el-input type="textarea"  :autosize="{ minRows: 6, maxRows: 10}"
  					placeholder="请输入留言内容" v-model="ruleForm.leaveMessageContents"></el-input>
			  </el-form-item>
			   <el-form-item label="验证码" prop="v_code" class="vcode">
			    <el-input v-model="ruleForm.v_code" class="vcode-1" placeholder="请输入验证码"></el-input>
			    <span>{{vCode}}</span>
			    <span @click="getCode()" style="color:red;">看不清，换一个</span>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
			    <el-button @click="resetForm('ruleForm')">重置</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>


</div>

</template>
<script>
import {getCurrentTime} from '@/until/getCurrentTime'
export default{
	data(){
		return {
// leaveAnswering:"正常程序"							//留言回复
// leaveAnsweringDepartment:"政府办公室"				//办理部门
// leaveAnsweringTime:"2018-11-07 15:15:57"			//办理日期
// leaveAnsweringWay:"正常程序"							//办理方式
// leaveContactAddress:"465416514"						//通讯地址
// leaveDetailedAddress:"撒大苏打"						//详细地址
// leaveEmail:"41116@qq.com"							//电子邮件
// leaveGbooklisttitle:"留言"							//留言标题
// leaveId:2											//编号
// leaveIdNumber:"232435546567657"					//身份证号
// leaveJob:"程序员"									//职业
// leaveMessageContents:"撒旦飞洒福冈软体银行和很久很久"	//留言内容
// leaveMessageCreatetime:"2018-11-07 14:54:49"		//留言时间
// leaveName:"张三"										//姓名
// leaveNickname:"jim"                                 //昵称
// leaveState:1										//是否审核通过
// leaveTel:"1456467689"								//联系电话
			vCode:9527,
 			ruleForm: {
	          leaveNickname: '',
	          leaveName: '',
	          leaveIdNumber: '',
	          leaveTel: '',
	          leaveEmail: '',
	          leaveJob: '',
	          leaveContactAddress: '',
	          leaveDetailedAddress: '',
	          leaveGbooklisttitle: '',
	          leaveMessageContents: '',
	          // date:getCurrentTime(),
	          leaveState:'0',
	          v_code:''
	        },
	        rules: {
	          leaveNickname: [
	            { required: true, message: '请输入你的昵称', trigger: 'blur' },
	            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
	          ],
	          leaveName: [
	            { required: true, message: '请输入你的姓名', trigger: 'blur' }
	          ],
	          leaveIdNumber: [
	            { required: true, message: '请输入你的身份证号码', trigger: 'blur' },
	            { min:18,max:18, message: '长度为18的数字', trigger: 'blur' }
	          ],
	          leaveTel: [
	            { required: true, message: '请输入你的电话号码', trigger: 'blur' },
	            { min: 11,max:11,message: '长度为 11 的数字', trigger: 'blur' }
	          ],
	          leaveEmail: [
	            { required: true, message: '请输入你的电子邮箱', trigger: 'blur' },
	            { min: 3, max: 20, message: '格式为XXX@XX.XXX', trigger: 'blur' }
	          ],
	          leaveJob: [
	            { required: true, message: '请输入你的职业', trigger: 'blur' }
	          ],
	          leaveGbooklisttitle: [
	            { required: true, message: '请输入你的标题', trigger: 'blur' }
	          ],
	          leaveMessageContents: [
	            { required: true, message: '请输入你的留言内容', trigger: 'blur' },
	            { min: 1, max: 400, message: '内容不超过400字', trigger: 'blur' }

	          ],
	          v_code: [
	            { required: true, message: '请输入验证码', trigger: 'blur' }
	          ]
	        }
	      };
	    },
	    created(){
	    	this.getCode();
	    },
	    methods: {
	      getCode(){
			this.vCode = this.suijiNum(1000,9999);
		  },
		  suijiNum(a,b){
			return Math.round(Math.random()*(b-a)+a);
		  },
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	          	// console.log(this.ruleForm);
	          	// console.log(this.ruleForm.v_code == this.vCode);
	          	// return
	          	if(this.ruleForm.v_code == this.vCode){
	          		this.$axios.post('/leading/addLeaveWordAndAnsweringssss',this.ruleForm).then(res=>{
		           		console.log(res)
		           		this.$message({
				            type: 'success',
				            message: '恭喜你，留言成功'
			          	})
			          	this.resetForm(formName);
		           	}).catch(res=>console.log(res));
	          	}else{
	          		this.$alert('验证码错误，请重新输入', '系统提示', {
                    	confirmButtonText: '确定',
                    });
	          	}
	           	
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
	    }
}
</script>

