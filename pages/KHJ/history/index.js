//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '으 중국프로그램 너무싫다;',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    result:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  ReqRes:function(url){
    var that=this
    wx.request({// 'http://staris.freehongs.net/web/androidtest.do'
     //
     url :url,
     method: 'GET',
      data:{},
      success: function (res) {
        console.log(res.data);

       that.setData({
         result:res.data,
       });
       var r=that.data.result;
       console.log(r.length);
       for(var i=0;i<r.length;i++){
console.log(r[i].money.toString().length);
var len=r[i].money.toString().length;
var newstr="";
var strmoney=r[i].money.toString()
switch(len){
  case 4:
    for(var k=0;k<len+1;k++){
      if(k==1){
        newstr+=",";
      }
      newstr+=strmoney[k];
    }
    break;
    case 5:
      for(var k=0;k<len;k++){
        if(k==2){
          newstr+=",";
        }
        newstr+=strmoney[k];
      }
      break;
      case 6:
        for(var k=0;k<len;k++){
          if(k==3){
            newstr+=",";
          }
          newstr+=strmoney[k];
        }
        break;
        case 7:
          for(var k=0;k<len;k++){
            if(k==1||k==4){
              newstr+=",";
            }
            newstr+=strmoney[k];
          }
          break;
          default:
            break;
}
r[i].money=newstr;
       }
       that.setData({
         result:r
       })
      },
      fail: function(res){ },
      complete: function(){ }
    });
  },
  onLoad: function () {
var url="http://119.28.235.170/student-scholars/1"// 아이디 불러와서 지정해야함 
this.ReqRes(url);


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
