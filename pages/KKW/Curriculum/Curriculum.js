const app=getApp()
Page({
  data: {
    btnSize: 2,
    disabled: false,
    plain: true,
    loading: false,
  
    undoneCourses:[],
    doneCourses:[],
    
    recommend:["System Software",
     "Basic Programming",
     "Computer Networking",
     
    ],
    movable: false,

    select: false,
    dropdown: "Language",

    message_1: "미이수 과목",
    message_2: "추천 과목은 빨간색",
    message_3: "이수 과목"

  },

  touched:function(){
    this.setData({
      movable: this.data.movable = true
    })
  },

  touchedend:function(){
    this.setData({
      movable: this.data.movable = false 
    })
  },

  onLoad: function (options) {
    console.log("current language: " + getApp().globalData.language);
    var that=this
    that.setData({
      dropdown: getApp().globalData.language
    });

    if (that.data.dropdown == "한국어") {
      this.setData({
        message_1: "미이수 과목",
        message_2: "빨간색은 추천 과목입니다",
        message_3: "이수 과목"
      })
    } else if (that.data.dropdown == "中文") {
      this.setData({
        message_1: "课程未选",
        message_2: "红色是推荐路线",
        message_3: "已采取学科"
      })
    }
  
    var that=this
    wx.request({
     url:'http://119.28.235.170/student-courses/'+app.globalData.studentID,
      method: 'GET',
      // data:{
      //   studentId:app.globalData.studentID
      // },
      success: function (res) {
        // console.log(JSON.stringify(res))   
        // console.log(res.data.done.length)
       that.setData({ 
        // students: res.data,
        doneCourses: that.doneCourses=res.data.done,
        undoneCourses: that.undoneCourses=res.data.undone,
      })
      console.log(that.undoneCourses)
        // for(var i in that.undoneCourses){
        //   var p=Math.floor(Math.random()*5);
        //   if(p%2==0){
        //     that.undoneCourses[i].recommended= true;
        //   }
        //   else{
        //     that.undoneCourses[i].recommended= false;
        //   }
        // }
     console.log(that.data.recommend)
        for (var i in that.data.recommend){
          for (var j in that.data.undoneCourses){
            console.log(that.data.recommend[i]+that.data.undoneCourses[j].courseTitle)
            if(that.data.recommend[i]==that.data.undoneCourses[j].courseTitle){
              that.undoneCourses[j].recommended= true;
            }
          }
        }
        for (var j in that.data.undoneCourses){
          
          console.log(that.undoneCourses[j].courseTitle+that.undoneCourses[j].recommended)
          if(!that.undoneCourses[j].recommended){
            that.undoneCourses[j].recommended=false;
          }
          
        }



        console.log(that.undoneCourses)
        that.setData({ 
          undoneCourses: that.undoneCourses=res.data.undone,
        })
      },
      fail: function(){  },
      complete: function(){
        that.setData({ 
        })
      }
    });
    
 },
  setSize: function (e) {
    this.setData({
      btnSize: this.data.btnSize == 'default' ? 'mini' : 'default',
    })
  },
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },

  bindShowMsg() {
    this.setData({
        select:!this.data.select
    })
  },

  mySelect(e) {
    var name = e.currentTarget.dataset.name
    getApp().globalData.language = name
    this.setData({
        dropdown: name,
        select: false
    })

    if (name == "한국어") {
      this.setData({
        message_1: "미이수 과목",
        message_2: "추천 과목은 빨간색",
        message_3: "이수 과목"
      })
    } else if (name == "中文") {
      this.setData({
        message_1: "课程未选",
        message_2: "红色是推荐路线",
        message_3: "已采取学科"
      })
    }
  }
})