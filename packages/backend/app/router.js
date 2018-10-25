module.exports = app => {
  const {
    router,
    controller
  } = app
  const { speech,login } = controller
  router.resources('speech', '/speech', controller.speech)
  router.post('getPublicKey', '/login', controller.login.index)
}
