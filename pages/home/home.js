// pages/home/home.js
const App = new getApp()
console.log(App.globalData.name);

Page({
  data: {
    name: '哈哈哈',
    age: 18,
    students: [
      {id: 1,name: '123',age: 18},
      {id: 2,name: '1234',age: 19},
      {id: 3,name: '12345',age: 20},
      {id: 4,name: '123456',age: 21}
    ],
    counter: 0,
    list: [],
  },
  onLoad(){
    wx.request({
      url: 'http://152.136.185.210:8000/api/n3/recommend',
      success: res=>{
        console.log(res);
        const data = res.data.data.list;
        this.setData({
          list: data
        })
        
      }
    })
  },
  handBtnClick1(){
    this.setData({      
      counter: this.data.counter + 1
    })
  },
  handBtnClick2(){
    console.log('点击-');
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleUserInfo(event){
    console.log(event);
  },
  // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj);
  },
  // 监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部');
  },
  onPullDownRefresh(){
    console.log('下拉加载更多');
    
  }

})