const orderRouter = require('express').Router()
const {createOrder, getAllOrders, deleteOrder} = require('../controllers/ordersController')


orderRouter.route('/create').post(createOrder)
orderRouter.route('/getAllOrders').get(getAllOrders)
orderRouter.route('/deleteOrder').post(deleteOrder)
module.exports = orderRouter