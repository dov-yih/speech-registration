'use strict'

module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}'

  // add your config here
  config.middleware = []

  // change to your own sequelize configurations
  config.sequelize = {
    dialect: 'mysql',
    hostname: '127.0.0.1',
    port: 3306,
    database: 'speech-registrantion',
    username: 'root',
    password: '1203my'
  }
  config.security = {
    domainWhiteList: ['http://localhost:7701', 'http://localhost:7702'],
    csrf: {
      enable: false,
    },
  }
  config.cors = {
    // {string|Function}
    enable: true,
    package: 'egg-cors',
    origin: '*',
    // {string|Array}
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  config.jwt = {
    enable: false, // ?
    secret: '123456'
  }
  config.rsa = {
    public: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeY2GvSwNXIS3R+eK3HoyO6+up
XolhWRQhokiW0DANe7xhfGnUZcaWqABoGDHWEObpJCm9hvAs4rP0XEvZsWyuobI+
oJnvvkZgKxVxKoJbqI9tKabvzOcbNv0zeJQiRtUtuQ9xBe4gikmx4Vpaq5DUoJhK
HaP114KP/KbXJEqjpwIDAQAB
-----END PUBLIC KEY-----`,
    private: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCeY2GvSwNXIS3R+eK3HoyO6+upXolhWRQhokiW0DANe7xhfGnU
ZcaWqABoGDHWEObpJCm9hvAs4rP0XEvZsWyuobI+oJnvvkZgKxVxKoJbqI9tKabv
zOcbNv0zeJQiRtUtuQ9xBe4gikmx4Vpaq5DUoJhKHaP114KP/KbXJEqjpwIDAQAB
AoGAUq4oWRw8YyhTxe++9L6CuzzWaTSLXIDmrGQNpoSJARDdlroeeJykXRLYG369
zTRHhd6111TwXU3+iIoBomMnCvPjajhFQFQaW365t49iOFfDovYtFkZA8CfxTvpq
29oaQ331n5hk83K69ii7VcMldS6rxadOe4GkRfJF8Rv60BkCQQDNFEKysYpnuge1
SCaZIlRiIof6bQ/lI66j9ieAtpplRY8mnme14IVdRb7Ya4nrwoOj8uJEseiLPw0F
lKcRRmkrAkEAxbc9Atd1GDW9mXL/5P+9VBblPuj3IULNv8Ww6PP4X3f57ClaUsAb
LpVy+TzE89VZD2BXxf9jVCcE/h7vmBY5dQJBALTYtgygtd3M1jlN3APUmzdDHkh/
XrIBamNakfFWlgbSdW9n5ysjSFg9RhPRmXmXOcEdUd2kSd5phpEySrXYMqsCQQCV
cvaZKUeHb0fLr9Ohw3XXFB9guDPlXlurs8EPtSpu739odbGijzd8tNbdcoPlU8Uo
DEkMjwkD2SK6+6NbsKDpAkB8eU7oYJvXDuitSvAEJ6v5Q68aXhYJayCE1QEIV30Y
FZlGPgOPVpqfFxGaCNgz6InzSrVUnPLGDpMi6Jn5+blz
-----END RSA PRIVATE KEY-----`
  }
  return config
}
