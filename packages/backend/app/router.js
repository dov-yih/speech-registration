module.exports = app => {
  const {
    router,
    controller
  } = app
  const { speech,login, user, adminSpeech } = controller
  router.resources('speech', '/speeches', speech)
  router.resources('user', '/users', user)
  // Or
  // router.resources('user', '/admin/user', speech)
  router.post('getPublicKey', '/login', login.index)
  router.post('getPublicKey', '/test', login.test)

  let admitRouter = router.namespace('/admin', async (ctx,next) => {
    if(ctx.helper.verifyToken(ctx,'16058522')) {
      await next()
    }else {
      return ctx.body = {
        error: 'pleace login first',
        redirect: '/login'
      }
    }
  })
  admitRouter.resources('/speeches', adminSpeech)
}
