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
  let auth = app.middleware.auth({prefix: '/admin'})
  let admitRouter = router.namespace('/admin', auth)
  admitRouter.resources('/speeches', adminSpeech)
}
