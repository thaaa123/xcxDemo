// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    first: {
      type: Boolean
    },
    last: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    previous: function () {
      if (!this.properties.last)
        this.triggerEvent('previous', {})
    },
    next: function () {
      if (!this.properties.first)
        this.triggerEvent('next', {})
    }
  }
})
