module.exports = app => {
  const {
    router,
    controller
  } = app
  const { speech,login, user, adminSpeech } = controller
  router.resources('speech', '/speech', speech)
  router.resources('user', '/user', user)
  // Or
  // router.resources('user', '/admin/user', speech)
  router.post('getPublicKey', '/login', login.index)
  router.post('getPublicKey', '/test', login.test)

  let admitRouter = router.namespace('/admin', async (ctx,next) => {
    console.log('Somebody visit /admin')
    await next()
    console.log('He/She left /admin')
  })
  admitRouter.get('/speech', adminSpeech.show)
}
