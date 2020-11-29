// pages/syntax/syntax.js

Page({

  /**
   * Page initial data
   */
  data: {
    code:"",
    lenresult:0,
    count:0,
    studentId:1,
    openId:"",
    semester:[20192,20201,20202],
    semester_view:["2019-2","2020-1","2020-2"],
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
        console.log(res.data);
        var stramount=res.data.amountBeforeReduction.toString();
        var len=stramount.length;
        var newstr="";
        console.log(stramount[1]);
        console.log(len);
        switch(len){
          case 4:
            for(var k=0;k<len+1;k++){
              if(k==1){
                newstr+=",";

              }
              newstr+=stramount[k];
            }
            break;
            case 5:
              for(var k=0;k<len;k++){
                if(k==2){
                  newstr+=",";
                }
                newstr+=stramount[k];
              }
              break;
              case 6:
                for(var k=0;k<len;k++){
                  if(k==3){
                    newstr+=",";

                  }
                  newstr+=stramount[k];
                }
                break;
                case 7:
                  for(var k=0;k<len;k++){
                    if(k==1||k==4){
                      newstr+=",";

                    }
                    newstr+=stramount[k];
                  }
                  break;
                  default:
                    break;

        }
        res.data.amountBeforeReduction=newstr;
        console.log(res.data.amountBeforeReduction+"g");
       that.data.arobj.push(res.data);
       //that.data.arobj.push(JSON.stringify(res.data));

       that.setData({
         result:that.data.arobj,
       })
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
      }
    })
    var url="";
    var len=this.data.semester.length;
     for(var i=0;i<len;i+=1){
      url="http://119.28.235.170/students/student/"+this.data.studentId+"/student-expenses/semester/"+this.data.semester[i]
      this.ReqRes(url,i)
    }
    this.setData({
      result:this.data.arobj,
      lenresult:this.data.count
     });

     var k=this.data.result;
    // var k=JSON.stringify(res.data)

     for(var i=0;i<len;i++){
       console.log(k[i]);
     }



   
  },
  go:function(){
console.log("늉");
  },
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