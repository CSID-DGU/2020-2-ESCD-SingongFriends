
const app = getApp();
Page({
  data: {
  },
   request:function(url, data = {}, method = "GET") {
     console.log("d");
    return new Promise(function(resolve, reject) {
      wx.request({
        url: "http://staris.freehongs.net/web/andtest.do",
        data: data,
        method: method,
        header: {
          'Content-Type': 'application/json',
          'X-Litemall-Token': wx.getStorageSync('token')
        },
        success: function(res) {
  
          if (res.statusCode == 200) {
  
            if (res.data.errno == 501) {
              // 清除登录相关内容
              try {
              } catch (e) {
                // Do something when catch error
              }
              // 切换到登录页面
              wx.navigateTo({
                url: '/pages/page2/page2'
              });
            } else {
              resolve(res.data);
            }
          } else {
            reject(res.errMsg);
          }
  
        },
        fail: function(err) {
          reject(err)
        }
      })
    });
  }
  
})
