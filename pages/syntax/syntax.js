// pages/syntax/syntax.js
Page({

  /**
   * Page initial data
   */
  data: {
    ar:['안','녕','하','세','요'],
    arr:['a','b','c'],
    object: {
      key1: '4,580,000 ',
      key2: '납부완료',
      key3: '2020 1학기 '
    }
    ,
    object3: {
      key1: '4,580,000 ',
      key2: '납부완료',
      key3: '2020 2학기 '
    },
    object2: {
      key1: '290,000 ',
      key2: '납부완료',
      key3: '2020 여름학기 '
    },
    object4: {
      key1: '4,580,000 ',
      key2: '납부완료',
      key3: '2020 겨울학기 '
    },
    a:3,
    b:2,
    arobj:[],
    
    
  },
  

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // var thi=this;
    // var ab=3;
    // var a=this.data.a;
    this.setData({
      arobj:[this.data.object,this.data.object2,this.data.object3,this.data.object4],
    })
  },
  go:function(){
console.log("늉");
  },
  gopage2:function(){
    wx.navigateTo({
      url: '../page2/page2',
    })
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