//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    semester:[20192,20201,20202],
    motto: '으 중국프로그램 너무싫다;',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    result:[],
    result2:[],
    result20191:[],
    result20192:[],
    result20201:[],
    result20202:[],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  ReqRes:function(url,sem){

    var that=this
    wx.request({
     url :url,
     method: 'GET',
      data:{},
      success: function (res) {
        
       // var k =JSON.stringify(res.data)
        that.setData({
         result:res.data,
         result2:k
       });
       var r=that.data.result;
       var re=[];
     //  var kk=that.data.result2;
      //  for(var i=0;i<3;i++){
      //    console.log(r[i])
      //  }

     //  console.log(kk)
       //console.log(r)
      // console.log(sem)
       for(var i=0;i<r.length;i++){
       //  console.log(r[i])
        if(r[i].semester==sem){
       //   console.log(sem);
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

// switch(sem){
//   case 20191:

//     that.setData({
//       result20191:r
//     })
//     break;
//     case 20192:
//       that.setData({
//         result20192:r
//       })
//       break;
//       case 20201:that.setData({
//         result20201:r
//       })
//         break;
//         case 20202:that.setData({
//           result20202:r
//         })
//           break;
//           default:
//             break;
  
//   }
re.push(r[i])
        }
        else{
         // console.log(r.pop())
         // i-=1


          that.setData({
            result:r
          })
        }
    //    console.log("?")
     //   console.log(re)
       }
       switch(sem){
  case 20191:

    that.setData({
      result20191:re
    })
    break;
    case 20192:
      that.setData({
        result20192:re
      })
      break;
      case 20201:that.setData({
        result20201:re
      })
        break;
        case 20202:that.setData({
          result20202:re
        })
          break;
          default:
            break;
  
  }
       switch(sem){
        case 20191:
          console.log(sem+": ")
       console.log(that.data.result20191)
          break;
          case 20192:          console.log(sem+": ")
          console.log(that.data.result20192)
            break;
            case 20201:          console.log(sem+": ")
            console.log(that.data.result20201)
              break;
              case 20202:          console.log(sem+": ")
              console.log(that.data.result20202)
                break;
                default:
                  break;
        
        }
   

      },
      fail: function(res){ },
      complete: function(){ 


switch(sem){
  case 20191:
    that.ReqRes(url,20192);
    break;
    case 20192:
      that.ReqRes(url,20201);
      break;
      case 20201:
        
that.ReqRes(url,20202);
        break;
          default:
            break;
  
  }
      }
    });
  },
  selectSemester:function(){
    var sem=""
    var url="http://119.28.235.170/student-scholars/"+app.globalData.studentID
    this.ReqRes(url,sem)
  },
  onLoad: function () {
var url="http://119.28.235.170/student-scholars/"+app.globalData.studentID// 아이디 불러와서 지정해야함 
this.ReqRes(url,20191);
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
