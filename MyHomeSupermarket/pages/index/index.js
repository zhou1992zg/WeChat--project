
Page({
  data: {
    imgUrls: [
      '../../images/liangshi.png',
      '../../images/350-58.png',
      '../../images/happy.png'
    ],
    imgClassifyUrls:[
      '../../images/tiaowei.png',
      '../../images/lingshi.png',
      '../../images/qingli.png',
      '../../images/naifeng.png',
      '../../images/meizhuang.png',
      '../../images/neiyi.png',
      '../../images/mingcha.png',
      '../../images/chufang.png',
      '../../images/shuiguo.png',
      '../../images/shucai.png'
    ],
    classifyName:[
      'tiaowei',
      'lingshi',
      'qingli',
      'naifeng',
      'meizhuang',
      'neiyi',
      'mingcha',
      'chufang',
      'shuiguo',
      'shucai',
    ],
    circular: true,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../partyAndbaif/party?classifyName=party'
    })
  },
  bindView: function () {
    wx.navigateTo({
      url: '../partyAndbaif/party?classifyName=present'
    })
  }
})
