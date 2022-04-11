const ProductType = require("../model/productType");

module.exports.create = (req, res) => {
    try {
        const productType = new ProductType({
            label: req.body.label,
            description: req.body.description,
            image: req.body.description,
            icon: req.body.icon,
            color: req.body.color,
        });
        productType.save().then(result => {
            res.status(201).json({
                message: "Le type de produit a bien été enregistré",
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
        const productType = await ProductType.findById(req.params.id);
        if (!productType) throw new Error("Ressource introuvable");
        productType.label = req.body.label;
        productType.description = req.body.description;
        productType.image = req.body.image;
        productType.icon = req.body.icon;
        productType.color = req.body.color;
        productType.save().then(result => {
            res.status(201).json({
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

module.exports.delete = async (req, res) => {
    try {
        const productType = await ProductType.findById(req.params.id);
        if (!productType) throw new Error("Ressource introuvable");
        ProductType.deleteOne({ _id: req.params.id }).then(result => {
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
        res.status(200).json({
            data: await ProductType.find()
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.findById = async (req, res) => {
    try {
        res.status(200).json({
            data: await ProductType.findById(req.params.id)
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}