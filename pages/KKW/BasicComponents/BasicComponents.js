// pages/BasicComponents/BasicComponents.js
Page({

  data: {
    arr1: ['工学学士（密集计算机工程）', '工学学士', '工程硕士(计算机科学)', '工程硕士(信息保护)',
      '教育硕士（计算机教育）', '工程博士(信息保护)', '工程博士(计算机科学)'],
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
    
  },

  onLoad: function (options) {
    for (var i = 0; i < this.data.arr1.length; i++) {
      this.data.lengtharr.push(i)
    }
    this.setData({
      lengtharr: this.data.lengtharr
    })
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
})