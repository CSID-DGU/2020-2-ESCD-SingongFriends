// pages/Register/Register.js
Page({

  data: {
    select: false,
    dropdown: "Language",

    message_Register: "등록",
    message_Bill: "고지서",
    message_Receipt: "납부내역"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log("current language: " + getApp().globalData.language);
    var that=this
    that.setData({
      dropdown: getApp().globalData.language
    });

    if (that.data.dropdown == "한국어") {
      this.setData({
        message_Register: "등록",
        message_Bill: "고지서",
        message_Receipt: "납부내역"
      })
    } else if (that.data.dropdown == "中文") {
      this.setData({
        message_Register: "注册",
        message_Bill: "告知书",
        message_Receipt: "缴款明细"
      })
    }
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

  goToPayment: function() {
    wx.navigateTo({
      url: '../Payment/Payment',
    })
  },

  goPayList:function(){
    wx.navigateTo({
      url: '../../staris/page1/page1',
    })
  },

  bindShowMsg() {
    this.setData({
        select:!this.data.select
    })
  },

  mySelect(e) {
    var name = e.currentTarget.dataset.name
    getApp().globalData.language = name
    this.setData({
        dropdown: name,
        select: false
    })

    if (name == "한국어") {
      this.setData({
        message_Register: "등록",
        message_Bill: "고지서",
        message_Receipt: "납부내역"
      })
    } else if (name == "中文") {
      this.setData({
        message_Register: "注册",
        message_Bill: "告知书",
        message_Receipt: "缴款明细"
      })
    }
  }
})