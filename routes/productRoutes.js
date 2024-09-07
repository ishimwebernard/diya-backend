const productsRouter = require('express').Router()
const {createProduct, getAllProducts, deleteProduct} = require('../controllers/productsController')


productsRouter.route('/create').post(createProduct)
productsRouter.route('/getAllOrders').get(getAllProducts)
productsRouter.route('/delete').post(deleteProduct)

module.exports = productsRouter