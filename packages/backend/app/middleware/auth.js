const errorSerializer = require('../serializer/errorSerializer')

module.exports = (options, app) => async function auth(ctx, next) {
  let verification = await ctx.helper.verifyToken(ctx)
  if (verification.status) {
    await next()
  } else {
    ctx.status = 401
    return ctx.body = errorSerializer({
      code: '401',
      title: 'AUTH FAILED',
      detail: verification.message,
      links: {
        about: '/login'
      }
    })
  }
}
