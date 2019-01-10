<style scoped>
a{
  text-decoration: none;
  color: #475669;
}
a:hover{
  color: #cb0f0e;
}
.block{
  text-align:center;
}
.banner img{
  width:100%;
  height:340px;
}
.banner p{
  padding:0px 30px;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
 .el-row {
  margin: 20px 0;
  &:last-child {
    margin-bottom: 0;
  }
}
.bumen{
  margin-top: 20px;
}
.bumenItem{
  display: inline-block;
  margin:10px 20px;
}
.part{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.part a{
  margin: 5px 20px;
}
.banner1 img{
  width: 1200px;
  height:128px;
}

#etabs>>> .is-active{
    color: #fff;
    background-color: #cb0f0e;
}
/*#etabs>>>.el-tabs__item:hover{
   color: #cb0f0e;
}*/
</style>
<template>
	<div id="index">
    <!-- 【4】轮播图显示 -->
		<div class="block">
         <el-carousel height="60px" class="title" indicator-position="none" arrow="never" ref="carousel">
          <el-carousel-item v-for="(item,index) in titles" :key="index">
            <h2><router-link :to="{path:'/InfoDetail/?id='+item.newsId}">{{item.newsTitle}}</router-link></h2>
          </el-carousel-item>
        </el-carousel>
		    <el-carousel height="400px" class="banner">
		      <el-carousel-item v-for="(item,index) in imgs" :key="index">
            <img :src="item.bannerImg">
            <p>{{item.bannerTitle}}</p>
		      </el-carousel-item>
		    </el-carousel>
		</div>

	    <el-row type="flex" justify="space-around" align="middle">
        <!-- 【5】点击更多进入列表页面 -->
        <!-- 投资动态 -->
  		  <el-col :span="12"><Module1 ref="myChar" :datas="data1">{{data1.secName}}</Module1></el-col>
        <!-- 政策 -->
  		  <el-col :span="12"><Module1 :datas="datass">{{datass.secName}}</Module1></el-col>
  		</el-row>
  		<el-row type="flex" justify="space-around" align="middle">
        <!-- 【6】点击进入相应列表页面 -->
  		  <el-col :span="12"><Module2 :datas="news.sections">{{news.secName}}</Module2></el-col>
  		  <el-col :span="12"><Module3 :datas="fw">{{fw.secName}}</Module3></el-col>
  		</el-row>

      <!-- 【7】专题轮播图片 -->
    <div class="block">
        <h4 align="left">专题</h4>
        <el-carousel height="128px" class="banner1">
          <el-carousel-item v-for="(item,index) in imgs2" :key="index">
            <img :src="item.speSubImg">
          </el-carousel-item>
        </el-carousel>
    </div>

    <!-- 【8】鼠标放上显示相应列表 -->
    <div class="bumen">

        <el-tabs type="border-card" id="etabs">
          <el-tab-pane v-for="(item,index) in bumens" :label="item.name" :key="index">
            <div class="part">
              <span v-for="(j,k) in item.functions"><a href="#">{{j.name}}</a></span>

            </div>
          </el-tab-pane>

        </el-tabs>



    </div>

	</div>

</template>
<script>
import Module1 from "./Module1"
import Module2 from "./Module2"
import Module3 from "./Module3"
export default{
  name:'Index',
	data(){
		return {
      titles:[],
      data1:{},
      dataSecid:'',
      datass:'',
			imgs:[
        {img:require('@/assets/img1.jpg'),msg:'拜水都江堰'},
        {img:require('@/assets/img2.jpg'),msg:'问道青城山'},
        {img:require('@/assets/img3.jpg'),msg:'拜水都江堰'},
        {img:require('@/assets/img4.jpg'),msg:'问道青城山'}
      ],
      imgs2:[
        {img:require('@/assets/img/pro_banner1_13.png')},
        {img:require('@/assets/img2.jpg')},
        {img:require('@/assets/img3.jpg')},
        {img:require('@/assets/img4.jpg')},
        {img:require('@/assets/img1.jpg')},
        {img:require('@/assets/img2.jpg')},
        {img:require('@/assets/img3.jpg')},
      ],
      dt:[
        {msg:'李克强同埃塞俄比亚总理阿比举行会谈'},
        {msg:'刘鹤会见非洲开发银行行长阿德西纳'},
        {msg:'刘鹤会见非洲开发银行行长阿德西纳'},
        {msg:'刘鹤会见非洲开发银行行长阿德西纳'},
        {msg:'刘鹤会见非洲开发银行行长阿德西纳'},

      ],
      wj:[
        {msg:'李克强同埃塞俄比亚总理阿比举行会谈'},
        {msg:'刘鹤会见非洲开发银行行长阿德西纳'},
        {msg:'刘鹤会见非洲开发银行行长阿德西纳'},
        {msg:'刘鹤会见非洲开发银行行长阿德西纳'},
        {msg:'刘鹤会见非洲开发银行行长阿德西纳'},

      ],
      news:[
        {msg:'行政权力运行'},
        {msg:'财政资金'},
        {msg:'公共资源配置'},
        {msg:'重大项目'},
        {msg:'公共服务'},
        {msg:'国有企业'},
        {msg:'食品药品安全'},
        {msg:'环境保护'},
        {msg:'公共企事业单位'},
      ],
      fw:[
        {msg:'个人办事'},
        {msg:'企业办事'}
      ],
      bumens:[
        {id:0,title:'政府组成部门',jigous:[{name:'发展改革委'},{name:'公安厅'},{name:'国土资源厅'},{name:'教育厅'},]},
        {id:1,title:'直属机构',jigous:[{name:'经济和信息化委'},{name:'民政厅'},{name:'发展改革委'},{name:'民族宗教委'},]},
        {id:2,title:'直属事业单位',jigous:[{name:'教育厅'},{name:'司法厅'},{name:'科技厅'},{name:'发展改革委'},]},
        {id:3,title:'直属特色机构',jigous:[{name:'科技厅'},{name:'国土资源厅'},{name:'发展改革委'},{name:'环境保护厅'},]},
        {id:4,title:'部门管理机构',jigous:[{name:'民族宗教委'},{name:'环境保护厅'},{name:'发展改革委'},{name:'教育厅'},]},
      ]
		}
  },
  // watch(){
  //   datas()
  // },
  created(){
//  this.$axios.get()
    this.getResource()
    console.log(this.data1)
  },
  methods:{
    titleClick(){
      this.$router.push('/index/indexChild')
    },
    getResource(){
      // 轮播图部分
      this.$axios.get('/leading/getAllBannerByState').then(res => {
        this.imgs = res.data.data
      }),
      //要闻
      this.$axios.get('/leading/getAllNewsByState').then(res => {
        this.titles = res.data.data

        console.log(res)
      }),
      // 投资动态
      this.$axios.get('/leading/getAllMsgOfSecIdOfFive193').then(res => {
      
        console.log((res))
        this.data1 = res.data.data
        this.dataSecid = res.data.data.secId
       // console.log(this.data1.secId)
      }),
      // 政策文件
      this.$axios.get('/leading/getAllMsgOfSecIdOfFive209').then(res => {
				//console.log(res)
				this.datass = res.data.data
      }),
      // 政府信息公开
      this.$axios.get('/leading/getFirstSectionsTwoAndThree210').then(res => {
				console.log(res)
				this.news = res.data.data
      })
      //政务服务
      this.$axios.get('/leading/getFirstSectionsTwoAndThree219').then(res => {
        console.log(res)
        this.fw = res.data.data
      })
      //专题
      this.$axios.get('/leading/getAllSpecialByState').then(res => {
        console.log(res)
        this.imgs2=res.data.data;
      }),
      this.$axios.get('/leading/getAllFcategoryAndFuction').then(res => {
        this.bumens = res.data.fcategorys
        console.log(res)
      })
    }
  },
  components:{
    Module1,Module2,Module3
  }
}
</script>
