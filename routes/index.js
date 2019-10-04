const router = require('express').Router()
const dotaRoute = require('./dotaRoute')
const userRoute = require('./userRoute')

router.use('/heroes', dotaRoute)
router.use('/user', userRoute)

module.exports = router