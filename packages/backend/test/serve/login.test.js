const {
  app,
  assert
} = require('egg-mock/bootstrap')
describe('get()', () => {
  it('should create and verify token successful', async () => {
    // 创建 ctx
    let ctx = app.mockContext()
    // 通过 ctx 访问到 service.user
    const token = ctx.service.login.createToken({id: '16058522'});
    // console.log(token)
    assert(token)
    // assert.equal(token,exceptedToken)
    const verifyRes = await ctx.service.login.verifyToken(token)
    // console.log(verifyRes)
    assert(verifyRes)
  })
})
