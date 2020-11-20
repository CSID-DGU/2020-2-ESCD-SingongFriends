// pages/test.js

Page({
  data: {
    arr1: ['공학사(컴퓨터공학 심화)', '공학사', '공학석사(컴퓨터공학)', '공학석사(정보보호)',
      '교육학석사(컴퓨터교육)', '공학박사(정보보호)', '공학박사(컴퓨터공학)'],
    arr2: [
      'Bachelor of Science in Computer Science and   Engineering',
      'Bachelor of Engineering',
      'Master of Science in Computer Science and Engineering',
      'Master of Science in lnformation Security',
      'Master of Computer Education',
      'Ph.D. in Computer Science and Engineering',
      'Ph.D. in lnformation Security'
    ], 
    lengtharr:[],
  },
  onLoad: function (options) {
    for (var i = 0; i < this.data.arr1.length; i++) {
      this.data.lengtharr.push(i)
    }
    this.setData({
      lengtharr:this.data.lengtharr
    })

  }
})