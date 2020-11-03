// pages/test/test.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {

  },
  manage:function(){

  },
  curlist:function(){
wx.navigateTo({
  url: '/pages/staris/curlist/curlist',
})
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    app.globalData.sesid="1234";
console.log(app.globalData.sesid)
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