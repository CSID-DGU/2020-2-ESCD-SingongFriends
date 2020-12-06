// pages/Menu/Menu.js
Page({
  data: {
    select: false,
    dropdown: "Language",

    message_Curriculum1: "이수과정",
    message_Introduction: "학과 소개",
    message_Curriculum2: "커리큘럼"
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
        message_Curriculum1: "이수과정",
        message_Introduction: "학과 소개",
        message_Curriculum2: "커리큘럼"
      })
    } else if (that.data.dropdown == "中文") {
      this.setData({
        message_Curriculum1: "课程菜单",
        message_Introduction: "学术信息",
        message_Curriculum2: "课程"
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

  goToInfo: function() {
    wx.navigateTo({
      url: '../BasicComponents/BasicComponents',
    })
  },

  goToCurriculum: function() {
    wx.navigateTo({
      url: '../Curriculum/Curriculum',
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
        message_Curriculum1: "이수과정",
        message_Introduction: "학과 소개",
        message_Curriculum2: "커리큘럼"
      })
    } else if (name == "中文") {
      this.setData({
        message_Curriculum1: "课程菜单",
        message_Introduction: "学术信息",
        message_Curriculum2: "课程"
      })
    }
  }
})

