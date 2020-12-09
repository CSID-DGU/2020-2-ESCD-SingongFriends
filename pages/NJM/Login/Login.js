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
    stID:"",
    stPW:"",
    stCode:"",
    stName:"",
    select: false,
    dropdown: 'Language',

    message_ID: "학번을 입력하세요",
    message_PW: "비밀번호를 입력하세요",
    message_Login: "로그인"
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

  tryLogin: function (openid) {
    var url="http://119.28.235.170/students";
    //url = url + "?appid=" + "wx5be09fc9ea2bb7af"+"&secret="+"73c38d218a25bd2399786e99dc55486a"+"&jscode=code"
    var that=this;
    wx.request({
      url:url,
       method: 'GET',
       success: function (res) {
        var index=0;
        var isregister=false;

        for (; index<res.data.length; index+=1) {
          console.log("openID : " + res.data[index].wechatToken)
          console.log("==? " + openid);
          if(res.data[index].wechatToken==(openid)) {
            isregister = true;
            getApp().globalData.studentID = res.data[index].studentId;
            that.data.stID = res.data[index].studentId;
            that.data.stName = res.data[index].name;
            that.data.stCode = res.data[index].studentCode;
            break;
          }
        }
        if (isregister) {
          console.log("결과: 동일한 OpenID 존재");
          console.log("studentID: " + getApp().globalData.studentID);
          console.log("studentName: " + that.data.stName);
          if (that.data.dropdown == "中文") {            
            wx.showModal({
              title: that.data.stName,
              content: "要登录吗？",
              cancelColor: 'cancelColor',
              success (res) {
                if (res.confirm) {
                  wx.navigateTo({
                    url: '../Menu/Menu',
                  })
                }
              }
            })
          }
          else {
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
                else if (res.cancel) {
                  var url="http://119.28.235.170/logout";
                  wx.request({
                    url:url,
                    method: 'POST',
                    data:{
                      studentCode: that.data.stCode
                    },
                    success: function (res) {
                      console.log("로그아웃 대상 학번: " + that.data.stCode);
                      console.log("로그아웃 성공");
                    },
                    fail: function (res) {
                      console.log("로그아웃 실패");
                    },
                    complete: function(res){
                      console.log(res);
                    }
                  });
                }
              }
            })
          }
        }
        else {
          console.log("결과: 동일한 OpenID 존재 x");
        }
       },
       fail: function (res) {console.log(res);},
       complete: function (res) {
        console.log(res);
       }
     });
  },

   getOpenid:function() {
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
       fail: function (res) {console.log(res);},
       complete: function (res) {
        console.log(res);
       }
     });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      dropdown: getApp().globalData.language
    })
    console.log("currentLanguage: " + getApp().globalData.language)
    if (that.data.dropdown == "한국어") {
      this.setData({
        message_ID: "학번을 입력하세요.",
        message_PW: "비밀번호를 입력하세요.",
        message_Login: "로그인"
      })
    } else if (that.data.dropdown == "中文") {
      this.setData({
        message_ID: "请输入学号。",
        message_PW: "请输入密码。",
        message_Login: "登录"
      })
    }
    wx.login({
      success (res) {
       console.log("jscode : " + res.code)
       that.setData({
         code:res.code
       });
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
    this.setData({
      dropdown:getApp().globalData.language
    });
    var url="http://119.28.235.170/login";
    var that=this;
    wx.request({
      url:url,
       method: 'POST',
       data:{
         studentCode: this.data.stID,
         password: this.data.stPW,
         wechatToken: this.data.openId
       },
       success: function (res) {
        var flag = res
        if (res.data) {
          console.log("로그인 성공");
          wx.navigateTo({
            url: '../Login/Login',
          })
        }
        else {
          console.log("로그인 실패");
          if (that.data.dropdown == "中文") {            
            wx.showModal({
              title: "用户不存在或密码错误！",
              showCancel: false
            })
          }
          else {
            wx.showModal({
              title: "사용자가 존재하지 않거나 비밀번호가 틀립니다!",
              showCancel: false,
              confirmText: "확인"
            })
          }
        }
       },
       fail: function(res){console.log(res);},
       complete: function(res){
        console.log(res);
       }
     });
  },

  bindShowMsg() {
    this.setData({
        select:!this.data.select
    })
  },

  mySelect(e) {
    var name = e.currentTarget.dataset.name
    getApp().globalData.language = name
    console.log("currentLanguage: " + getApp().globalData.language)
    this.setData({
        dropdown: name,
        select: false
    })

    if (name == "한국어") {
      this.setData({
        message_ID: "학번을 입력하세요.",
        message_PW: "비밀번호를 입력하세요.",
        message_Login: "로그인"
      })
    }
    else if (name == "中文") {
      this.setData({
        message_ID: "请输入学号。",
        message_PW: "请输入密码。",
        message_Login: "登录"
      })
    }
  }
})