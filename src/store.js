import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      bannerImages:'http://jiajiachuang.cn/junran/client/account/wxsetting/get',//首页轮播图
      ctiList:'http://jiajiachuang.cn/junran/client/activity/search',//所有活动信息
      activity:'http://jiajiachuang.cn/junran/client/activity/get',//单条活动信息
      user:'http://jiajiachuang.cn/junran/client/account/get',//用户信息
      useractivity:'http://jiajiachuang.cn/junran/client/useractivity/list',//当前用户参与所有活动的列表
      Upload:'http://jiajiachuang.cn/junran/wxUploadPic/Upload',//上传图片
      upsert:'http://jiajiachuang.cn/junran/client/useractivity/upsert',//用户参与活动
      participate:'http://jiajiachuang.cn/junran/client/useractivity/get',//当前参与活动详情
      account:'http://jiajiachuang.cn/junran/client/account/list?',//首页消息轮播
  },
  mutations: {

  },
  actions: {

  }
})
// var wxtoken = $.cookie('wxtoken');//获取存在cookie中的token
//
// var rewardList='http://jiajiachuang.cn/junran/client/account/list?'//首页消息轮播获奖信息
//
// var userInformation='http://jiajiachuang.cn/junran/client/account/get'//获取用户信息
//
// var Ctilist= 'http://jiajiachuang.cn/junran/client/activity/search'//所有活动信息
//
// var CtiDetails='http://jiajiachuang.cn/junran/client/activity/get'//活动详情
//
// var wxSecurity ='http://jiajiachuang.cn/junran/client/wxJsapiSignature'//调取微信安全验证
//
// var saveFile='http://jiajiachuang.cn/junran/client/wxUpload'//存储微信返回的信息
//
// var participateCti='http://jiajiachuang.cn/junran/client/useractivity/upsert'//参与活动
//
// var partCtiDetails='http://jiajiachuang.cn/junran/client/useractivity/get'//当前参与活动的详情
//
// var partCtiList='http://jiajiachuang.cn/junran/client/useractivity/list'//当前用户参与所有活动的列表
//
// var wxSet='http://jiajiachuang.cn/junran/client/account/wxsetting/get'//微信公众号设置