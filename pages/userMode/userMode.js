// pages/userMode/userMode.js
Page({
  data: {
    // 页面的初始数据
  },
  onLoad: function (options) {
    // 页面加载时执行的函数
  },
  selectCaregiver: function () {
    // 选择家属模式
    getApp().globalData.userMode = 'caregiver'
    wx.redirectTo({
      url: '/pages/caregiverMonitor/caregiverMonitor'
    })
  },
  selectElderly: function () {
    // 选择老年模式
    getApp().globalData.userMode = 'elderly'
    wx.redirectTo({
      url: '/pages/elderlyPanel/elderlyPanel'
    })
  }
})
