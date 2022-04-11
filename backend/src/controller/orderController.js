const Order = require("../model/order");
const jwt = require("jsonwebtoken");
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ProductService = require("../service/productService");
const OrderService = require("../service/orderService");

module.exports.create = async (req, res) => {
    try {
        if (req.body.orderDetails.length == 0) throw new Error("Veuillez sélectionner des produits");
        const unavailableProducts = await ProductService.checkProductsStatus(req.body.orderDetails.map(item => item.product));
        if (unavailableProducts.length > 0) {
            res.status(500).json({
                message: "Certains des produits sélectionnés ne sont pas disponible pour le moment",
                data: unavailableProducts
            });
            return;
        }
        const data = jwt.verify(req.headers.authorization.split(" ")[1], PRIVATE_KEY);
        const order = new Order({
            deliveryDate: req.body.deliveryDate,
            client: data.data._id,
            address: req.body.address,
            lng: req.body.lng,
            lt: req.body.lt,
            comment: req.body.comment,
        });
        order.save().then(async result => {
            let orderDetails = await OrderService.makeOrderDetails(req.body.orderDetails);
            for (let item of orderDetails) {
                item.order = result._id;
                await item.save();
            }
            res.status(201).json({
                message: "Votre commande a bien été enregisté",
                data: result
            });
        }).catch(error => {
            res.status(500).json({ error: error.message });
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.find = (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}