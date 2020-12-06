// pages/BasicComponents/BasicComponents.js
Page({

  data: {
    arr1: ['공학사（컴퓨터공학 심화）', '공학사', '공학석사(컴퓨터공학)', '공학석사(정보보호)',
    '교육학석사（컴퓨터교육）', '공학박사(정보보호)', '공학박사(컴퓨터공학)'],
    arr2: [
      'Bachelor of Science in Computer Science and   Engineering',
      'Bachelor of Engineering',
      'Master of Science in Computer Science and Engineering',
      'Master of Science in lnformation Security',
      'Master of Computer Education',
      'Ph.D. in Computer Science and Engineering',
      'Ph.D. in lnformation Security'
    ],
    lengtharr: [],

    btnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    imgVisible: true,
    imgVisible2: true,
    imgVisible3: true,

    imageUrl_w: '/resource/image/1.jpg',
    imageUrl_h: '/resource/image/2.jpg',
    
    select: false,
    dropdown: "Language",

    message_btn1: "학위소개",
    message_btn2: "학과소개",
    message_btn3: "이수체계도",

    arr1_Chinese: ['工学学士（密集计算机工程）', '工学学士', '工程硕士(计算机科学)', '工程硕士(信息保护)',
    '教育硕士（计算机教育）', '工程博士(信息保护)', '工程博士(计算机科学)'],

    arr1_KOR: ['공학사（컴퓨터공학 심화）', '공학사', '공학석사(컴퓨터공학)', '공학석사(정보보호)',
    '교육학석사（컴퓨터교육）', '공학박사(정보보호)', '공학박사(컴퓨터공학)']
  },

  onLoad: function (options) {
    console.log("current language: " + getApp().globalData.language);
    var that=this
    that.setData({
      dropdown: getApp().globalData.language
    });

    if (that.data.dropdown == "中文") {
      this.setData({
        message_btn1: "学位介绍",
        message_btn2: "部门介绍",
        message_btn3: "完成系统"
      })
      for (var i = 0; i < this.data.arr1.length; i++) {
        this.data.lengtharr.push(i);
      }
      this.setData({
        lengtharr: this.data.lengtharr
      })
      /*
      for (var i = 0; i < this.data.arr1.length; i++) {
        this.data.lengtharr.push(i)
      }
      this.setData({
        lengtharr: this.data.lengtharr
      })
      */
    } else {
      this.setData({
        message_btn1: "학위소개",
        message_btn2: "학과소개",
        message_btn3: "이수체계도"
      })
      for (var i = 0; i < this.data.arr1.length; i++) {
        this.data.arr1[i] = this.data.arr1_KOR[i];
        this.data.lengtharr.push(i);
      }
      this.setData({
        lengtharr: this.data.lengtharr
      })  
    }
    console.log(this.data.lengtharr)
  },

  department_Info:function(e){
    this.setData({
      imgVisible3: this.data.imgVisible3 == 'true' ? 'false' : 'true',
    })
  },


  image1_show: function(e){
    this.setData({
      imgVisible: this.data.imgVisible == 'true' ? 'false':'true',
    })
  },

  image2_show: function (e) {
    this.setData({
      imgVisible2: this.data.imgVisible2 == 'true' ? 'false' : 'true',
    })
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
        message_btn1: "학위소개",
        message_btn2: "학과소개",
        message_btn3: "이수체계도"
      })
      for (var i = 0; i < this.data.arr1.length; i++) {
        this.data.arr1[i] = this.data.arr1_KOR[i];
        // this.data.lengtharr.push(i);
      }
    } else if (name == "中文") {
      this.setData({
        message_btn1: "学位介绍",
        message_btn2: "部门介绍",
        message_btn3: "完成系统"
      })
      for (var i = 0; i < this.data.arr1.length; i++) {
        this.data.arr1[i] = this.data.arr1_Chinese[i];
        // this.data.lengtharr.push(i);
      }
    }
  }
})