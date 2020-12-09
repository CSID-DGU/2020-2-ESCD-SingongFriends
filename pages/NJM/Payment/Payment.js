// pages/Payment/Payment.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    pay:"4,580,000",
    pay1:4580000,
    pay2:"0",
    pay3:"",
    payment:0,

    select: false,
    dropdown: "Language",

    message_Payment: "고지서",

    message_inform1: "등록금 납부기간 : 2020-12-01 ~ 2020-12-31",
    message_inform2: "납부시간 : 09:00 ~ 21:00(단, 마감일은 17:00 종료)",
    message_inform3: "유의사항",
    message_inform4: "선택납부경비 납부방법",
    message_inform5: "납부 희망시 등록금에 합산하여 입금",
    message_inform6: "등록금 입금 후 추가 입금 가능(등록금 입금 당일만)",
    message_inform7: "일부 항목만 선택적으로 입금 가능(금액 자동 인식)",
    message_inform8: "납부예시)",
    message_inform9: "등록금",
    message_inform10: "등록금 + 학생회비",
    message_inform11: "등록금 + 동창회비",
    message_inform12: "등록금 + 학생회비 + 동창회비",
    message_inform13: "단, 신용카드는 일부 항목만 선택적 납부 불가",
    message_inform14: "납부예시) 등록금 or 등록금 + 선택납부경비 전체",
    message_inform15: "보내는 사람(송금인) 명의는 학생본인이 아니어도 됨",
    message_inform16: "등록금 전액면제 장학생 등록방법",
    message_inform17: "가상계좌로 선택납부경비 입금",
    message_inform18: "유드림스 전액장학생 등록신청",

    message_table_header1: "구분",
    message_table_header2: "책정금액",
    message_table_header3: "감면금액",
    message_table_header4: "고지금액",

    message_table_cell1: "입학금",
    message_table_cell2: "수업료",
    message_table_cell3: "등록금계",

    message_Pay: "납부하기"
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
          if (money[i].semester==20202){
          sum+=money[i].money;}
        }
        var len=sum.toString().length;
        var stramount=sum.toString();
        var newstr="";
        //console.log(goji);
       
        newstr=that.returnswitch(stramount);
        if (newstr.length!=0){
          that.setData({
            pay2:newstr,
          //  pay3:goji
          })
  }
        console.log("sum : "+sum);
       //that.data.arobj.push(JSON.stringify(res.data));
        var goji=that.data.pay1-sum;
         len=goji.toString().length;
         stramount=goji.toString();
         newstr=that.returnswitch(stramount);
        console.log("goji : "+goji);
       that.setData({
        payment:goji,
         pay3:newstr,
       //  pay3:goji
       })
       console.log(that.data.payment)
       console.log(that.data.pay+that.data.pay2+that.data.pay3);
      },
      fail: function(res){

        },
      complete: function(){

      }
    });
    
  },
  onLoad: function (options) {
    console.log("current language: " + getApp().globalData.language);
    var that=this
    that.setData({
      dropdown: getApp().globalData.language
    });

    if (that.data.dropdown == "한국어") {
      this.setData({
        message_Payment: "고지서",

        message_inform1: "등록금 납부기간 : 2020-12-01 ~ 2020-12-31",
        message_inform2: "납부시간 : 09:00 ~ 21:00(단, 마감일은 17:00 종료)",
        message_inform3: "유의사항",
        message_inform4: "선택납부경비 납부방법",
        message_inform5: "납부 희망시 등록금에 합산하여 입금",
        message_inform6: "등록금 입금 후 추가 입금 가능(등록금 입금 당일만)",
        message_inform7: "일부 항목만 선택적으로 입금 가능(금액 자동 인식)",
        message_inform8: "납부예시)",
        message_inform9: "등록금",
        message_inform10: "등록금 + 학생회비",
        message_inform11: "등록금 + 동창회비",
        message_inform12: "등록금 + 학생회비 + 동창회비",
        message_inform13: "단, 신용카드는 일부 항목만 선택적 납부 불가",
        message_inform14: "납부예시) 등록금 or 등록금 + 선택납부경비 전체",
        message_inform15: "보내는 사람(송금인) 명의는 학생본인이 아니어도 됨",
        message_inform16: "등록금 전액면제 장학생 등록방법",
        message_inform17: "가상계좌로 선택납부경비 입금",
        message_inform18: "유드림스 전액장학생 등록신청",

        message_table_header1: "구분",
        message_table_header2: "책정금액",
        message_table_header3: "감면금액",
        message_table_header4: "고지금액",

        message_table_cell1: "입학금",
        message_table_cell2: "수업료",
        message_table_cell3: "등록금계",

        message_Pay: "납부하기"
      })
    } else if (that.data.dropdown == "中文") {
      this.setData({
        message_Payment: "告知书",

        message_inform1: "学费缴纳时间 : 2020-12-01 ~ 2020-12-31",
        message_inform2: "缴纳时间 : 09:00 ~ 21:00（但截止日期为17:00 结束）",
        message_inform3: "注意事项",
        message_inform4: "选择缴纳经费缴纳方法",
        message_inform5: "希望缴纳时，汇入注册费",
        message_inform6: "注册费汇款后可追加汇款（仅限注册费汇款当日）",
        message_inform7: "仅可选择性地汇款部分项目（金额自动识别）",
        message_inform8: "预告缴费)",
        message_inform9: "注册费",
        message_inform10: "注册费 + 学生会费",
        message_inform11: "注册费 + 同学会费",
        message_inform12: "学费 + 学生会费 + 同学会费",
        message_inform13: "但信用卡不能选择性地只缴纳部分项目",
        message_inform14: "缴纳预告) 学费 or 学费 + 选择缴纳经费 全体",
        message_inform15: "寄件人(寄件人)名义非学生本人也可以",
        message_inform16: "全额免除学杂费奖学金学生注册方法",
        message_inform17: "选择支付经费汇入虚拟账户",
        message_inform18: "U DREAMS 全额奖学金申请",

        message_table_header1: "区分",
        message_table_header2: "核定金额",
        message_table_header3: "减免金额",
        message_table_header4: "高知金额",

        message_table_cell1: "入学费",
        message_table_cell2: "学费",
        message_table_cell3: "注册费合计",

        message_Pay: "缴纳"
      })
    }
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
        wx.navigateTo({
          url: '../../staris/page2/page2?v='+that.data.pay3,
        })
        if (that.data.dropdown == "中文") {
          wx.showToast({
            title: "缴讫",
            duration: 2000
          })
        } else {
          wx.showToast({
            title: "납부 완료",
            duration: 2000
          })
        }
       },
       fail: function(res){
        if (that.data.dropdown == "中文") {
          wx.showToast({
            title: "缴付失败",
            duration: 2000
          })
        } else {
          wx.showToast({
            title: "납부 실패",
            duration: 2000
          })
        }
       },
       complete: function(res){

console.log(that.data.payment)
var PAYMENT=that.data.payment;
console.log(PAYMENT)
var expenseId=0
wx.request({
      url:"http://119.28.235.170/expenses",
       method:'POST',
       data:JSON.stringify([{"amountMoney":PAYMENT}])
       ,
       success: function (res) {      console.log(res)     },
       fail: function(res){   
         console.log(res)
           },
       complete: function(res){   
         console.log(that.data.payment)
        wx.request({
          url:"http://119.28.235.170/expenses",
           method: 'GET',
           data:{

           },
           success: function (res) {    
              
             //console.log(res.data[res.data.length-1])
             expenseId=res.data[res.data.length-1].expenseId

             console.log("eid: "+expenseId)

             },
           fail: function(res){       },
           complete: function(res){  
            wx.request({
              url:"http://119.28.235.170/student-expenses",
               method: 'POST',
               data:JSON.stringify([{
                 "expenseId": expenseId,
               "semester": 20202,
               "studentId": app.globalData.studentID}]),

               success: function (res) {    
                  
                 console.log(res)
    
    
                 
                 },
               fail: function(res){       },
               complete: function(res){       }
             });


                }
         });


           }
     });
       
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
    if (that.data.dropdown == "中文") {
      wx.showModal({
        title: "确定要缴纳吗？",
        success (res) {
          if (res.confirm) {
            wx.request({
              url:"http://119.28.235.170/students/student/"+app.globalData.studentID+"/student-expenses/semester/20202",
               method: 'GET',
               data:{},
               success: function (res) {    
                console.log(res.data.length)
                  if(res.data.length!=0) {
                    console.log("이미 납부했어")
                    wx.showModal({
                      title: "已付清。",
                      showCancel: false
                    })
                  } else {
                    that.pay();
                  }
                },
                fail: function(res) {
                },
                complete: function(res) {
                }
             });      
          }
        }
      })
    } else {
      wx.showModal({
        title: "납부하시겠습니까?",
        cancelText: "취소",
        confirmText: "확인",
        success (res) {
          if (res.confirm) {
            wx.request({
              url:"http://119.28.235.170/students/student/"+app.globalData.studentID+"/student-expenses/semester/20202",
              method: 'GET',
              data:{},
              success: function (res) {    
                console.log(res.data.length)
                  if(res.data.length!=0){
                    console.log("이미 납부했어")
                    wx.showModal({
                      title: "이미 납부하셨습니다.",
                      showCancel: false,
                      confirmText: "확인"
                    })
                  } else {
                    that.pay();
                  }
                },
                fail: function(res){                  
                },
                complete: function(res){
                }
             });
          }
        }
      })
    }
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
        message_Payment: "고지서",

        message_inform1: "등록금 납부기간 : 2020-12-01 ~ 2020-12-31",
        message_inform2: "납부시간 : 09:00 ~ 21:00(단, 마감일은 17:00 종료)",
        message_inform3: "유의사항",
        message_inform4: "선택납부경비 납부방법",
        message_inform5: "납부 희망시 등록금에 합산하여 입금",
        message_inform6: "등록금 입금 후 추가 입금 가능(등록금 입금 당일만)",
        message_inform7: "일부 항목만 선택적으로 입금 가능(금액 자동 인식)",
        message_inform8: "납부예시)",
        message_inform9: "등록금",
        message_inform10: "등록금 + 학생회비",
        message_inform11: "등록금 + 동창회비",
        message_inform12: "등록금 + 학생회비 + 동창회비",
        message_inform13: "단, 신용카드는 일부 항목만 선택적 납부 불가",
        message_inform14: "납부예시) 등록금 or 등록금 + 선택납부경비 전체",
        message_inform15: "보내는 사람(송금인) 명의는 학생본인이 아니어도 됨",
        message_inform16: "등록금 전액면제 장학생 등록방법",
        message_inform17: "가상계좌로 선택납부경비 입금",
        message_inform18: "유드림스 전액장학생 등록신청",

        message_table_header1: "구분",
        message_table_header2: "책정금액",
        message_table_header3: "감면금액",
        message_table_header4: "고지금액",

        message_table_cell1: "입학금",
        message_table_cell2: "수업료",
        message_table_cell3: "등록금계",

        message_Pay: "납부하기"
      })
    } else if (name == "中文") {
      this.setData({
        message_Payment: "告知书",

        message_inform1: "学费缴纳时间 : 2020-12-01 ~ 2020-12-31",
        message_inform2: "缴纳时间 : 09:00 ~ 21:00（但截止日期为17:00 结束）",
        message_inform3: "注意事项",
        message_inform4: "选择缴纳经费缴纳方法",
        message_inform5: "希望缴纳时，汇入注册费",
        message_inform6: "注册费汇款后可追加汇款（仅限注册费汇款当日）",
        message_inform7: "仅可选择性地汇款部分项目（金额自动识别）",
        message_inform8: "预告缴费)",
        message_inform9: "注册费",
        message_inform10: "注册费 + 学生会费",
        message_inform11: "注册费 + 同学会费",
        message_inform12: "学费 + 学生会费 + 同学会费",
        message_inform13: "但信用卡不能选择性地只缴纳部分项目",
        message_inform14: "缴纳预告) 学费 or 学费 + 选择缴纳经费 全体",
        message_inform15: "寄件人(寄件人)名义非学生本人也可以",
        message_inform16: "全额免除学杂费奖学金学生注册方法",
        message_inform17: "选择支付经费汇入虚拟账户",
        message_inform18: "U DREAMS 全额奖学金申请",

        message_table_header1: "区分",
        message_table_header2: "核定金额",
        message_table_header3: "减免金额",
        message_table_header4: "高知金额",

        message_table_cell1: "入学费",
        message_table_cell2: "学费",
        message_table_cell3: "注册费合计",

        message_Pay: "缴纳"
      })
    }
  }
})