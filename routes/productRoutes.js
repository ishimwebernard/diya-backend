const productsRouter = require('express').Router()
const {createProduct, getAllProducts} = require('../controllers/productsController')


productsRouter.route('/create').post(createProduct)
productsRouter.route('/getAllOrders').get(getAllProducts)

module.exports = productsRouter