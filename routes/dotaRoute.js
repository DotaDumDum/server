const router = require('express').Router()
const DotaController = require('../controllers/dota')

router.get('/', DotaController.getHeroes)

module.exports = router