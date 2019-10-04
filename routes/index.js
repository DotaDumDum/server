const router = require('express').Router()
const youtubeRoute = require('./youtube')
const dotaRoute = require('./dotaRoute')
const userRoute = require('./userRoute')

router.use('/heroes', dotaRoute)
router.use('/user', userRoute)
router.use('/youtube', youtubeRoute)

module.exports = router