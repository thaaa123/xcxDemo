import request from '../../util/request.js'

function latest(parameter = {}) {
  let url = 'classic/latest'
  return request.getJson(url, parameter)
}

function like(behavior, parameter = {}) {
  let url = behavior ? 'like' : 'like/cancel'
  return request.postJson(url, parameter)
}

export default { latest, like }
