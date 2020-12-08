// pages/NJM/Scholarship/Scholarship.js
Page({

  /**
   * Page initial data
   */
  data: {
    semester_view:["2019-2","2020-1","2020-2"],

    select: false,
    dropdown: "Language",

    message_Scholarship: "장학",
    message_Scholarship1: "학기 우수 장학금",
    message_Scholarship2: "강좌 수석 장학금",
    message_Scholarship3: "국가 장학금"
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
        message_Scholarship: "장학",
        message_Scholarship1: "학기 우수 장학금",
        message_Scholarship2: "강좌 수석 장학금",
        message_Scholarship3: "국가 장학금"
      })
    } else if (that.data.dropdown == "中文") {
      this.setData({
        message_Scholarship: "奖学",
        message_Scholarship1: "学期优秀奖学金",
        message_Scholarship2: "讲座首席奖学金",
        message_Scholarship3: "国家奖学金"
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
        message_Scholarship: "장학",
        message_Scholarship1: "학기 우수 장학금",
        message_Scholarship2: "강좌 수석 장학금",
        message_Scholarship3: "국가 장학금"
      })
    } else if (name == "中文") {
      this.setData({
        message_Scholarship: "奖学",
        message_Scholarship1: "学期优秀奖学金",
        message_Scholarship2: "讲座首席奖学金",
        message_Scholarship3: "国家奖学金"
      })
    }
  }
})