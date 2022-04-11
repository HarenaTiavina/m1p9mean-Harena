const OrderDetails = require("../model/orderDetails");
const Product = require("../model/product");

module.exports.makeOrderDetails = async (orderDetails) => {
    const products = await Product.find({ _id: { $in: orderDetails.map(item => item.product) } });
    const values = [];
    for (let item of products) {
        let quantity = orderDetails.find(x => x.product == item._id).quantity;
        values.push(new OrderDetails({
            product: item._id,
            quantity,
            unitPrice: item.sellingPrice,
            total: item.sellingPrice * quantity,
        }));
    }
    return values;
}