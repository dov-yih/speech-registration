
import JSEncrypt from '@/lib/jsencrypt.min.js'

import { PUBLIC_KEY } from '@/keys.json'
let sign = new JSEncrypt()
sign.setPublicKey(PUBLIC_KEY)

export default (password) => {
  return sign.encrypt(password)
}
