const STORAGE_KEY = 'medications'

Page({
  data: {
    currentDate: '',
    medications: []
  },

  onLoad() {
    this.setData({
      currentDate: this.getCurrentDate()
    });
    this.loadMedicationStatus();
  },

  getCurrentDate() {
    const date = new Date();
    const week = ['日', '一', '二', '三', '四', '五', '六'];
    return `${date.getMonth()+1}月${date.getDate()}日 星期${week[date.getDay()]}`;
  },

  loadMedicationStatus() {
    wx.getStorage({
      key: STORAGE_KEY,
      success: (res) => {
        this.setData({medications: res.data || [] });
      },
    })
  },

  toggleMedication(e) {
    const index = e.currentTarget.dataset.index;
    let newMedications = this.data.medications;
    newMedications[index].taken = !newMedications[index].taken;
    const reminders = wx.getStorageSync('medicine_reminders') || [];
    const today = new Date().toISOString().split('T')[0]
    reminders.forEach(reminder => {
    if (reminder.name === newMedications[index].name && 
        reminder.time === newMedications[index].time &&
        reminder.date === today) {
      reminder.taken = newMedications[index].taken;
    }
    });
    this.setData({ medications: newMedications });
    wx.setStorageSync('medications', newMedications);
    wx.setStorageSync('medicine_reminders', reminders);
    wx.showToast({
      title: newMedications[index].taken ? '打卡成功' : '已取消打卡',
      icon: 'none'
    });
  }
});