// pages/medicineInfo/medicineInfo.js
const medicineData = require('./medicineData');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    searchText: '',
    showDetail: false,
    currentMedicine: null,
    filteredCategories: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      categories: medicineData.categories,
      filteredCategories: medicineData.categories
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onSearchInput: function(e) {
    const searchText = e.detail.value.toLowerCase();
    this.setData({
      searchText: searchText
    });
    this.filterMedicines(searchText);
  },

  filterMedicines: function(searchText) {
    if (!searchText) {
      this.setData({
        filteredCategories: this.data.categories
      });
      return;
    }

    const filteredCategories = this.data.categories.map(category => {
      const filteredMedicines = category.medicines.filter(medicine => 
        medicine.name.toLowerCase().includes(searchText) ||
        medicine.shortDesc.toLowerCase().includes(searchText) ||
        medicine.genericName.toLowerCase().includes(searchText)
      );

      return {
        ...category,
        medicines: filteredMedicines
      };
    }).filter(category => category.medicines.length > 0);

    this.setData({
      filteredCategories: filteredCategories
    });
  },

  showMedicineDetail: function(e) {
    const medicine = e.currentTarget.dataset.medicine;
    this.setData({
      currentMedicine: medicine,
      showDetail: true
    });
  },

  closeDetail: function() {
    this.setData({
      showDetail: false,
      currentMedicine: null
    });
  }
})