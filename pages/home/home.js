// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToast(){
    wx.showToast({
      title: '你好啊',
      icon: 'loading',
      duration: 2000,
      mask: true,
      success: res=> {
        console.log('调用成功');
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      cancelText: '后退',
      success: res=> {
        console.log(res.confirm);
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: 'loading...',
    }),
    setTimeout(()=>{
      wx.hideLoading()
    },2000)
  },
  handleActionSheet(){
    wx.showActionSheet({
      itemList: ['好好','学习'],
      success: res=>{
        console.log(res.tapIndex);
      }
    })
  },
  onShareAppMessage(options){
    return {
      title: '你好啊',
      path: '/pages/home/home',
      imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595767115771&di=f7fe6cae2cf5f3b004611c8798124804&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D378254553%2C3884800361%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D2030'
    }
  },
})