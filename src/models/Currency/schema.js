const { Schema, Decimal128 } = require('mongoose')

module.exports = new Schema(
  {
    cc: { type: String, required: true, index: true, unique: true },
    txt: { type: String, required: true },
    rate: { type: Decimal128, required: true }
  },
  {
    versionKey: false
  }
)
