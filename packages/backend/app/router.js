module.exports = app => {
  const {
    router,
    controller
  } = app
  const { speech,login } = controller
  router.resources('speech', '/speech', controller.speech)
  router.resources('user', '/user', controller.user)
  // Or
  // router.resources('user', '/admin/user', controller.speech)
  router.post('getPublicKey', '/login', controller.login.index)
  router.post('getPublicKey', '/test', controller.login.test)
}
