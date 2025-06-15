// pages/userMode/userMode.js
Page({
  data: {
    userInfo: null,
  },

  onLoad() {
    // 检查是否已经登录
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({ userInfo })
    }
    // 语音播报
    this.speak('请选择您的使用模式')
  },

  speak(text) {
    if (wx.getAvailableAudioSources) {
      // 微信小程序tts能力有限，推荐用云开发云函数或第三方API
      // 这里用wx.createInnerAudioContext模拟
      // 你可以用腾讯云tts接口生成音频后播放
      // 这里只做演示
      // wx.cloud.callFunction({ name: 'tts', data: { text } })
      //   .then(res => { ... })
    }
  },

  selectMode(e) {
    const mode = e.currentTarget.dataset.mode
    if (!this.data.userInfo) {
      // 如果未登录，先进行登录
      wx.getUserProfile({
        desc: '用于完善用户资料',
        success: (res) => {
          const userInfo = res.userInfo
          wx.setStorageSync('userInfo', userInfo)
          this.setData({ userInfo })
          this.navigateToMode(mode)
        },
        fail: () => {
          wx.showToast({
            title: '请授权登录',
            icon: 'none'
          })
        }
      })
    } else {
      this.navigateToMode(mode)
    }
  },

  navigateToMode(mode) {
    if (mode === 'elderly') {
      wx.navigateTo({
        url: '/pages/elderlyPanel/elderlyPanel'
      })
    } else {
      wx.navigateTo({
        url: '/pages/caregiverMonitor/caregiverMonitor'
      })
    }
  },

  // 关于我们/隐私政策跳转
  goAbout() {
    wx.navigateTo({ url: '/pages/userMode/about' })
  },
  goPrivacy() {
    wx.navigateTo({ url: '/pages/userMode/privacy' })
  },

  onSpeakerTap() {
    wx.showToast({
      title: '可以朗读页面内容',
      icon: 'none',
      duration: 2000
    })
  }
})
