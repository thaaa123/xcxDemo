Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Number
    },
    num: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: 'images/liked@2x.png',
    noSrc: 'images/like@2x.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (e) {
      let behavior = !this.properties.like
      this.triggerEvent('like', { behavior: behavior})
    }
  }
})
