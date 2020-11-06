// pages/page2/page2.js
Page({

  /**
   * Page initial data
   */
  data: {
 
    obj: {
      key1: '4,580,000 ',
      key2: '납부완료',
      key3: '2020 1학기 '
    }
    ,
    a:1

  },
go:function(options){
  wx.navigateTo({
    url: '../page3/page3',
  })
},
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

      this.setData({
       // sesid:app.globalData.sesid
      })
    //  console.log("culistid : "+this.data.sesid);
    //http://119.28.235.170/students
      var that=this
      wx.request({
       url:'http://staris.freehongs.net/web/androidtest.do',
        method: 'GET',
        data:{
          // name: "pay",
          // studentCode: "20121313",
          // wechatToken: "helloworld"
        },
        success: function (res) {
        //  console.log(JSON.stringify(res))
        // that.setData({curlist:res.data.sendData})
          console.log(res.data);
          console.log(res.data.sendData[0].f)
         // console.log(res.data[0].studentId);
         that.setData({
           obj:{key1:res.data.sendData[0].f,key2:res.data.sendData[0].l,key3:'?'}
           //obj:{key1:res.data[0].student~~~~}
         })
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

  },
  goback:function(){
    wx.navigateBack({
      delta: 0,
    })
  }
})