import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/Index'//首页
import More from '@/components/more/More'
import Contents from '@/components/more/Contents'
import Search from '@/components/more/Search'
// import IndexChild from '@/components/index/IndexChild'
import Area from '@/components/area/Area'//地区简介
import ZrArea from '@/components/area/ZrArea'
import Rkjy from '@/components/area/Rkjy'
import Jjsl from '@/components/area/Jjsl'
import Dwjj from '@/components/area/Dwjj'

import FunctionOrg from '@/components/functionOrg/FunctionOrg'//职能机构
import LeaderInfo from '@/components/leaderInfo/LeaderInfo'//领导信息
import GoverNews from '@/components/goverInfo/GoverNews'//政务信息
import GoverServe from '@/components/goverServe/GoverServe'//政务服务

import InfoDetail from '@/components/infoDetail/InfoDetail'//信息详情
import videoInfo from '@/components/infoDetail/videoInfo'//视频信息详情

import Interaction from '@/components/communction/Interaction'//互动交流
import LeaveMsg from '@/components/communction/LeaveMsg'//我要留言
// import LeaveMsg from '@/components/msg/LeaveMsg'//我要留言
import DoMsg from '@/components/communction/DoMsg'//办理留言
import TongjiMsg from '@/components/communction/TongjiMsg'//统计留言
import TongjiDetail from '@/components/communction/TongjiDetail'//统计留言详情

import InvestInfo from '@/components/touziNews/InvestInfo'//投资信息
import TravelInfo from '@/components/travelNews/TravelInfo'//旅游信息


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name:Index,
      component: Index
    },{
      path: '/index',//首页
      component: Index
    },{
      path: '/more',
      name: 'More',
      component: More
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/contents',
      name: 'Contents',
      component: Contents
    },{
      path: '/area',//地区简介
      component: Area,
      children:[
        {
          path: '',
          component: ZrArea
        },{
          path: 'zrArea',
          component: ZrArea
        },{
          path: 'rkjy',
          component: Rkjy
        },{
          path: 'jjsl',
          component: Jjsl
        },{
          path: 'dwjj',
          component: Dwjj
        }
      ]
    },{
      path: '/functionOrg',//职能机构
      component: FunctionOrg
    },{
      path: '/leaderInfo',//领导信息
      component: LeaderInfo
    },{
      path: '/goverNews',//政务信息
      component: GoverNews
    },{
      path: '/goverServe',//政务服务
      component: GoverServe
    },{
      path: '/InfoDetail',//信息详情
      component: InfoDetail
    },{
      path: '/videoInfo',
      component: videoInfo
    },{
      path: '/interaction',//互动交流
      component: Interaction,
    },{
      path: '/investInfo',//投资信息
      component: InvestInfo
    },{
      path: '/travelInfo',//旅游信息
      component: TravelInfo
    },{
      path: '/interaction/LeaveMsg',//我要留言
      component: LeaveMsg
    },{
      path: '/interaction/doMsg',//办理留言
      component: DoMsg
    },{
      path: '/interaction/tongjiMsg',//统计留言
      component: TongjiMsg
    },{
      path: '/interaction/tongjiDetail',//统计留言详情
      component: TongjiDetail
    }
  ]
})
