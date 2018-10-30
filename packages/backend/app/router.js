const JSONAPIError = require('jsonapi-serializer').Error
module.exports = app => {
  const {
    router,
    controller
  } = app
  const {
    speech,
    login,
    user,
    adminSpeech
  } = controller
  router.resources('speech', '/speeches', speech)
  router.resources('user', '/users', user)
  // Or
  // router.resources('user', '/admin/user', speech)
  router.post('getPublicKey', '/login', login.index)
  router.post('getPublicKey', '/test', login.test)

  let admitRouter = router.namespace('/admin', async (ctx, next) => {
    if (ctx.helper.verifyToken(ctx, '16058522')) {
      await next()
    } else {
      return ctx.body = new JSONAPIError({
        code: '401',
        title: 'pleace login first',
        detail: 'You should login before you visit this url',
        links: {
          about: '/login'
        }
      })
    }
  })
  admitRouter.resources('/speeches', adminSpeech)
}
