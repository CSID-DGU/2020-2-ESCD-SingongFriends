// pages/myinfo/myinfo.js
Page({

  data: {
    userinfo:null,
    btText : "정보 가져오기"
  },

  onLoad: function (options) {

  },

  myGetFunc:function(e){
    console.log(e);
   // userinfo=e.detail.userInfo
    this.setData({
      userinfo:e.detail.userInfo
    })
  },
  goHome:function(e){
    console.log(e);
    wx.navigateTo({ 
      url:'/pages/page2/page2'
    })
  }
 
})