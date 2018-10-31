const {
  app,
  assert
} = require('egg-mock/bootstrap')

describe('should get token success', () => {
  it('should get token from headers', async () => {
    let ctx = app.mockContext({
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MDU4NTIyIiwiaWF0IjoxNTQwOTU2MTg4LCJleHAiOjE1NDA5OTkzODh9.00YFlOHER4YKFvB53aEo9Lp1J4aGq3bGC1EZp-ZvMfI',
      },
    })
    let token = ctx.helper.getAccessToken(ctx)
    assert(token)
  })

  it('should verify token success', async () => {
     let ctx = app.mockContext()
     sNo = '16058522'
     const token = ctx.service.login.createToken({
       id: sNo
     })
    ctx = app.mockContext({
      headers: {
        'authorization': 'Bearer ' + token,
      },
    })
    const legal = await ctx.helper.verifyToken(ctx, sNo)
    assert(legal)
  })
})
