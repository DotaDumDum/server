const YoutubeController = require('../controllers/youtube')
const express = require('express')
const router = express.Router()

router.get('/video',YoutubeController.getVideo)
router.post('/comment',YoutubeController.commentVideo)

module.exports = router
