function initDailySync() {
  const now = new Date()
  const midnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0, 0, 0
  )
  const delay = midnight - now
  setTimeout(() => {
    syncMedications()
    setInterval(syncMedications, 24 * 60 * 60 * 1000) 
  }, delay)
}

function syncMedications() {
  console.log('初始化今天的用药提醒')
  const today = formatDate(new Date())
  const reminders = wx.getStorageSync('medicine_reminder') || []
  const medications = wx.getStorageSync('medications') || []
  
  const todayMeds = reminders.filter(item => item.date === today)
  
  const newMeds = todayMeds.map(item => ({
    name: item.name,
    dosage: item.dosage,
    method: item.method,
    time: item.time,
    taken: false
  }))
  
  wx.setStorageSync('medications', newMeds)
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

module.exports = { initDailySync }
