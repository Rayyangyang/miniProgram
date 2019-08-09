//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    list: [
      { id: 1, name: '正在热映', url: '/in_theaters' },
      { id: 2, name: '即将上映', url: '/new_movies' },
      { id: 3, name: 'TOP250', url: '/top250' }

    ]
  },

  onLoad: function () {

  },

})