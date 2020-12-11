const Currency = require('../models/Currency')

async function getAllStoredData(req, res) {
  let limit, page
  if (!req.query.name) {
    try {
      !req.query.limit ? (limit = 5) : (limit = Number(req.query.limit))
      !req.query.page ? (page = 1) : (page = Number(req.query.page))
      let skip = (page - 1) * limit
      if (skip + limit > (await Currency.countDocuments())) {
        skip = 0
        limit = 5
      }
      res.send(
        await Currency.find()
          .limit(limit)
          .skip(skip)
          .select({ cc: 1, txt: 1, rate: 1 })
      )
    } catch (e) {
      console.log(e.message)
    }
  } else {
    try {
      const txt = req.query.name
      res.send(await Currency.find({ txt }))
    } catch (e) {
      console.log(e.message)
    }
  }
}

module.exports = getAllStoredData
