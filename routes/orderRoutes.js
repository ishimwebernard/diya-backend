const orderRouter = require('express').Router()
const {createOrder, getAllOrders, deleteOrder, getOrdersByCustomer} = require('../controllers/ordersController')


orderRouter.route('/create').post(createOrder)
orderRouter.route('/getAllOrders').get(getAllOrders)
orderRouter.route('/deleteOrder').post(deleteOrder)
orderRouter.route('/getorderbycustomer').post(getOrdersByCustomer)
module.exports = orderRouter