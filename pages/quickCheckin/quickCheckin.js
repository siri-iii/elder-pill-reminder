// pages/quickCheckin/quickCheckin.js
Page({
  data: {
    // 页面的初始数据
  },
  onLoad: function (options) {
    // 页面加载时执行的函数
  },
  confirmCheckin: function () {
    // 确认打卡
    wx.showToast({
      title: '已服用',
      icon: 'success',
      duration: 2000
    })
    // 模拟语音提示
    wx.showModal({
      title: '语音提示',
      content: '已服用药品，请勿忘记',
      showCancel: false,
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          // 返回主页
          wx.navigateBack()
        }
      }
    })
  }
})
