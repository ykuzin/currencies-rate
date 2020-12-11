const Currency = require('../models/Currency')

async function getCurrency(req, res) {
  try {
    const id = req.params.id
    const { cc, txt, rate } = await Currency.findOne({ cc: id })

    res.send({ cc, txt, rate })
  } catch (e) {
    console.log(e.message)
    res.sendStatus(404)
  }
}

module.exports = getCurrency
