import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModels.js'
const getProducts = asyncHandler(async (req, res) => {
    // @desc Fetch all products
    // @route GET /api/products
    // @access public
    const products = await Product.find({})
    res.json(products)
})
const getProductId = asyncHandler(async (req, res) => {
    // @desc Fetch a product
    // @route GET /api/products/:id
    // @access public
    const product = await Product.findById(req.params.id)
    if (product) {

        res.json(product)

    } else {
        res.status(404)
        throw new Error('Resourde not found')
    }
})
export { getProductId, getProducts }