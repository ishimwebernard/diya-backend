import Cart from '../models/cart'

const addCart = (req, res, next) =>{

    return res.status(200).json({message: "Welcome to cart"})
}

export default {addCart}