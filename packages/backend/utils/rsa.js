const {
  JSEncrypt
} = require('../app/utils/jsencrypt.js')

exports.decrypt = function (decryData, privateKey) {
  if ('decryData', typeof decryData !== 'string') {
    throw TypeError('encryptData MUST Be String')
  }
  let decrypt = new JSEncrypt()
  decrypt.setPrivateKey(privateKey)
  return decrypt.decrypt(decryData)
}

exports.encrypt = function (encryData, publicKey) {
  // ensure encryData is String!
  if (typeof encryData !== 'string') {
    if (typeof encryData === 'object') {
      encryData = JSON.stringify(encryData)
    } else {
      encryData = encryData.toString()
    }
  }
  let encrypt = new JSEncrypt()
  encrypt.setPublicKey(publicKey)
  let data = encrypt.encrypt(encryData)
  return data
}
