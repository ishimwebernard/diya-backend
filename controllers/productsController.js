
const Product =  require('../models').Products

const createProduct = async(req, res, next) => {
    const body = req.body;

    if (!body.ItemName || !body.Category || !body.CostPrice || !body.SellingPrice || !body.Picture){
        return res.status(400).json({
            message: 'Enter all required information'
        })
    }

    const result = await Product.create({
        ItemName: body.ItemName,
        Category: body.Category,
        CostPrice: body.CostPrice,
        SellingPrice: body.SellingPrice,
        Picture: body.Picture
    })
    return res.status(200).json({
        message: 'Product added succesfully'
    })
}
const getAllProducts = async(req, res, next) => {
    const data = await Product.findAll();
    return res.status(200).json(data)   
}

const deleteProduct = async(req, res, next) =>{
    const data = await Product.destroy({
        where: {
            id: req. body.id
        }
    })
    console.log(data)
    return res.status(200).json({message: 'Succesfully deleted the product'})
}
// const updateProduct = async(req, res, next) => {
//     const productId = req.params.id;
//     const result = await Product.findOne({where: {id}})
// }
module.exports = {createProduct, getAllProducts, deleteProduct}