module.exports = app => {
  const {
    router,
    controller
  } = app
  const {
    speech,
    login,
    user,
    adminSpeech,
    tag,
    direction,
  } = controller
  router.resources('speech', '/speeches', speech)
  router.resources('user', '/users', user)
  router.get('/speeches/next', speech.next)
  router.get('/speeches/archives', speech.archive)

  router.post('getPublicKey', '/login', login.index)
  let auth = app.middleware.auth({prefix: '/admin'})
  let adminRouter = router.namespace('/admin', auth)
  adminRouter.resources('/speeches', adminSpeech)
  adminRouter.resources('/tags', tag)
  adminRouter.resources('/directions', direction)
}
