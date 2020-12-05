// pages/Menu/Menu.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    select: false,
    dropdown: "Language",

    message_Menu: "메뉴",
    message_Register: "등록",
    message_Scholarship: "장학",
    message_Curriculum: "이수과정"
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
        message_Menu: "메뉴",
        message_Register: "등록",
        message_Scholarship: "장학",
        message_Curriculum: "이수과정"
      })
    } else if (that.data.dropdown == "中文") {
      this.setData({
        message_Menu: "菜单",
        message_Register: "注册",
        message_Scholarship: "奖学",
        message_Curriculum: "课程"
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

  goToRegister: function() {
    wx.navigateTo({
      url: '../Register/Register',
    })
  },

  goToCurriculum: function() {
    wx.navigateTo({
      url: '../../KKW/Menu/Menu',
    })
  },

  goToScholarship: function() {
    wx.navigateTo({
      url: '../../KHJ/history/index',
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
        message_Menu: "메뉴",
        message_Register: "등록",
        message_Scholarship: "장학",
        message_Curriculum: "이수과정"
      })
    } else if (name == "中文") {
      this.setData({
        message_Menu: "菜单",
        message_Register: "注册",
        message_Scholarship: "奖学",
        message_Curriculum: "课程"
      })
    }
  }
})
