Page({
  data: {
    elderNames: ['张三', '李四'], // 模拟老人列表
    elderIndex: 0,
    form: {
      name: '',
      img: '',
      function: '',
      frequency: ''
    }
  },
  onElderChange(e) {
    this.setData({ elderIndex: e.detail.value })
  },
  onNameInput(e) {
    this.setData({ 'form.name': e.detail.value })
  },
  onFunctionInput(e) {
    this.setData({ 'form.function': e.detail.value })
  },
  onFrequencyInput(e) {
    this.setData({ 'form.frequency': e.detail.value })
  },
  chooseImage() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        this.setData({ 'form.img': res.tempFilePaths[0] })
      }
    })
  },
  onSubmit(e) {
    const { name, img, function: func, frequency } = this.data.form
    const { elderNames, elderIndex } = this.data
    if (!name || !func || !frequency) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' })
      return
    }
    // 这里可以调用后端API保存药品信息，带上elderNames[elderIndex]
    wx.showToast({ title: '添加成功', icon: 'success' })
    // 清空表单
    this.setData({
      form: { name: '', img: '', function: '', frequency: '' }
    })
  }
}) 