//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
        'name': '超市卖场',
        src: '/assets/icon/suger.png'
      },
      {
        'name': '便利店',
        src: '/assets/icon/suger.png'
      },
      {
        'name': '生鲜/菜市场',
        src: '/assets/icon/suger.png'
      },
      {
        'name': '水果/果切',
        src: '/assets/icon/suger.png'
      },
      {
        'name': '鲜花绿植',
        src: '/assets/icon/suger.png'
      },
      {
        'name': '超市卖场',
        src: '/assets/icon/juice.png'
      },
      {
        'name': '便利店',
        src: '/assets/icon/juice.png'
      },
      {
        'name': '生鲜/菜市场',
        src: '/assets/icon/juice.png'
      },
      {
        'name': '水果/果切',
        src: '/assets/icon/juice.png'
      },
      {
        'name': '鲜花绿植',
        src: '/assets/icon/juice.png'
      }
    ],
    goodsList: [],
    supGoods: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    let http = 'http://192.168.43.24:3333/api/goods';
    let list = []
    wx.request({
      url: http,
      success: (res) => {
        var foods = res.data.data;
        for (let food of foods) {
          for (let item of food.foods) {
            list.push(item)
          }
        }
        this.setData({
          goodsList: list
        })
        // 生成一个随机数组
        let arr = [];
        for (let i = 0; i < 200; i++) {
          let num = Math.floor(Math.random() * this.data.goodsList.length)
          if (arr.length > 9) {
            break;
          } else {
            if (arr.indexOf(num) == -1) {
              console.log(num)
              arr.push(this.data.goodsList[num])
            }
          }
        }
        this.setData({
          supGoods : arr
        })
      }
    })
  }
})