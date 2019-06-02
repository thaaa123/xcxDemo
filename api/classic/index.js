import request from '../../util/request.js'

function latest(param = {}) {
  let url = 'classic/latest'
  return request.getJson(url, param)
}

function getPrevious(param = {}){
  let url = `classic/${param.index}/previous`
  return request.getJson(url, param)
}

function getNext(param = {}){
  let url = `classic/${param.index}/next`
  return request.getJson(url, param)
}

function like(behavior, parameter = {}) {
  let url = behavior ? 'like' : 'like/cancel'
  return request.postJson(url, parameter)
}

export default { latest, like, getPrevious, getNext }
