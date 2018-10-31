const {encrypt, decrypt} = require('../../utils/rsa.js')
const errorSerializer = require('../serializer/errorSerializer')

// Copy from https://segmentfault.com/a/1190000014952764#articleHeader8
exports.getAccessToken = ctx => {
  let bearerToken = ctx.request.header.authorization
  return bearerToken && bearerToken.replace('Bearer ', '')
}

exports.verifyToken = async (ctx, userId) => {
  let token = this.getAccessToken(ctx)
  let verifyResult = await ctx.service.login.verifyToken(token)
  if (!verifyResult.verify) {
    ctx.helper.error(ctx, 401, verifyResult.message)
    return false
  }
  if (userId != verifyResult.message.id) {
    ctx.helper.error(ctx, 401, '用户 ID 与 Token 不一致')
    return false
  }
  return true
}

exports.error = (ctx, code, detail) => {
  ctx.body = errorSerializer({
    code: code,
    title: 'Unexcept Error',
    detail,
    links: {
      about: '/login'
    }
  })
  ctx.status = code
}

exports.decrypt = decrypt

exports.encrypt = encrypt
