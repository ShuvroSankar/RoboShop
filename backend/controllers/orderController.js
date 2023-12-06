import asyncHandler from '../middleware/asyncHandler.js'
import Order from '../models/orderModels.js'

// @desc Create new order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body
    if (orderItems && orderItems.length === 0) {
        res.send(400)
        throw new Error("No order items")
    } else {
        const order = new Order(
            {
                order: orderItems.map(x => ({
                    ...x,
                    product: x._id,
                    _id: undefined
                })),
                use: req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice
            }
        )
        const createdOrder = await order.save()
        res.status(200).json(createdOrder)

    }
})
const getMyOrders = asyncHandler(async (req, res) => {
    // @desc Get orders of logged in users
    // @route GET /api/orders/myorder
    // @access Private
    res.send('get my orders')
})
const getOrderById = asyncHandler(async (req, res) => {
    // @desc get order by id
    // @route POST /api/orders/:id
    // @access Private
    res.send('add order items')
})
const updateOrderToPaid = asyncHandler(async (req, res) => {
    // @desc Update order to paid
    // @route PUT /api/orders/:id/pay
    // @access 
    res.send('update order to paid')
})
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    // @desc Update order to Delivered
    // @route PUT /api/orders/:id/deliver
    // @access 
    res.send('update order to delivered')
})
const getOrders = asyncHandler(async (req, res) => {
    // @desc Get aall orders
    // @route GET /api/orders
    // @access 
    res.send('get all orders')
})

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    getOrders,
    updateOrderToPaid,
    updateOrderToDelivered,
}