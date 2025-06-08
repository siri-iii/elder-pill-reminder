// pages/caregiverMonitor/caregiverMonitor.js
Page({
  data: {
    medicines: [],
    monitoringData: {}
  },
  onLoad: function (options) {
    // 模拟获取药品列表
    this.setData({
      medicines: [
        { name: '药品A', dosage: '1片', time: '08:00' },
        { name: '药品B', dosage: '2毫升', time: '20:00' }
      ]
    })
  },
  goToMedicineSettings: function () {
    wx.navigateTo({
      url: '/pages/medicineSettings/medicineSettings'
    })
  },
  goToElderlyManage() {
    wx.navigateTo({ url: '/pages/elderlyManage/elderlyManage' })
  },
  goToAddMedicine() {
    wx.navigateTo({ url: '/pages/addMedicine/addMedicine' })
  },
  goToCheckinStatus() {
    wx.navigateTo({ url: '/pages/checkinStatus/checkinStatus' })
  }
})
