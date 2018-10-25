const NodeRSA = require('node-rsa')
const {
  JSEncrypt
} = require('../utils/jsencrypt.js')

function decrypt(encryData, privateKey) {
  let encrypt = new JSEncrypt()
  encrypt.setPrivateKey(privateKey)
  let decrypted = encrypt.decrypt(encryData)
  return decrypted
}
module.exports = {
  decrypt,
}
