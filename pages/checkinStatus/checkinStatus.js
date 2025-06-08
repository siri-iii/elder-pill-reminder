Page({
  data: {
    elderNames: ['张三', '李四'],
    elderIndex: 0,
    date: '2024-06-08',
    records: [
      { medicine: '阿司匹林', time: '08:00', status: 'done' },
      { medicine: '降压药', time: '12:00', status: 'missed' },
      { medicine: '维生素C', time: '20:00', status: 'pending' }
    ]
  },
  onElderChange(e) {
    this.setData({ elderIndex: e.detail.value })
    this.fetchRecords()
  },
  onDateChange(e) {
    this.setData({ date: e.detail.value })
    this.fetchRecords()
  },
  fetchRecords() {
    // 这里应根据elderIndex和date请求后端数据，当前用模拟数据
    // 可根据elderIndex和date切换不同数据
    // this.setData({ records: ... })
  }
}) 