// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bininp(event){
    console.log('键盘输入',event);
    
  },
  binfoc(event){
    console.log('内容为：',event);
  },
  binblu(event){
    console.log('失去焦点',event);
    
  }
})