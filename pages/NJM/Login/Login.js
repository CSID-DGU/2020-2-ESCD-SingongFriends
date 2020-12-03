const app = getApp()

Page({


  /**
   * Page initial data
   */
  data: {
    id:"",
    pw:"",
    code:"",
    openId:"",
  },
  id:function(e){
    console.log(e.detail.value)
    this.setData({
      id:e.detail.value,
    })
  },
  pw:function(e){
    console.log(e.detail.value)
    this.setData({
      pw:e.detail.value,
    })
  }, 
  Login:function(e){
console.log(this.data.id + this.data.pw);
wx.navigateTo({
  url: '../Menu/Menu',
})
  },


  tryLogin:function(openid){
    var url="http://119.28.235.170/students";
    //url = url + "?appid=" + "wx5be09fc9ea2bb7af"+"&secret="+"73c38d218a25bd2399786e99dc55486a"+"&jscode=code"
    var that=this;
    wx.request({
      url:url,
       method: 'GET',
       success: function (res) {
        console.log(res.data);
        console.log(res.data.length);
        var index=0;
        var isregister=false;
        for(;index<res.data.length;index+=1){
          console.log("oid : "+res.data[index].wechatToken)
          console.log("==? "+openid);
          if(res.data[index].wechatToken==(openid)){
            console.log("있네");
            isregister=true;
            break;
          }else{
            console.log("없네");
          }
        }
        if(isregister){
          console.log("결론 : 있지롱");
          //app.globalData.sesid:res.data[index].wechatToken
          //--------------------------------start
        //  app.setsessionid(openid),
        //   wx.navigateTo({
        //     url: '../Menu/Menu',
        //   })
                    //--------------------------------end
       
       
       
                  }
        else{
          console.log("결론 : 없는디");
        }
 

       },
       fail: function(res){    console.log(res);  },
       complete: function(res){
        console.log(res);
       }
     });
  },
   getOpenid:function(){
    var url="https://api.weixin.qq.com/sns/jscode2session";
    //url = url + "?appid=" + "wx5be09fc9ea2bb7af"+"&secret="+"73c38d218a25bd2399786e99dc55486a"+"&jscode=code"
    var that=this;
    wx.request({
      url:url,
       method: 'GET',
       data:{
         appid:"wx5be09fc9ea2bb7af",
         secret:"73c38d218a25bd2399786e99dc55486a",
         js_code: this.data.code,
          grant_type: 'authorization_code'

       },
       success: function (res) {
        console.log(res.data);
         console.log(res.data.openid);
        that.setData({
          openId : res.data.openid,
        })
        that.tryLogin(res.data.openid);
       },
       fail: function(res){    console.log(res);  },
       complete: function(res){
        console.log(res);
       }
     });
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that=this;

    wx.login({
      
      success (res) {
       console.log("jscode : "+res.code)

       that.setData({
         code:res.code
       });
       // console.log(res)
       that.getOpenid();
      }
    
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

  },

  goToMenu: function () {
    
    wx.navigateTo({
      url: '../Menu/Menu',
    })
    

  }
})