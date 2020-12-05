
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
    ],
    movable: false

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
  
    var that=this
    wx.request({
     url:'http://119.28.235.170/student-courses',
      method: 'GET',
      success: function (res) {
        // console.log(JSON.stringify(res))   
         console.log(res.data)

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

})