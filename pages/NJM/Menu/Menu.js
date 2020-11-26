// pages/Menu/Menu.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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

  },

  goToRegister: function() {
    wx.navigateTo({
      url: '../Register/Register',
    })
  },

  goToCurriculum: function() {
    wx.navigateTo({
      url: '../../KKW/Curriculum/Curriculum',
    })
  },

  goToScholarship: function() {
    wx.navigateTo({
      url: '../../KHJ/history/index',
    })
  }

})

