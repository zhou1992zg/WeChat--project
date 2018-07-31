// pages/lanmu/index.js
/**
 * 页面的初始数据
 */
Page({
  data: {
    mdata: {
      party:[
        { 'name': '火锅组合装(4-6人)', 'selling': '128.00', 'buyNum': '0', 'imgUrl': '../../images/party/01.png', 'advertising': '../../images/party/02.png' },
        { 'name': '烧烤组合装(5-8人)', 'selling': '148.00', 'buyNum': '0', 'imgUrl': '../../images/party/03.png', 'advertising': '../../images/party/04.png' }
      ],
      present:[
        { 'name': '旺旺大礼包', 'selling': '38.99', 'buyNum': '0', 'imgUrl': '../../images/party/05.png', 'advertising':'../../images/party/06.png'},
        { 'name': '牛奶盒装', 'selling': '58.99', 'buyNum': '0', 'imgUrl': '../../images/party/07.png', 'advertising': '../../images/party/08.png' }
      ]
    },
    totalPrice: 0,
    totalCount: 0,
  },
  onLoad: function (options) {
    this.setData({
      classifyName: options.classifyName
    })
  },
  /**
   * 计算商品总数
   */
  calculateTotal: function () {
    //商品的列表
    var classifyName = this.data.mdata[this.data.classifyName];
    //商品总数量
    var totalCount = 0;
    //商品总价
    var totalPrice = 0;
    //
    for (var i = 0; i < classifyName.length; i++) {
      //good对应书
      var newClassifyName = classifyName[i];
      //商品总数等于书总数之和
      totalCount += +newClassifyName.buyNum;
      //商品总价格等于书总数乘以单价
      totalPrice += newClassifyName.buyNum * newClassifyName.selling;
    }
    //保留两位小数
    totalPrice = totalPrice.toFixed(2);
    this.setData({
      'totalCount': totalCount,
      'totalPrice': totalPrice
    })
  },

  //商品+1方法
  addtap: function (e) {
    // e.target.dateset 来获取属性值
    var index = e.target.dataset.index;
    //购买数量自增
    +this.data.mdata[this.data.classifyName][index].buyNum++;
    this.setData({
      'mdata': this.data.mdata
    });
    this.calculateTotal();
  },

  //商品-1方法
  subtracttap: function (e) {
    // e.target.dateset 来获取属性值
    var index = e.target.dataset.index;
    //购买数量自减
    +this.data.mdata[this.data.classifyName][index].buyNum--;
    this.setData({
      'mdata': this.data.mdata
    });
    this.calculateTotal();
  }
})
