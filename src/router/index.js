const { Router } = require('express')

const { getAllStoredData, getCurrency } = require('../controllers')
const isAuth = require('../middleware')

const router = Router()

router.get('/api/currencies', isAuth, getAllStoredData)
router.get('/api/currencies/:id', isAuth, getCurrency)

module.exports = router
