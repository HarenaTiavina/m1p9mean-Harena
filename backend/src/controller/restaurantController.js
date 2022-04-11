const Restaurant = require("../model/restaurant");
const Tools = require("../utils/tools");

module.exports.create = (req, res) => {
    try {
        const restaurant = new Restaurant({
            type: req.body.type,
            name: req.body.name,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            description: req.body.description,
        });
        restaurant.save().then(result => {
            res.status(201).json({
                message: "Le restaurant a bien été enregistré",
                data: result
            });
        }).catch(error => {
            res.status(500).json({ error: error.message });
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.update = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) throw new Error("Ressource introuvable");
        restaurant.type = req.body.type;
        restaurant.name = req.body.name;
        restaurant.adress = req.body.adress;
        restaurant.phoneNumber = req.body.phoneNumber;
        restaurant.email = req.body.email;
        restaurant.description = req.body.description;
        restaurant.save().then(result => {
            res.status(201).json({
                message: "Les modifications ont bien été enregistrés",
                data: result
            });
        }).catch(error => {
            res.status(500).json({ error: error.message });
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const restaurant = await ProductType.findById(req.params.id);
        if (!restaurant) throw new Error("Ressource introuvable");
        Restaurant.deleteOne({ _id: req.params.id }).then(result => {
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
        const sort = { [req.query.orderBy ? req.query.orderBy : "_id"]: req.query.order ? Number.parseInt(req.query.order) : 1 };
        const limit = req.query.limit ? Number.parseInt(req.query.limit) : 0;
        const skip = req.query.page ? (req.query.page - 1) * limit : 0;
        const count = await Restaurant.count(query);
        let countPage = Math.floor(count / limit);
        if (count % limit > 0) countPage++;
        res.status(200).json({
            data: await Restaurant.find(query).populate("type").sort(sort).limit(limit).skip(skip),
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
            data: await Restaurant.findById(req.params.id).populate("type")
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}