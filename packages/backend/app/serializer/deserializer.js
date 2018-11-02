const {Deserializer} = require('jsonapi-serializer')

module.exports = (data) => {
  return new Promise((resolve, reject) => {
    new Deserializer({
      keyForAttribute: 'underscore_case'
    }).deserialize(data, (err, deserializedData) => {
      if(err) reject(err)
      else resolve(deserializedData)
    })
  })
}
