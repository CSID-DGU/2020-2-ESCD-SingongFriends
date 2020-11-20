// pages/syntax/syntax.js

Page({

  /**
   * Page initial data
   */
  data: {
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
    
    
  },
  

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // var thi=this;
    // var ab=3;
    // var a=this.data.a;

    wx.login({
      success (res) {
        console.log(res.code)
      }
    })
    //052M8a000HQ6GK1Laf100aPXOU0M8a0D
    //0924da000XT6GK1l4l200kPNH044da0S
    this.setData({
      // sesid:app.globalData.sesid
     })
   //  console.log("culistid : "+this.data.sesid);
   //http://119.28.235.170/students
     var that=this
     wx.request({//    get
      //http://staris.freehongs.net/web/androidtest.do
      url :'http://119.28.235.170/expenses',
       method: 'GET',
       data:{
         // name: "pay",
         // studentCode: "20121313",
         // wechatToken: "helloworld"
       },
       success: function (res) {
         console.log(JSON.stringify(res.data))
       // that.setData({curlist:res.data.sendData})
         console.log(res.data[0].studentId);
         //console.log(res.data.sendData[0].tuition)
        // console.log(res.data[0].studentId);
        that.setData({
          // arobj:JSON.stringify(res.data)
          arobj:res.data
         // obj:{key1:res.data.sendData[0].f,key2:res.data.sendData[0].l,key3:'?'},
     
            //arobj:[this.data.object,this.data.object2,this.data.object3,this.data.object4],
            //arobj:res.data.sendData
           
        })
       // console.log(that.data)
       },
       fail: function(res){
        that.setData({
             arobj:res.data
         })
         },
       complete: function(){
         that.setData({ })
       }
     });
     

  },
  go:function(){
console.log("늉");
  },
  //Date.now().toString()
  gopage2:function(){
    wx.requestPayment({
      nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
      package: 'Prepay_id =Wx2017033010242291fcfe0db70013231072',
       timeStamp: '1490840662',
       signType:"MD5",
       paySign:"test",

      success(){},
      fail(){}
    })

//wx5be09fc9ea2bb7af

    wx.navigateTo({
      url: '../page2/page2',
    })

    // wx.login({
    //   timeout: 0,
    // })


    // var url="https://api.weixin.qq.com/sns/jscode2session";
    // url = url + "?appid=" + "wx5be09fc9ea2bb7af"+"&secret="+"1"+"&jscode=code"

    // wx.request({
    //   url:url,
    //    method: 'GET',
    //    data:{
    //      // name: "pay",
    //      // studentCode: "20121313",
    //      // wechatToken: "helloworld"
    //    },
    //    success: function (res) {
    //    //  console.log(JSON.stringify(res))
    //    // that.setData({curlist:res.data.sendData})
    //      console.log(res);
        
    //     // console.log(res.data[0].studentId);
   
    //    },
    //    fail: function(){  },
    //    complete: function(){
     
    //    }
    //  });



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

  }
})