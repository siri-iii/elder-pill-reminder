// app.js
const { initMedicationReminder } = require('./utils/reminder')
const { initDailySync } = require('./utils/dailySync')

App({
  onLaunch: function () {
    // 小程序启动时执行的逻辑
    console.log('App launched')
    initMedicationReminder()
    initDailySync()
  },
  globalData: {
    // 全局数据
    userInfo: null,
    userMode: null 
  }
})
