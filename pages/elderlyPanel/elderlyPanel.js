// pages/elderlyPanel/elderlyPanel.js
Page({
  data: {
    // 页面的初始数据
  },
  onLoad: function (options) {
    // 页面加载时执行的函数
  },
  goToChat: function () {
    // 跳转到聊天页面
    console.log('Go to chat')
  },
  goToMedicineInfo: function () {
    // 跳转到药物知识页面
    console.log('Go to medicine info')
  },
  goToQuickCheckin: function () {
    // 跳转到快速打卡页面
    wx.navigateTo({
      url: '/pages/quickCheckin/quickCheckin'
    })
  }
})
