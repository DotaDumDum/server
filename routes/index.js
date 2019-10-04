const router = require('express').Router()
<<<<<<< HEAD
const youtubeRoute = require('./youtube')
router.use('/youtube', youtubeRoute)
=======
const dotaRoute = require('./dotaRoute')
const userRoute = require('./userRoute')

router.use('/heroes', dotaRoute)
router.use('/user', userRoute)
>>>>>>> f9e224a88e913612771706c142ff4137bf110c8f

module.exports = router