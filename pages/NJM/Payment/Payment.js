// pages/Payment/Payment.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    pay:"4,580,000",
    pay1:4580000,
    pay2:"",
    pay3:"",
  },

  /**
   * Lifecycle function--Called when page load
   */
  returnswitch:function(stramount){
    var newstr=""
    var len=stramount.length;

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
    return newstr;
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
        var money=res.data
        var sum=0
        for (var i=0;i<money.length;i++){
          sum+=money[i].money;
        }
        var len=sum.toString().length;
        var stramount=sum.toString();
        var newstr="";
        //console.log(goji);
       
        newstr=that.returnswitch(stramount);
        that.setData({
        
          pay2:newstr,
        //  pay3:goji
        })

        console.log("sum : "+sum);
       //that.data.arobj.push(JSON.stringify(res.data));
        var goji=that.data.pay1-sum;
         len=goji.toString().length;
         stramount=goji.toString();
         newstr=that.returnswitch(stramount);
        console.log("goji : "+goji);
       that.setData({
        
         pay3:newstr,
       //  pay3:goji
       })
       console.log(that.data.pay+that.data.pay2+that.data.pay3);
      },
      fail: function(res){

        },
      complete: function(){

      }
    });
    
  },
  onLoad: function (options) {

  },
  pay:function(openId){
    var url="http://119.28.235.170/payment";
    //url = url + "?appid=" + "wx5be09fc9ea2bb7af"+"&secret="+"73c38d218a25bd2399786e99dc55486a"+"&jscode=code"
    var that=this;
    wx.request({
      url:url,
       method: 'POST',
       data:{
         amount:0,
         openId:openId
       },
       success: function (res) {
        // console.log(res);
        console.log(res.data);
        // console.log(res.data.length);
        console.log(res.data.package);
        wx.showToast({
          title: "납부완료",
          duration: 2000
        })
       },
       fail: function(res){    console.log(res);  },
       complete: function(res){
        console.log(res);
       }
     });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    var url="http://119.28.235.170/student-scholars/"+app.globalData.studentID;
this.ReqRes(url);
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

  goToWechatPay: function () {
    var that=this;
    // wx.requestPayment({
    //   appId: 'wxd678efh567hg6787 ',
    //   timeStamp: '1490840662',
    //   nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    //   package: 'prepay_id=wx2017033010242291fcfe0db70013231072',
    //   signType: 'MD5',
    //   paySign: '9FBB950F61370E398B6E03843FC84E5D',
    //   success (res) { },
    //   fail (res) { }
    // })
    wx.showModal({
      title: "납부하시겠습니까?",
      cancelText: "취소",
      confirmText: "확인",
      success (res) {
        if (res.confirm) {
          that.pay();
          wx.navigateTo({
            url: '../../staris/page2/page2',
          })
        }
      }
    })
    /*
    this.pay();
    wx.navigateTo({
      url: '../../staris/page2/page2',
    })
    */
  }
})