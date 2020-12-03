Page({
  /**
   * Page initial data
   */
  data: {
    code:"",
    openId:"",
    stID:"",
    stPW:"",
    stName:""
  },
  input_stID: function (e) {
    this.setData({
      stID: e.detail.value
    })
  },

  input_stPW: function (e) {
    this.setData({
      stPW: e.detail.value
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
          console.log("openID : "+res.data[index].wechatToken)
          console.log("==? "+openid);
          if(res.data[index].wechatToken==(openid)){
            // console.log("OpenID가 존재함");
            isregister=true;
            getApp().globalData.studentID = res.data[index].studentId;
            that.data.stID = res.data[index].studentId;
            that.data.stName = res.data[index].name;
            break;
          }
        }
        if(isregister){
          console.log("결론 : OpenID 존재 o");
          console.log("studentID: " + getApp().globalData.studentID);
          console.log("studentName: " + that.data.stName);
          wx.showModal({
            title: that.data.stName,
            content: "으로 로그인할까요?",
            confirmText: "확인",
            cancelText: "취소",
            cancelColor: 'cancelColor',
            success (res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: '../Menu/Menu',
                })
              }
            }
          })
          /*
          wx.navigateTo({
            url: '../Menu/Menu',
          })
          */
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
       fail: function(res){console.log(res);},
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

  checkStudent: function () {
    
    var url="http://119.28.235.170/login";
    wx.request({
      url:url,
       method: 'POST',
       data:{
         studentCode: this.data.stID,
         password: this.data.stID,
         wechatToken: this.data.openId
       },
       success: function (res) {
        var flag = res
        console.log("로그인 성공?: " + res.data)
        if(res.data){
          console.log("로그인 성공");

          wx.navigateTo({
            url: '../Login/Login',
          })
        }
        else{
          console.log("로그인 실패");
        }
       },
       fail: function(res){    console.log(res);  },
       complete: function(res){
        console.log(res);
       }
     });
  }
})