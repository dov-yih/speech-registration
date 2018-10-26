const crypto = require('crypto')
const Identicon = require('identicon.js')

module.exports = (str) => {
  let hash = crypto.createHash('md5')
  hash.update(str)
  let imgData = new Identicon(hash.digest('hex')).toString()
  let imgUrl = 'data:image/png;base64,' + imgData
  return imgUrl
}

