const Cart = require('../models').Cart
const addCart = async(req, res, next) =>{
    const serverResponse = await Cart.create({
        user_id: req.body.user_id,
        status: req.body.status,
        items: req.body.items
    })
    return res.status(200).json({message: "Item added Succesfully"})
}

module.exports = {addCart}