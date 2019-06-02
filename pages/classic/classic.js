// pages/classic/classic.js
import classicApi from '../../api/classic/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: {},
    first: true,
    last: false
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
        classic: res,
        last: res.index === 1
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
  },
  // 上一期刊
  onPrevious: function () {
    let param = {index: this.data.classic.index}
    classicApi.getPrevious(param).then(res => {
      this.setData({
        classic: res,
        first: false,
        last: res.index === 1
      })
    })
  },
  // 下一期刊
  onNext: function () {
    let param = {index: this.data.classic.index}
    classicApi.getNext(param).then(res => {
      this.setData({
        classic: res,
        last: false
      })
      classicApi.latest().then(res => {
        this.setData({
          first: res.index === this.data.classic.index
        })
      })
    })
  }
})