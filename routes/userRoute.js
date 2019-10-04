const router = require('express').Router()
const UserController = require('../controllers/user')
const { authentication, authorization } = require('../middleware/auth')

router.post('/register', UserController.register)
router.post('/manualLogin', UserController.manualLogin)
router.post('/googleLogin', UserController.googleLogin)
router.patch('/addFavorite', authentication, UserController.addFavorite)

module.exports = router