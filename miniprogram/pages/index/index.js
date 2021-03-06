// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    currentSwiper: 0
  },

  handleSwiperChange(e) {
    const { current } = e.detail
    this.setData({
      currentSwiper: current
    })
  },

  // 加载轮播图
  loadSwiper() {
    this.db.collection('swiper').get().then(res => {
      this.setData({
        swiperList: res.data
      })
    })
  },
  
  // 跳转到车辆产品页面
  toProduct(e) {
    let { productId } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/product/product?id=${productId}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.db = wx.cloud.database()
    this.loadSwiper()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})