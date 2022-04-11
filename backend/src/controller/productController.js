const Product = require("../model/product");
const jwt = require("jsonwebtoken");
const Tools = require("../utils/tools");
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports.create = (req, res) => {
    try {
        const data = jwt.verify(req.headers.authorization.split(" ")[1], PRIVATE_KEY);
        const product = new Product({
            type: req.body.type,
            restaurant: data.data.restaurant._id,
            name: req.body.name,
            description: req.body.description,
            costPrice: req.body.costPrice,
            sellingPrice: req.body.sellingPrice,
            images: req.body.images,
        });
        product.save().then(result => {
            res.status(201).json({
                message: "Le produit a bien été enregistré",
                data: result
            });
        }).catch(error => {
            res.status(500).json({ error: error.message });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.update = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) throw new Error("Ressource introuvable");
        const data = jwt.verify(req.headers.authorization.split(" ")[1], PRIVATE_KEY);
        if (data.data.restaurant._id != product.restaurant) throw new Error("Vous n'avez pas accès à cette ressource");
        product.type = req.body.type;
        product.name = req.body.name;
        product.description = req.body.description;
        product.costPrice = req.body.costPrice;
        product.sellingPrice = req.body.sellingPrice;
        product.images = req.body.images;
        product.save().then(result => {
            res.status(200).json({
                message: "Les modifications ont bien été enregistrés",
                data: result
            });
        }).catch(error => {
            res.status(500).json({ error: error.message });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.updateStatus = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) throw new Error("Ressource introuvable");
        const data = jwt.verify(req.headers.authorization.split(" ")[1], PRIVATE_KEY);
        if (data.data.restaurant._id != product.restaurant) throw new Error("Vous n'avez pas accès à cette ressource");
        product.status = !product.status;
        product.save().then(result => {
            res.status(200).json({
                message: "Status du produit mis à jour",
                data: result
            });
        }).catch(error => {
            res.status(500).json({ error: error.message });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const data = jwt.verify(req.headers.authorization.split(" ")[1], PRIVATE_KEY);
        const product = await Product.findById(req.params.id);
        if (!product) throw new Error("Ressource introuvable");
        if (data.data.restaurant._id != product.restaurant) throw new Error("Vous n'avez pas accès à cette ressource");
        Product.deleteOne({ _id: req.params.id }).then(result => {
            res.status(201).json({
                message: "Les données ont bien été effacé",
                data: result
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.findAll = async (req, res) => {
    try {
        const query = Tools.buildQuery(req.query);
        console.log(query);
        const sort = { [req.query.orderBy ? req.query.orderBy : "_id"]: req.query.order ? Number.parseInt(req.query.order) : 1 };
        const limit = req.query.limit ? Number.parseInt(req.query.limit) : 0;
        const skip = req.query.page ? (req.query.page - 1) * limit : 0;
        const count = await Product.count(query);
        let countPage = Math.floor(count / limit);
        if (count % limit > 0) countPage++;
        res.status(200).json({
            data: await Product.find(query).populate("restaurant").populate("type").sort(sort).limit(limit).skip(skip),
            page: req.query.page ? req.query.page + 1 : 1,
            limit,
            count,
            countPage
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports.findById = async (req, res) => {
    try {
        res.status(200).json({
            data: await Product.findById(req.params.id).populate("type").populate("restaurant")
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}