// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: null,
    product_lines: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.db = wx.cloud.database()
    this.db.collection('product').doc(options.id).get().then(res => {
      this.setData({
        product: res.data
      })
      this._loadProductLine(res.data.product_line)
    })
  },

  _loadProductLine(productLine) {
    this.db.collection('product_line').where({
      _id: this.db.command.in(productLine)
    }).get().then(res => {
        this.setData({ product_lines: res.data })
    })
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