// components/IndexSwiper/IndexSwiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperList: {
      type: Array,
      default: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentSwiper: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 监听Swiper的切换
    handleSwiperChange(e) {
      const { current } = e.detail
      this.setData({
        currentSwiper: current
      })
    },

    // 跳转到车辆产品页面
    toProduct(e) {
      let { productId } = e.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/product/product?id=${productId}`,
      })
    },

    // 弹出预约试驾弹出层
    handleBookCar() {
      this.triggerEvent('bookCar', true)
    }
  }
})
