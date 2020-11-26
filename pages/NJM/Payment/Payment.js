// pages/Payment/Payment.js
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

  goToWechatPay: function () {
    wx.requestPayment({
      appId: 'wxd678efh567hg6787 ',
      timeStamp: '1490840662',
      nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
      package: 'prepay_id=wx2017033010242291fcfe0db70013231072',
      signType: 'MD5',
      paySign: '9FBB950F61370E398B6E03843FC84E5D',
      success (res) { },
      fail (res) { }
    })
    wx.navigateTo({
      url: '../../staris/page2/page2',
    })
  }
})