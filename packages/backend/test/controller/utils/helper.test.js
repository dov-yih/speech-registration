// const assert = require('assert')
const {
  app,
  mock,
  assert
} = require('egg-mock/bootstrap')
const {
  decrypt,
  encrypt
} = require('../../../app/extend/helper.js')
const keys = require('../../../../keys.json')
const {
  login,
  db
} = keys
let realUser = {
  username: '12354678',
  password: 'zxcvbnm'
}

describe('raw decrypt & encrypt function test', () => {
  function userEncryptStrEqual(keys) {
    return () => {
      let userStr = JSON.stringify(realUser)
      let encryptData = encrypt(userStr, keys.public)
      console.log('encrypt data', encryptData)
      let decryptUserStr = decrypt(encryptData, keys.private)
      assert.equal(userStr, decryptUserStr)
    }
  }
  it('LOGIN KEYS: encryp String should equal to decrypt String', userEncryptStrEqual(login))
  it('DB KEYS: encryp String should equal to decrypt String', userEncryptStrEqual(db))

  function userObjectDeepEqual(keys) {
    return () => {
      let userStr = JSON.stringify(realUser)
      let encryptData = encrypt(userStr, keys.public)
      let decryptUserStr = decrypt(encryptData, keys.private)
      let decryptUser = JSON.parse(decryptUserStr)
      assert.deepEqual(realUser, decryptUser)
    }
  }
  it('LOGIN KEYS: Real User should deepEqual to decrypted User', userObjectDeepEqual(login))
  it('DB KEYS: Real User should deepEqual to decrypted User', userObjectDeepEqual(db))


  function userObjectDeepEqualWithoutStringify(keys) {
    return () => {
      let encryptData = encrypt(realUser, keys.public)
      let decryptUserStr = decrypt(encryptData, keys.private)
      let decryptUser = JSON.parse(decryptUserStr)
      assert.deepEqual(realUser, decryptUser)
    }
  }
  it('LOGIN KEYS: Real User should deepEqual to decrypted User without JOSN.stringify', userObjectDeepEqualWithoutStringify(login))
  it('DB KEYS: Real User should deepEqual to decrypted User without JOSN.stringify', userObjectDeepEqualWithoutStringify(db))

  function encryptEqual(keys, data) {
    return () => {
      let encryptData = encrypt(data, keys.public)
      let decryptDataStr = decrypt(encryptData, keys.private)
      let decryptData = JSON.parse(decryptDataStr)
      assert.equal(data.toString(), decryptData)
    }
  }
  it('LOGIN KEYS: Eecrypt and Decrypt Number:123465', encryptEqual(login, 123456))
  it('DB KEYS:  Eecrypt and Decrypt Number:123465', encryptEqual(db, 123465))

  it('LOGIN KEYS: Eecrypt and Decrypt Array:[1,2,3]', encryptEqual(login, [1,2,3]))
  it('DB KEYS:  Eecrypt and Decrypt Array:[1,2,3]', encryptEqual(db, [1, 2, 3]))
})

describe('eggjs mock test', () => {
  it('should be success: ', () => {
    function userObjectDeepEqual(keys) {
      return () => {
        const ctx = app.mockContext()
        let userStr = JSON.stringify(realUser)
        let encryptData = ctx.helper.encrypt(userStr, keys.public)
        let decryptUserStr = ctx.helper.decrypt(encryptData, keys.private)
        let decryptUser = JSON.parse(decryptUserStr)
        assert.deepEqual(realUser, decryptUser)
      }
    }
    it('LOGIN KEYS: Real User should deepEqual to decrypted User', userObjectDeepEqual(login))
    it('DB KEYS: Real User should deepEqual to decrypted User', userObjectDeepEqual(db))
  })

  function userObjectDeepEqualWithoutStringify(keys) {
    return () => {
      const ctx = app.mockContext()
      // let userStr = JSON.stringify(realUser)
      let encryptData = ctx.helper.encrypt(realUser, keys.public)
      let decryptUserStr = ctx.helper.decrypt(encryptData, keys.private)
      let decryptUser = JSON.parse(decryptUserStr)
      assert.deepEqual(realUser, decryptUser)
    }
  }
  it('LOGIN KEYS: Real User should deepEqual to decrypted User without JOSN.stringify', userObjectDeepEqualWithoutStringify(login))
  it('DB KEYS: Real User should deepEqual to decrypted User without JOSN.stringify', userObjectDeepEqualWithoutStringify(db))
})

