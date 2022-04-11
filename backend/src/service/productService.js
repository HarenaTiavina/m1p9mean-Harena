const Product = require("../model/product");

module.exports.checkProductsStatus = (products) => {
    return Product.find({ _id: { $in: products }, status: false }).populate("type").populate("restaurant").select("_id, type, restaurant, name");
}