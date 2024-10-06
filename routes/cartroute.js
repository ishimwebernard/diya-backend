const {addCart} = require('../controllers/cart')
const router = require('express').Router()

router.route('/addCart').post(addCart)

module.exports = router