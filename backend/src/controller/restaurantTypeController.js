const RestaurantType = require("../model/restaurantType");

module.exports.create = (req, res) => {
    try {
        const restaurantType = new RestaurantType({
            label: req.body.label,
            description: req.body.description
        });
        restaurantType.save().then(result => {
            res.status(201).json({
                message: "Le type de restaurant a bien été enregistré",
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
        const restaurantType = await RestaurantType.findById(req.params.id);
        if (!restaurantType) throw new Error("Ressource introuvable");
        restaurantType.label = req.body.label;
        restaurantType.description = req.body.description;
        restaurantType.save().then(result => {
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
        const restaurantType = await ProductType.findById(req.params.id);
        if (!restaurantType) throw new Error("Ressource introuvable");
        RestaurantType.deleteOne({ _id: req.params.id }).then(result => {
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
            data: await RestaurantType.find()
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.findById = async (req, res) => {
    try {
        res.status(200).json({
            data: await RestaurantType.findById(req.params.id)
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}