// pages/page2/page2.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    goji:"",
    state:"납부 완료",
    semester:"2020 - 2",
 
    a:1,

    select: false,
    dropdown: "Language",

    message_Notification: "정상적으로 납부 되었습니다. 감사합니다!",
    message_PayAmount: "납부 금액",
    message_PaySemester: "납부 학기",
    message_PayCondition: "납부 상태",
    message_gotoMenu: "메뉴로 이동"
  },

  gotoMenu: function (options) {
    wx.navigateTo({
      url: '../../NJM/Menu/Menu',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  
    this.setData({
      goji:options.v
    })
    console.log("current language: " + getApp().globalData.language);
    var that=this
    that.setData({
      dropdown: getApp().globalData.language
    });

    if (that.data.dropdown == "한국어") {
      this.setData({
        message_Notification: "정상적으로 납부 되었습니다. 감사합니다!",
        message_PayAmount: "납부 금액",
        message_PaySemester: "납부 학기",
        message_PayCondition: "납부 상태",
        message_gotoMenu: "메뉴로 이동",
        state:"납부 완료"
      })
    } else if (that.data.dropdown == "中文") {
      this.setData({
        message_Notification: "已正常缴纳。 谢谢！",
        message_PayAmount: "缴款额",
        message_PaySemester: "缴费学期",
        message_PayCondition: "缴款情况。",
        message_gotoMenu: "移动到菜单"
        ,state:"缴讫"
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

  goback:function(){
    wx.navigateBack({
      delta: 0,
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
        message_Notification: "정상적으로 납부 되었습니다. 감사합니다!",
        message_PayAmount: "납부 금액",
        message_PaySemester: "납부 학기",
        message_PayCondition: "납부 상태",
        message_gotoMenu: "메뉴로 이동",
        state: "납부 완료"
      })
    } else if (name == "中文") {
      this.setData({
        message_Notification: "已正常缴纳。 谢谢！",
        message_PayAmount: "缴款额",
        message_PaySemester: "缴费学期",
        message_PayCondition: "缴款情况。",
        message_gotoMenu: "移动到菜单",
        state:"缴讫"
      })
    }
  }
})