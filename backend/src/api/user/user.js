const restful = require('node-restful')
const moongose = restful.moongose

const userSchema = new moongose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, min: 6, max: 12, required: true }
})

module.export = restful.model('User', userSchema)