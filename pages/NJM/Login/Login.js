Page({

  /**
   * Page initial data
   */
  data: {
    code:""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  /*
  //////////////////////////////////////////////////////////////////////////
  // console.log("culist : "+app.globalData.sesid);
  this.setData({
    // sesid:app.globalData.sesid
  })
  // console.log("culistid : "+this.data.sesid);
  var that = this
  // url: 'http://localhost:8052/web/androidtest.do'+'?id='+that.data.sesid,
  //http://119.28.235.170/explorer // 
  wx.request({
   url:'http://119.28.235.170/students',
    method: 'GET',
    success: function (res) {
      console.log(JSON.stringify(res))
    // that.setData({curlist:res.data.sendData})
     // console.log(that.data);
     
     console.log(res.data[0].studentId)
  
  
     
    },
    fail: function(){  },
    complete: function(){
      that.setData({ })
    }
  });
  
  //////////////////////////////////////////////////////////////////////////
  */
    
    var that=this;
    wx.login({
      success (res) {
       that.setData({
         code:res.code
       })
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

  goToMenu: function () {
    /*
    wx.navigateTo({
      url: '../Menu/Menu',
    })
    */
    var url="https://api.weixin.qq.com/sns/jscode2session";
    url = url + "?appid=" + "wx5be09fc9ea2bb7af"+"&secret="+"73c38d218a25bd2399786e99dc55486a"+"&jscode=code"
  
    wx.request({
     url:url,
      method: 'GET',
      data:{
        appid:"wx5be09fc9ea2bb7af",
        secret:"73c38d218a25bd2399786e99dc55486a",
        js_code: this.code,
        grant_type: 'authorization_code'
        // name: "pay",
        // studentCode: "20121313",
        // wechatToken: "helloworld"
      },
      success: function (res) {
      //  console.log(JSON.stringify(res))
      // that.setData({curlist:res.data.sendData})
        console.log(res);
       
       // console.log(res.data[0].studentId);
  
      },
      fail: function(){  },
      complete: function(){
      }
    });
   
  }
})