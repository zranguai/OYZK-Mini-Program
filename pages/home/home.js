// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '哈哈哈'
  },
  handleDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail?name=zs&age=18&height=1.88',
    })
  }
})