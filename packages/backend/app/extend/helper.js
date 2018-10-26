
const {encrypt, decrypt} = require('../../utils/rsa.js')

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

exports.success = (ctx, result = null, message = '请求成功', status = 200) => {
  ctx.body = {
    code: 0,
    message: message,
    data: result
  }
  ctx.status = status
}

exports.error = (ctx, code, message) => {
  ctx.body = {
    code: code,
    message: message
  }
  ctx.status = code
}

exports.decrypt = decrypt

exports.encrypt = encrypt
