// pages/elderlyPanel/elderlyPanel.js
Page({
  data: {
    fontSizeLevel: 0, // 0: 默认, 1: 大, 2: 更大
    fontSizeMap: {
      0: {
        title: 48,
        subtitle: 36,
        cardTitle: 42,
        cardDesc: 32
      },
      1: {
        title: 56,
        subtitle: 42,
        cardTitle: 48,
        cardDesc: 36
      },
      2: {
        title: 64,
        subtitle: 48,
        cardTitle: 54,
        cardDesc: 40
      }
    }
  },

  onLoad: function (options) {
    // 页面加载时执行的函数
    // 从本地存储获取字号设置
    const fontSizeLevel = wx.getStorageSync('fontSizeLevel') || 0;
    this.setData({ fontSizeLevel });
  },

  increaseFontSize() {
    if (this.data.fontSizeLevel < 2) {
      const newLevel = this.data.fontSizeLevel + 1;
      this.setData({ fontSizeLevel: newLevel });
      wx.setStorageSync('fontSizeLevel', newLevel);
    }
  },

  decreaseFontSize() {
    if (this.data.fontSizeLevel > 0) {
      const newLevel = this.data.fontSizeLevel - 1;
      this.setData({ fontSizeLevel: newLevel });
      wx.setStorageSync('fontSizeLevel', newLevel);
    }
  },

  goToChat: function () {
    // 跳转到聊天页面
    console.log('Go to chat')
    wx.navigateTo({
      url: '/pages/chat/chat'
    })
  },

  goToMedicineInfo: function () {
    // 跳转到药物知识页面
    console.log('Go to medicine info')
    wx.navigateTo({
      url: '/pages/medicineInfo/medicineInfo'
    })
  },

  goToQuickCheckin: function () {
    // 跳转到快速打卡页面
    wx.navigateTo({
      url: '/pages/quickCheckin/quickCheckin'
    })
  }
})
