const STORAGE_KEY = 'elders_data'

Page({
  data: {
    elders: [],
    showForm: false,
    form: {
      name: '',
      genderIndex: 0,
      age: '',
      condition: ''
    },
    showDetail: false,
    detailIndex: null,
    editingIndex: null,
    genderOptions: ['男', '女']
  },

  onLoad() {
    this.loadEldersData()
  },

  loadEldersData() {
    wx.getStorage({
      key: STORAGE_KEY,
      success: (res) => {
        this.setData({ elders: res.data || [] })
      },
    })
  },

  saveEldersData(data) {
    wx.setStorage({
      key: STORAGE_KEY,
      data: data,
      success: () => {
        console.log('数据保存成功')
      },
      fail: (err) => {
        console.error('保存失败:', err)
      }
    })
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

  editElder(e) {
    const index = e.currentTarget.dataset.index;
    const elder = this.data.elders[index];
    this.setData({
      showDetail: false,
      showForm: true,
      form: {
        name: elder.name,
        genderIndex: elder.gender === '女' ? 1 : 0,
        age: elder.age,
        condition: elder.condition || ''
      },
      editingIndex: index,
      detailIndex: null,
    });
  },

  addElder() {
    const { name, genderIndex, age, condition } = this.data.form
    if (!name || !age) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' })
      return
    }
    let newElders = this.data.elders
    const gender = this.data.genderOptions[genderIndex]
    if (this.data.editingIndex !== null) {
      newElders[this.data.editingIndex] = { name, gender, age, condition }
      wx.showToast({ title: '修改成功'})
      this.setData({editingIndex: null})
    } else {
      newElders = newElders.concat([{ name, gender, age, condition }]);
      wx.showToast({ title: '添加成功' })
    }
    this.setData({
      elders: newElders,
      showForm: false,
    })
    this.saveEldersData(newElders)
  },

  deleteElder(e) {
    const index = e.currentTarget.dataset.index
    wx.showModal({
      content: '确定要删除这位老人的信息吗？',
      success: (res) => {
        if (res.confirm) {
          const elders = this.data.elders
          elders.splice(index, 1)
          this.setData({ elders })
          this.setData({
            elders: elders,
            showDetail: false,
            detailIndex: null,
          });
          wx.showToast({ title: '删除成功' })
        }
      }
    })
  },

  showElderDetail(e) {
    this.setData({
      detailIndex: e.currentTarget.dataset.index,
      showDetail: true,
    })
  },

  hideElderDetail() {
    this.setData({ 
      showDetail: false,
      detailIndex: null,
    })
  }
}) 