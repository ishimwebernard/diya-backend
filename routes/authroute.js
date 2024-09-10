const {signUp, login, addChildren, getUserByPhone}  =  require('../controllers/authController')
const router = require('express').Router();

router.route('/signup').post(signUp)
router.route('/login').post(login)
router.route('/getUserByPhone').post(getUserByPhone)
module.exports = router