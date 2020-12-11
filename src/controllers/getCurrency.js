const Currency = require('../models/Currency')

async function getCurrency(req, res) {
  const id = req.params.id
  const { cc, txt, rate } = await Currency.findOne({ cc: id })

  res.send({ cc, txt, rate })
}

module.exports = getCurrency
