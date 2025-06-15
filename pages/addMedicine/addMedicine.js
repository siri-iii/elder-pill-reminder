Page({
  data: {
    elderNames: [], 
    elderIndex: 0,
    form: {
      name: '',
      img: '',
      dosage: '',
      date: '',
      time: '',
      date: '',
      method: '',
    }
  },

  onLoad() {
    const elders = wx.getStorageSync('elders_data') || []
    this.setData({
      elderNames: elders.map(item => item.name)
    })
  },

  onElderChange(e) {
    this.setData({ elderIndex: e.detail.value })
  },

  onNameInput(e) {
    this.setData({ 'form.name': e.detail.value })
  },

  onDosageInput(e) {
    this.setData({ 'form.dosage': e.detail.value })
  },

  onDateChange(e) {
    this.setData({ 'form.date': e.detail.value })
  },

  onTimeChange(e) {
    this.setData({ 'form.time': e.detail.value })
  },

  onMethodInput(e) {
    this.setData({ 'form.method': e.detail.value })
  },

  chooseImage() {
    wx.chooseMedia({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        this.setData({ 'form.img': res.tempFilePaths[0] })
      }
    })
  },

  onSubmit(e) {
    const { name, dosage, date, time, method } = this.data.form
    if (!name || !dosage || !date || !time || !method) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' })
      return
    }
    const reminders = wx.getStorageSync('medicine_reminders') || []
    reminders.push({name, dosage, date, time, method, img: this.data.form.img, taken: false})
    wx.setStorageSync('medicine_reminders', reminders)
    const today = new Date().toISOString().split('T')[0]
    if (date === today) {
      const medications = wx.getStorageSync('medications') || []
      medications.push({name,dosage,method,time,taken: false})
      wx.setStorageSync('medications', medications)
    }
    wx.showToast({ title: '添加成功', icon: 'success' })
    this.setData({ form: { name: '', dosage: '', img: '', time: '', date: '', method: '' } }) 
  }
}) 
