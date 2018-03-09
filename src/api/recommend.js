// import jsonp from 'common/js/jsonp'
import {commonParams} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = '/api/recommend'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1,
    _: Date.now()
  })

  // return jsonp(url, data, options)
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: data
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}