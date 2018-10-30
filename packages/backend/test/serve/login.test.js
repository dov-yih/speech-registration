const {
  app,
  assert
} = require('egg-mock/bootstrap')
describe('get()', () => {
  it('should pass', async () => {
    // 创建 ctx
    const ctx = app.mockContext();
    // 通过 ctx 访问到 service.user
    const token = ctx.service.login.createToken({id: '12345678'});
    const legal = ctx.helper.verifyToken(token)
    assert(legal === true)
  })
})
