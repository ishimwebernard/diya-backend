const orderRouter = require('express').Router()
const {createOrder, getAllOrders} = require('../controllers/ordersController')


orderRouter.route('/create').post(createOrder)
orderRouter.route('/getAllOrders').get(getAllOrders)

module.exports = orderRouter