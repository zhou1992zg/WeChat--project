// pages/lanmu/index.js
  /**
   * 页面的初始数据
   */
Page({
  data: {
    mdata:{
      tiaowei:[
        { "name":"大王酱油","imgUrl":"../../images/dawang.png","univalence":"9.99","inventory":"15","buyNum":"0"},
        { "name": "莎麦鸡精", "imgUrl": "../../images/shamai.png", "univalence": "6.99", "inventory": "15", "buyNum": "0"},
        { "name": "稻花香大米", "imgUrl": "../../images/daohua.png", "univalence": "116.99", "inventory": "15", "buyNum": "0"},
        { "name": "四川花椒", "imgUrl": "../../images/huajiao.png", "univalence": "6.99", "inventory": "15", "buyNum": "0"},
        { "name": "味精", "imgUrl": "../../images/weijing.png", "univalence": "7.99", "inventory": "15", "buyNum": "0"},
        { "name": "醋", "imgUrl": "../../images/cu.png", "univalence": "3.99", "inventory": "15", "buyNum": "0"},
        { "name": "菜籽油", "imgUrl": "../../images/chaizi.png", "univalence": "57.99", "inventory": "15", "buyNum": "0"},
        { "name": "老干妈", "imgUrl": "../../images/laoganma.jpg", "univalence": "8.99", "inventory": "15", "buyNum": "0"},
        { "name": "盐", "imgUrl": "../../images/yan.png", "univalence": "1.99", "inventory": "15", "buyNum": "0"},
      ],
      lingshi: [
        { "name": "薯片", "imgUrl": "../../images/shupian.png", "univalence": "9.99", "inventory": "15", "buyNum": "0"},
        { "name": "脉动", "imgUrl": "../../images/maidong.png", "univalence": "3.99", "inventory": "15", "buyNum": "0"},
        { "name": "尖叫", "imgUrl": "../../images/jianjiao.png", "univalence": "3.99", "inventory": "15", "buyNum": "0"},
        { "name": "卫龙辣条", "imgUrl": "../../images/latiao.png", "univalence": "6.99", "inventory": "15", "buyNum": "0"},
        { "name": "康师傅方便面", "imgUrl": "../../images/fangbianmian.png", "univalence": "7.99", "inventory": "15", "buyNum": "0"},
        { "name": "火腿", "imgUrl": "../../images/huotui.png", "univalence": "3.99", "inventory": "15", "buyNum": "0"},
        { "name": "伊利牛奶", "imgUrl": "../../images/yiliniunai.png", "univalence": "57.99", "inventory": "15", "buyNum": "0"},
        { "name": "面包", "imgUrl": "../../images/mianbao.png", "univalence": "8.99", "inventory": "15", "buyNum": "0"},
        { "name": "牛肉干", "imgUrl": "../../images/niurougan.png", "univalence": "1.99", "inventory": "15", "buyNum": "0"}
      ],
      qingli: [
        { "name": "洗洁精", "imgUrl": "../../images/xijiejing.png", "univalence": "9.99", "inventory": "15", "buyNum": "0"},
        { "name": "洗衣液", "imgUrl": "../../images/xiyiye.png", "univalence": "19.99", "inventory": "15", "buyNum": "0"},
        { "name": "香皂", "imgUrl": "../../images/xiangzao.png", "univalence": "4.99", "inventory": "15", "buyNum": "0"}
      ],
      naifeng: [
        { "name": "奶粉", "imgUrl": "../../images/naifen.png", "univalence": "9.99", "inventory": "15", "buyNum": "0"}
      ],
      meizhuang: [
        { "name": "洗面奶", "imgUrl": "../../images/ximiannai.png", "univalence": "9.99", "inventory": "15", "buyNum": "0"},
        { "name": "面膜", "imgUrl": "../../images/mianmo.png", "univalence": "99.99", "inventory": "15", "buyNum": "0"}
      ],
      neiyi: [
        { "name": "男士船袜", "imgUrl": "../../images/nanshi.png", "univalence": "6.99", "inventory": "15", "buyNum": "0"},
        { "name": "女士船袜", "imgUrl": "../../images/nvshi.png", "univalence": "29.99", "inventory": "15", "buyNum": "0"}
      ],
      mingcha: [
        { "name": "竹叶青", "imgUrl": "../../images/zyqcha.png", "univalence": "106.99", "inventory": "15", "buyNum": "0"},
        { "name": "普洱茶", "imgUrl": "../../images/prcha.png", "univalence": "129.99", "inventory": "15", "buyNum": "0"}
      ],
      chufang: [
        { "name": "洗碗毛巾", "imgUrl": "../../images/xwmj.png", "univalence": "16.99", "inventory": "15", "buyNum": "0"},
        { "name": "牙签", "imgUrl": "../../images/yaqian.png", "univalence": "9.99", "inventory": "15", "buyNum": "0"},
        { "name": "平底锅", "imgUrl": "../../images/pdg.png", "univalence": "129.99", "inventory": "15", "buyNum": "0"}
      ],
      shuiguo: [
        { "name": "苹果", "imgUrl": "../../images/pingguo.png", "univalence": "16.99", "inventory": "15", "buyNum": "0"},
        { "name": "梨", "imgUrl": "../../images/li.png", "univalence": "9.99", "inventory": "15", "buyNum": "0"},
        { "name": "橘子", "imgUrl": "../../images/juzi.png", "univalence": "129.99", "inventory": "15", "buyNum": "0"},
        { "name": "鳄梨", "imgUrl": "../../images/eli.png", "univalence": "16.99", "inventory": "15", "buyNum": "0"},
        { "name": "葡萄", "imgUrl": "../../images/putao.png", "univalence": "9.99", "inventory": "15", "buyNum": "0"},
        { "name": "草莓", "imgUrl": "../../images/caomei.png", "univalence": "129.99", "inventory": "15", "buyNum": "0"},
        { "name": "杨桃", "imgUrl": "../../images/yangtao.png", "univalence": "129.99", "inventory": "15", "buyNum": "0"},
        { "name": "西瓜", "imgUrl": "../../images/xigua.png", "univalence": "129.99", "inventory": "15", "buyNum": "0"}
      ],
      shucai: [
        { "name": "芹菜", "imgUrl": "../../images/qincai.png", "univalence": "16.99", "inventory": "15", "buyNum": "0"},
        { "name": "土豆", "imgUrl": "../../images/tudou.png", "univalence": "9.99", "inventory": "15", "buyNum": "0"},
        { "name": "白菜", "imgUrl": "../../images/baicai.png", "univalence": "0.99", "inventory": "15", "buyNum": "0"},
        { "name": "胡萝卜", "imgUrl": "../../images/huluobo.png", "univalence": "16.99", "inventory": "15", "buyNum": "0"},
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
      totalPrice += newClassifyName.buyNum * newClassifyName.univalence;
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
