
function initMedicationReminder() {
  // 每半分钟检查一次
  setInterval(checkMedicationTime, 60 * 500) 
}

function checkMedicationTime() {
  console.log('进行用药提醒检查')
  const now = new Date()
  const currentTime = formatTime(now.getHours(), now.getMinutes())
  const today = formatDate(now)
  const medications = wx.getStorageSync('medications') || []
  medications.forEach(med => {
    if (med.time === currentTime && !med.taken) {
      wx.showModal({
        title: '⏰ 用药时间到',
        content: `【药品】${med.name}\r\n【剂量】${med.dosage}\r\n【方式】${med.method}`,
        confirmText: '已服用',
        cancelText: '稍后提醒',
        confirmColor: '#07C160',
        success: (res) => {
          if (res.confirm) {
            med.taken = true
            wx.setStorageSync('medications', medications)
          } else {
            setTimeout(() => {
              this.checkMedicationTime()
            }, 5 * 60 * 1000)
          }
        }
      })
    }
  })
}

function formatTime(hours, minutes) {
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

function formatDate(date) {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}-${month}-${day}`
}

module.exports = { initMedicationReminder }