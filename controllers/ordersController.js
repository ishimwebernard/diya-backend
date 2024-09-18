const Order = require('../models').Order
const User = require('../models').Users

const createOrder = async(req, res, next) => {
    const body = req.body
    if(!body.ClientId || !body.Price || !body.Status){
        return res.status(400).json({
            message: 'Enter all required information'
        })
    }

    //checking if the clientId exists
    const clientIdCheck = await User.findOne({where: {id:body.ClientId}})
    if(!clientIdCheck){
        return res.status(400).json({
            message: 'ClientId does not exist'
        })
    }

    const createResult = await Order.create({
        ClientId: body.ClientId, Price:body.Price, Status:body.Status, Items: body.Items
    })
    return res.status(201).json({
        message: 'Order Added succesfully'
    })
}

const getAllOrders = async(req, res, next) => {
    const data = await Order.findAll()
    return res.status(200).json({
        data
    })
}

const deleteOrder = async(req, res, next) =>{
    const data = await Order.destroy({
        where: {
            id: req. body.id
        }
    })
    console.log(data)
    return res.status(200).json({message: 'Succesfully deleted the order'})
}
const getOrdersByCustomer = async(req, res, next)=>{
    console.log(req.body.ClientId)
    const data = await Order.findOne({
        where: {ClientId: req.body.ClientId}
    })
    return res.status(200).json(data)
}
module.exports = {createOrder, getAllOrders, deleteOrder, getOrdersByCustomer}