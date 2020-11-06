// pages/staris/curlist/curlist.js
var app=getApp()
Page({

  /**
   * Page initial data
   */
  data: {
sesid:null,
curlist:[],
  },
  /**
   * Lifecycle function--Called when page load
   */
  
onLoad: function (options) {
console.log("culist : "+app.globalData.sesid);
this.setData({
  sesid:app.globalData.sesid
})
console.log("culistid : "+this.data.sesid);
var that=this
// url: 'http://localhost:8052/web/androidtest.do'+'?id='+that.data.sesid,
//http://119.28.235.170/explorer // 
wx.request({
 url:'http://119.28.235.170/students',
  method: 'POST',
  data:{
    name: "pay",
    studentCode: "20121313",
    wechatToken: "helloworld"
  },
  success: function (res) {
    console.log(JSON.stringify(res))
  // that.setData({curlist:res.data.sendData})
   // console.log(that.data);
  //  console.log(res.data[0].studentId)
  },
  fail: function(){  },
  complete: function(){
    that.setData({ })
  }
});

},

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})