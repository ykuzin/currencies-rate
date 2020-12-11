const Currency = require('../models/Currency')

async function getCurrency(req, res) {
  const cc = req.params.id
  const currency = await Currency.findOne({ cc })

  res.send(currency)
}

module.exports = getCurrency
