// pages/classic/classic.js
import classicApi from '../../api/classic/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLatset()
  },
  // get最新期刊
  getLatset: function () {
    classicApi.latest().then(res => {
      this.setData({
        classic: res
      })
    })
  },
  // 触发点赞事件
  onLike: function (e) {
    let parameter = {
      art_id: this.data.classic.id,
      type: this.data.classic.type
    }
    this.like(e.detail.behavior, parameter)
  },
  // 点赞
  like: function (behavior, parameter) {
    classicApi.like(behavior, parameter).then(res => {
      this.getLatset()
    })
  }
})