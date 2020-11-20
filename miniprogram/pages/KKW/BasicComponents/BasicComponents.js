// pages/BasicComponents/BasicComponents.js
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
    imageArray: [{
      mode: 'scaleToFill',
      text: '너비와 높이가 채우도록 늘어납니다'
    }, {
      mode: 'aspectFit',
      text: '긴면을 완전히 표시.'
    }, {
      mode: 'aspectFill',
      text: '짧은면을 완전히 표시.'
    }, {
      mode: 'widthFix',
      text: '너비에 맞추며 높이는 자동 변경.'
    }, {
      mode: 'top',
      text: '확대하지 말고 상단 표시'
    }, {
      mode: 'bottom',
      text: '확대하지 말고 아래쪽 표시'
    }, {
      mode: 'center',
      text: '확대하지 말고 중간 표시'
    }, {
      mode: 'left',
      text: '확대하지 말고 왼쪽 표시'
    }, {
      mode: 'right',
      text: '확대하지 말고 오른쪽 표시'
    }, {
      mode: 'top left',
      text: '확대하지 말고 왼쪽 상단 표시'
    }, {
      mode: 'top right',
      text: '확대하지 말고 오른쪽 상단 표시'
    }, {
      mode: 'bottom left',
      text: '확대하지 말고 왼쪽 하단 표시'
    }, {
      mode: 'bottom right',
      text: '확대하지 말고 오른쪽 하단 표시'
    }],
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