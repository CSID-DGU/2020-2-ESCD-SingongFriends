// pages/BasicComponents/BasicComponents.js
Page({
  data: {
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

    message_th1_1: "공학사(컴퓨터공학 심화)",
    message_th2_1: "Bachelor of Science in Computer Science and   Engineering",
    message_th1_2: "공학사",
    message_th2_2: "Bachelor of Engineering",
    message_th1_3: "공학석사(컴퓨터공학)",
    message_th2_3: "Master of Science in Computer Science and Engineering",
    message_th1_4: "공학석사(정보보호)",
    message_th2_4: "Master of Science in lnformation Security",
    message_th1_5: "교육학석사(컴퓨터교육)",
    message_th2_5: "Master of Computer Education",
    message_th1_6: "공학박사(정보보호)",
    message_th2_6: "Ph.D. in Computer Science and Engineering",
    message_th1_7: "공학박사(컴퓨터공학)",
    message_th2_7: "Ph.D. in lnformation Security",

    message_inform1: "36년 전통의 컴퓨터 배움터!",
    message_inform2: "동국대학교 컴퓨터공학전공",
    message_inform3: "역사적인 배움터",
    message_inform4: "1971년 국내 두 번째로 컴퓨터학과를 설치.",
    message_inform5: "4000여명의 동문이 IT 기업, 금융업계, 연구소, 국가기관 및 학계에 배출",
    message_inform6: "실력있는 멘토가 있는 배움터",
    message_inform7: "오랜교육 경험을 통한 학생 진로지도",
    message_inform8: "실무 위주의 설계 교육으로 잘 가르치는 따뜻한 멘토가 있는 배움터",
    message_inform9: "취업이 잘되는 배움터",
    message_inform10: "현장에서 필요한 첨단 소프트웨어핵심 기술을 국가지원 NEXT사업의 지원으로 교육",
    message_inform11: "공학교육 혁신을 인정받는 컴퓨터공학 심화 프로그램을 설치",
    message_inform12: "당신을 위한 배움터",
    message_inform13: "동국대학교 IT학부 컴퓨터공학 전공은 여러분의 커리어를 높일 밝은 길입니다."
  },

  onLoad: function (options) {
    console.log("current language: " + getApp().globalData.language);
    var that=this
    that.setData({
      dropdown: getApp().globalData.language
    });

    if (that.data.dropdown == "한국어") {
      this.setData({
        message_btn1: "학위소개",
        message_btn2: "학과소개",
        message_btn3: "이수체계도",

        message_th1_1: "공학사(컴퓨터공학 심화)",
        message_th1_2: "공학사",
        message_th1_3: "공학석사(컴퓨터공학)",
        message_th1_4: "공학석사(정보보호)",
        message_th1_5: "교육학석사(컴퓨터교육)",
        message_th1_6: "공학박사(정보보호)",
        message_th1_7: "공학박사(컴퓨터공학)",

        message_inform1: "36년 전통의 컴퓨터 배움터!",
        message_inform2: "동국대학교 컴퓨터공학전공",
        message_inform3: "역사적인 배움터",
        message_inform4: "1971년 국내 두 번째로 컴퓨터학과를 설치.",
        message_inform5: "4000여명의 동문이 IT 기업, 금융업계, 연구소, 국가기관 및 학계에 배출",
        message_inform6: "실력있는 멘토가 있는 배움터",
        message_inform7: "오랜교육 경험을 통한 학생 진로지도",
        message_inform8: "실무 위주의 설계 교육으로 잘 가르치는 따뜻한 멘토가 있는 배움터",
        message_inform9: "취업이 잘되는 배움터",
        message_inform10: "현장에서 필요한 첨단 소프트웨어핵심 기술을 국가지원 NEXT사업의 지원으로 교육",
        message_inform11: "공학교육 혁신을 인정받는 컴퓨터공학 심화 프로그램을 설치",
        message_inform12: "당신을 위한 배움터",
        message_inform13: "동국대학교 IT학부 컴퓨터공학 전공은 여러분의 커리어를 높일 밝은 길입니다."
      })
    } else if (that.data.dropdown == "中文") {
      this.setData({
        message_btn1: "学位介绍",
        message_btn2: "部门介绍",
        message_btn3: "完成系统",

        message_th1_1: "工学学士(密集计算机工程）",
        message_th1_2: "工学学士",
        message_th1_3: "工程硕士(计算机科学)",
        message_th1_4: "工程硕士(信息保护)",
        message_th1_5: "教育硕士(计算机教育）",
        message_th1_6: "工程博士(信息保护)",
        message_th1_7: "工程博士(计算机科学)",        

        message_inform1: "具有36年传统的计算机课程！",
        message_inform2: "东国大学计算机工程专业",
        message_inform3: "历史路线",
        message_inform4: "1971年，第二个计算机部门在韩国成立。",
        message_inform5: "向IT公司，金融行业，研究机构，国家机构和学术界分发了4000多名校友",
        message_inform6: "有才华的导师课程",
        message_inform7: "通过长期的教育经验来指导学生的职业生涯–通过",
        message_inform8: "热心的导师指导的学习中心，他们通过实用的设计教育进行良好的教学",
        message_inform9: "一门可以很好地找到工作的课程",
        message_inform10: "在NEXT项目的支持下，在国家支持下教育该领域所需的最新软件核心技术",
        message_inform11: "安装被认可为工程教育创新的高级计算机工程程序",
        message_inform12: "适合您的课程",
        message_inform13: "东国大学IT系计算机工程专业是提高您的职业生涯的一条明亮之路"
      })
    }
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
        message_btn3: "이수체계도",

        message_th1_1: "공학사(컴퓨터공학 심화)",
        message_th1_2: "공학사",
        message_th1_3: "공학석사(컴퓨터공학)",
        message_th1_4: "공학석사(정보보호)",
        message_th1_5: "교육학석사(컴퓨터교육)",
        message_th1_6: "공학박사(정보보호)",
        message_th1_7: "공학박사(컴퓨터공학)",

        message_inform1: "36년 전통의 컴퓨터 배움터!",
        message_inform2: "동국대학교 컴퓨터공학전공",
        message_inform3: "역사적인 배움터",
        message_inform4: "1971년 국내 두 번째로 컴퓨터학과를 설치.",
        message_inform5: "4000여명의 동문이 IT 기업, 금융업계, 연구소, 국가기관 및 학계에 배출",
        message_inform6: "실력있는 멘토가 있는 배움터",
        message_inform7: "오랜교육 경험을 통한 학생 진로지도",
        message_inform8: "실무 위주의 설계 교육으로 잘 가르치는 따뜻한 멘토가 있는 배움터",
        message_inform9: "취업이 잘되는 배움터",
        message_inform10: "현장에서 필요한 첨단 소프트웨어핵심 기술을 국가지원 NEXT사업의 지원으로 교육",
        message_inform11: "공학교육 혁신을 인정받는 컴퓨터공학 심화 프로그램을 설치",
        message_inform12: "당신을 위한 배움터",
        message_inform13: "동국대학교 IT학부 컴퓨터공학 전공은 여러분의 커리어를 높일 밝은 길입니다."
      })
    } else if (name == "中文") {
      this.setData({
        message_btn1: "学位介绍",
        message_btn2: "部门介绍",
        message_btn3: "完成系统",

        message_th1_1: "工学学士(密集计算机工程）",
        message_th1_2: "工学学士",
        message_th1_3: "工程硕士(计算机科学)",
        message_th1_4: "工程硕士(信息保护)",
        message_th1_5: "教育硕士(计算机教育）",
        message_th1_6: "工程博士(信息保护)",
        message_th1_7: "工程博士(计算机科学)",

        message_inform1: "具有36年传统的计算机课程！",
        message_inform2: "东国大学计算机工程专业",
        message_inform3: "历史路线",
        message_inform4: "1971年，第二个计算机部门在韩国成立。",
        message_inform5: "向IT公司，金融行业，研究机构，国家机构和学术界分发了4000多名校友",
        message_inform6: "有才华的导师课程",
        message_inform7: "通过长期的教育经验来指导学生的职业生涯–通过",
        message_inform8: "热心的导师指导的学习中心，他们通过实用的设计教育进行良好的教学",
        message_inform9: "一门可以很好地找到工作的课程",
        message_inform10: "在NEXT项目的支持下，在国家支持下教育该领域所需的最新软件核心技术",
        message_inform11: "安装被认可为工程教育创新的高级计算机工程程序",
        message_inform12: "适合您的课程",
        message_inform13: "东国大学IT系计算机工程专业是提高您的职业生涯的一条明亮之路"
      })
    }
  }
})