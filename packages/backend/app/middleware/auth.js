const errorSerializer = require('../serializer/errorSerializer')

module.exports = (options, app) => async function auth(ctx, next) {
  console.log('auth options: ' ,options, ctx.params)
  let verification = await ctx.helper.verifyToken(ctx, ctx.params.id)
  if (verification.status) {
    await next()
  } else {
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
