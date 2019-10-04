const router = require('express').Router()
const youtubeRoute = require('./youtube')
router.use('/youtube', youtubeRoute)

module.exports = router