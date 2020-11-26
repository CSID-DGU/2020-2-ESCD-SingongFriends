Page({
  data: {
    btnSize: 1,
    disabled: false,
    plain: true,
    loading: false,

    subjects:[
      { name: '과목1', recommended: true},
      { name: '과목2', recommended: false},
      { name: '과목3', recommended: true},
      { name: '과목4', recommended: true },
      { name: '과목5', recommended: false},
      { name: '과목6', recommended: false},
      { name: '과목7', recommended: true },
      { name: '과목8', recommended: true },
      { name: '과목9', recommended: true },
    ],

    takenSubjects:[
      '과목10','과목11','과목12','과목13'
    ], 
    
    undoneCourses:[],
    doneCourses:[]
   
  },
  onLoad: function (options) {
    var that=this
    wx.request({
     url:'http://119.28.235.170/student-courses',
      method: 'GET',
      success: function (res) {
        console.log(JSON.stringify(res))   
        console.log(res.data.done.length)
       that.setData({ 
        // students: res.data,
        doneCourses: that.doneCourses=res.data.done,
        undoneCourses: that.undoneCourses=res.data.undone,
      })
        for(var i in that.undoneCourses){
          var p=Math.floor(Math.random()*5);
          if(p%2==0){
            that.undoneCourses[i].recommended= true;
          }
          else{
            that.undoneCourses[i].recommended= false;
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