// pages/seachbar/seachbar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  data: {
    inputShowed: false,
    inputVal: ""
},
showInput: function () {
    this.setData({
        inputShowed: true
    });
},
hideInput: function () {
    this.setData({
        inputVal: "",
        inputShowed: false
    });
},
clearInput: function () {
    this.setData({
        inputVal: ""
    });
},
inputTyping: function (e) {
    this.setData({
        inputVal: e.detail.value
    });
}
 
})