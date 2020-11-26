// pages/syntax/syntax.js

Page({

  /**
   * Page initial data
   */
  data: {
    code:"",
    studentId:1,
    openId:"",
    semester:[20192,20201,20202],
    forindex:[0,1,2],
    ar:['안','녕','하','세','요'],
    arr:['a','b','c'],
    object: {
      key1: '4,580,000 ',
      key2: '납부완료',
      key3: '2020 1학기 '
    }
    ,
    object3: {
      key1: '4,580,000 ',
      key2: '납부완료',
      key3: '2020 2학기 '
    },
    object2: {
      key1: '290,000 ',
      key2: '납부완료',
      key3: '2020 여름학기 '
    },
    object4: {
      key1: '4,580,000 ',
      key2: '납부완료',
      key3: '2020 겨울학기 '
    },
    a:3,
    b:2,
    arobj:[],
    result:[]
    
    
  },
  

  getOpenid:function(){
    var url="https://api.weixin.qq.com/sns/jscode2session";
    //url = url + "?appid=" + "wx5be09fc9ea2bb7af"+"&secret="+"73c38d218a25bd2399786e99dc55486a"+"&jscode=code"
    var that=this;
    console.log("오픈아이디내놔")
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
          openId:res.data.openid,
        })
   
       },
       fail: function(res){    console.log(res);  },
       complete: function(res){
        console.log(res);
       }
     });
  },
  pay:function(url){
   

  },
  ReqRes:function(url,i){
    var that=this
    wx.request({// 'http://staris.freehongs.net/web/androidtest.do'
     //
     url :url,
     method: 'GET',
      data:{},
      success: function (res) {
       // console.log(JSON.stringify(res.data))
      // that.setData({curlist:res.data.sendData})
        console.log(res.data);
        //console.log(res.data.sendData[0].tuition)
       // console.log(res.data[0].studentId);
       that.data.arobj.push(res.data)
       that.setData({
         result:that.data.arobj,
        //arobj:arobj
         // arobj:JSON.stringify(res.data)
        // arobj:res.data

      //   studentExpenseId: res.data.studentExpenseId,
      //  amountBeforeReduction: res.data.amountBeforeReduction,
      //  reductionAmount: res.data.reductionAmount,
      //  amountAfterReduction: res.data.amountAfterReduction,

        // obj:{key1:res.data.sendData[0].f,key2:res.data.sendData[0].l,key3:'?'},
           //arobj:[this.data.object,this.data.object2,this.data.object3,this.data.object4],
           //arobj:res.data.sendData
       })
       //console.log(that.data)
      },
      fail: function(res){

        },
      complete: function(){

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
       })
       // console.log(res)
 
      }
    
    })
    //052M8a000HQ6GK1Laf100aPXOU0M8a0D
    //0924da000XT6GK1l4l200kPNH044da0S
    var url="http://119.28.235.170/students/student/"+this.data.studentId+"/student-expenses/semester/"+this.data.semester
    for(var i=0;i<this.data.semester.length;i+=1){
      url="http://119.28.235.170/students/student/"+this.data.studentId+"/student-expenses/semester/"+this.data.semester[i]
      this.ReqRes(url,i)
      //console.log(i)
    }
   // console.log(this.data.arobj.toString())
//this.pay();



    this.setData({
      result:this.data.arobj
      // sesid:app.globalData.sesid
     })
     console.log(this.data.result)
   //  console.log("culistid : "+this.data.sesid);
   //http://119.28.235.170/students


  },
  go:function(){
console.log("늉");
  },
  //Date.now().toString()
  gopage2:function(){
    wx.navigateTo({
      url: '../page2/page2',
    })

  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    //this.getOpenid();
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

  }
})