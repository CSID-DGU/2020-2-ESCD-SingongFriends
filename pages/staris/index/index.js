
const app = getApp();
Page({
  data: {a:"cb",
  test:"",
  },
  onLoad: function () {
    console.log(this.data.a)
    this.setData({a:"bc"})
    console.log(this.data.a)
    var that=this
  },

   request:function(url, method = "GET") {
    var that=this
    wx.request({
      url: 'http://localhost:8052/web/androidtest.do',
      method: 'GET',
      data: {
        
      },
      header: {

      },
      success: function (res) {
    
        var categories = 'categories';
        //console.log(res);
        console.log('됬어?');
      
        console.log(res.data);
        console.log(res.data.sendData);
        console.log(res.data.sendData[1]["f"]);
        that.setData({a:res.data.sendData[1]["l"]});
        console.log(that.data.a);
      },
      fail: function(){
        var categories = 'categories';


      },
      complete: function(){
        that.setData({
          
        })
      }
    });
  
  }
  
})
