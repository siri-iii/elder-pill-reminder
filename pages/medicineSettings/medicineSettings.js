// pages/medicineSettings/medicineSettings.js
Page({
  data: {
    medicines: []
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
  addMedicine: function () {
    // 添加新药品的逻辑
    console.log('Add new medicine')
  },
  editMedicine: function (e) {
    // 编辑药品的逻辑
    const index = e.currentTarget.dataset.index
    console.log('Edit medicine at index', index)
  },
  deleteMedicine: function (e) {
    // 删除药品的逻辑
    const index = e.currentTarget.dataset.index
    let medicines = this.data.medicines
    medicines.splice(index, 1)
    this.setData({ medicines })
  }
})
