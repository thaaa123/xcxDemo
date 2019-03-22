const BaseUrl = 'http://bl.7yue.pro/v1/'
const AppKey = 'my68hrOAuKekrNDB'
const tips = {
  1: '未知错误',
  1000: '输入参数错误',
  1001: '输入的json格式不正确',
  1002: '找不到资源',
  1003: '未知错误',
  1004: '禁止访问',
  1005: '不正确的开发者key',
  1006: '服务器内部错误',
  2000: '你已经点过赞了',
  2001: '你还没点过赞',
  3000: '该期内容不存在'
}

// get
function getJson(url, parameter = {}) {
  return _request(url, parameter)
}

// post
function postJson(url, parameter = {}) {
  return _request(url, parameter, 'POST')
}

// 请求核心
function _request(url, parameter = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BaseUrl + url,
      data: {
        ...parameter
      },
      method: method,
      header: {
        appkey: AppKey
      },
      success(res) {
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          resolve(res.data)
        } else {
          let errCode = res.data.error_code
          _showErr(errCode)
        }
      },
      fail(err) {
        _showErr()
      }
    })
  })
}

// 展示错误
function _showErr(errCode = 1) {
  console.log(errCode)
  wx.showToast({
    title: tips[errCode],
    icon: 'none'
  })
}
export default { getJson, postJson}