// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjects: '',
    title: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '努力加载中...',
    })
    console.log(options)
    let http = 'http://192.168.43.24:5555/v2/movie' + options.url;
    wx.request({
      url: http,
      success: (res) => {
        console.log(res)
        this.setData({
          title: res.data.title,
          subjects: res.data.subjects

        })
        wx.hideLoading()
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})