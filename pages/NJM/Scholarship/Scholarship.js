// pages/NJM/Scholarship/Scholarship.js
const app=getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    semester:[20192,20201,20202],
    won:"원",

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    result:[],
    result2:[],
    result20191:[],
    result20192:[],
    result20201:[],
    result20202:[],

    flag:false,

    semester_view:["2019-1","2019-2","2020-1","2020-2"],

    select: false,
    dropdown: "Language",

    message_noData: "장학 내역이 없습니다.",

    message_Scholarship: "장학",
    message_Scholarship1: "학기 우수 장학금",
    message_Scholarship2: "강좌 수석 장학금",
    message_Scholarship3: "국가 장학금"
  },

  /**
   * Lifecycle function--Called when page load
   */
  ReqRes:function(url,sem){
    var that=this
    wx.request({
      url :url,
      method: 'GET',
      data:{},
      success: function (res) {
        that.setData({
          result:res.data,
          result2:k
        });
        var r=that.data.result;
        console.log(r)

        if (that.data.dropdown == "中文") {
          for(var i = 0; i < r.length; i++) {
            if(r[i].fund=="강좌 수석 장학금") {
              r[i].fund="讲座首席奖学金"
            }
            if(r[i].fund=="학기 우수 장학금") {
              r[i].fund="学期优秀奖学金"
            }
            if(r[i].fund=="국가 장학금") {
              r[i].fund="国家奖学金"
            }
          }
        }

        var re=[];

        if (r.length == 0) {
          that.setData({
            flag: true
          })
        }

        for(var i=0;i<r.length;i++) {
          if(r[i].semester==sem) {
            var len=r[i].money.toString().length;
            var newstr="";
            var strmoney=r[i].money.toString()
            
            switch(len) {
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
            re.push(r[i])
          }
          else {
            that.setData({
              result:r
            })
          }
        }

        switch(sem) {
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
          case 20201:
            that.setData({
              result20201:re
            })
            break;
          case 20202:
            that.setData({
              result20202:re
            })
            break;
          default:
            break;
        }

        switch(sem) {
          case 20191:
            console.log(sem+": ")
            console.log(that.data.result20191)
            break;
          case 20192:
            console.log(sem+": ")
            console.log(that.data.result20192)
            break;
          case 20201:
            console.log(sem+": ")
            console.log(that.data.result20201)
            break;
          case 20202:
            console.log(sem+": ")
            console.log(that.data.result20202)
            break;
          default:
            break;
        }
      },
      fail: function(res) { },
      complete: function() { 
        switch(sem) {
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

  onLoad: function (options) {    
    console.log("current language: " + getApp().globalData.language);
    var that=this
    that.setData({
      dropdown: getApp().globalData.language
    });

    var url="http://119.28.235.170/student-scholars/"+app.globalData.studentID// 아이디 불러와서 지정해야함 
    this.ReqRes(url,20191);

    if (that.data.dropdown == "한국어") {
      this.setData({
        message_Scholarship: "장학",
        message_Scholarship1: "학기 우수 장학금",
        message_Scholarship2: "강좌 수석 장학금",
        message_Scholarship3: "국가 장학금",
        won:"원",
        message_noData: "장학 내역이 없습니다."
      })
    } else if (that.data.dropdown == "中文") {
        this.setData({
          message_Scholarship: "奖学",
          message_Scholarship1: "学期优秀奖学金",
          message_Scholarship2: "讲座首席奖学金",
          message_Scholarship3: "国家奖学金",
          won:"won",
          message_noData: "奖学明细不存在。"
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

  bindShowMsg() {
    this.setData({
        select:!this.data.select
    })
  },

  switchchina(new20,k) {
    console.log("중국어로 바꿔라")
    var l=new20.length
    for(var i=0;i<l;i+=1) {
      if(new20[i].fund=="강좌 수석 장학금") {
        new20[i].fund="讲座首席奖学金"
      }
      if(new20[i].fund=="학기 우수 장학금") {
        new20[i].fund="学期优秀奖学金"
      }
      if(new20[i].fund=="국가 장학금") {
        new20[i].fund="国家奖学金"
      }
    }
    switch(k) {
      case 1:
        this.setData({
          result20191:new20
        })
        break;
      case 2:
        this.setData({
          result20192:new20
        })
        break;
      case 3:
        this.setData({
          result20201:new20
        })
        break;
      case 4:
        this.setData({
          result20202:new20
        })
        break;
    }
  },
  switchkorea(new20,k) {
    var l=new20.length
    for(var i=0;i<l;i+=1) {
      if(new20[i].fund=="讲座首席奖学金") {
        new20[i].fund="강좌 수석 장학금"
      }
      if(new20[i].fund=="学期优秀奖学金") {
        new20[i].fund="학기 우수 장학금"
      }
      if(new20[i].fund=="国家奖学金") {
        new20[i].fund="국가 장학금"
      }
    }
    switch(k) {
      case 1:
        this.setData({
          result20191:new20
        })
        break;
      case 2:
        this.setData({
          result20192:new20
        })      
        break;
      case 3:
        this.setData({
          result20201:new20
        })     
        break;
      case 4:
        this.setData({
          result20202:new20
        })      
        break;
    }
  },

  mySelect(e) {
    var name = e.currentTarget.dataset.name
    getApp().globalData.language = name
    this.setData({
        dropdown: name,
        select: false
    })

    if (name == "한국어") {
      var new20191=this.data.result20191
      var new20192=this.data.result20192
      var new20201=this.data.result20201
      var new20202=this.data.result20202

      this.switchkorea(new20191,1)
      this.switchkorea(new20192,2)
      this.switchkorea(new20201,3)
      this.switchkorea(new20202,4)
      this.setData({
        message_Scholarship: "장학",
        message_Scholarship1: "학기 우수 장학금",
        message_Scholarship2: "강좌 수석 장학금",
        message_Scholarship3: "국가 장학금",
        won:"원",
        message_noData: "장학 내역이 없습니다."
      })
    } else if (name == "中文") {
      var new20191=this.data.result20191
      var new20192=this.data.result20192
      var new20201=this.data.result20201
      var new20202=this.data.result20202
      this.switchchina(new20191,1)
      this.switchchina(new20192,2)
      this.switchchina(new20201,3)
      this.switchchina(new20202,4)

      this.setData({
        message_Scholarship: "奖学",
        message_Scholarship1: "学期优秀奖学金",
        message_Scholarship2: "讲座首席奖学金",
        message_Scholarship3: "国家奖学金",
        won:"won",
        message_noData: "奖学明细不存在。"
      })
    }
  }
})