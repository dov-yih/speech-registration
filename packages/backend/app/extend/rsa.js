// const NodeRSA = require('node-rsa')
const {
  JSEncrypt
} = require('../utils/jsencrypt.js')


module.exports = function decrypt(encryData, privateKey) {
  let encrypt = new JSEncrypt()
  encrypt.setPrivateKey(privateKey)
  let decrypted = encrypt.decrypt(encryData)
  return decrypted
}
