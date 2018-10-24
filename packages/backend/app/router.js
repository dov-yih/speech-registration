module.exports = app => {
  const {
    router,
    controller
  } = app
  router.resources('speech', '/speech', controller.speech)
}
