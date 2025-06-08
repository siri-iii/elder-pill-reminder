Page({
  data: {
    elders: [
      { name: '张三', gender: '男', age: 70, condition: '高血压' },
      { name: '李四', gender: '女', age: 68, condition: '糖尿病' }
    ],
    showForm: false,
    form: {
      name: '',
      genderIndex: 0,
      age: '',
      condition: ''
    },
    genderOptions: ['男', '女'],
    showDetail: false,
    detailIndex: null
  },
  showAddForm() {
    this.setData({ showForm: true, form: { name: '', genderIndex: 0, age: '', condition: '' } })
  },
  hideAddForm() {
    this.setData({ showForm: false })
  },
  onNameInput(e) {
    this.setData({ 'form.name': e.detail.value })
  },
  onGenderChange(e) {
    this.setData({ 'form.genderIndex': e.detail.value })
  },
  onAgeInput(e) {
    this.setData({ 'form.age': e.detail.value })
  },
  onConditionInput(e) {
    this.setData({ 'form.condition': e.detail.value })
  },
  addElder() {
    const { name, genderIndex, age, condition } = this.data.form
    if (!name || !age) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' })
      return
    }
    const gender = this.data.genderOptions[genderIndex]
    const elders = this.data.elders.concat([{ name, gender, age, condition }])
    this.setData({ elders, showForm: false })
  },
  deleteElder(e) {
    const index = e.currentTarget.dataset.index
    const elders = this.data.elders.slice()
    elders.splice(index, 1)
    this.setData({ elders })
  },
  showElderDetail(e) {
    this.setData({
      showDetail: true,
      detailIndex: e.currentTarget.dataset.index
    })
  },
  hideElderDetail() {
    this.setData({ showDetail: false })
  }
}) 