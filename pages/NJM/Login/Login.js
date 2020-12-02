Page({

  /**
   * Page initial data
   */
  data: {
    code:"",
    openId:"",
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
          console.log("openID : "+res.data[index].wechatToken)
          console.log("==? "+openid);
          if(res.data[index].wechatToken==(openid)){
            console.log("OpenID가 존재함");
            isregister=true;
            break;
          }else{
            console.log("OpenID가 존재하지 않음");
          }
        }
        if(isregister){
          console.log("결론 : OpenID 존재 o");
        }
        else{
          console.log("결론 : OpenID 존재 x");
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