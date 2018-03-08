import orignjsonp from 'jsonp'

export default function jsonp(url, data, options) {
  url += (~url.indexOf('?') ? '?' : '&') + parmas(data)

  return new Promise((resolve, reject) => {
    orignjsonp(url, options, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function parmas(data) {
  let url = ''

  Object.keys(data).forEach(key => {
    let value = data[key] !== undefined ? data[key] : ''
    url += '&' + key + '=' + value
  })

  return url ? url.substring(1) : url
}