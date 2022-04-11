const Level = require("../model/level");

module.exports.create = (req, res) => {
    try {
        const level = new Level({
            min: req.body.min,
            max: req.body.max,
            value: req.body.value
        });
        level.save().then(result => {
            res.status(201).json({
                message: "Le palier de prix a bien été enregistré",
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
        const level = await Level.findById(req.params.id);
        if (!level) throw new Error("Ressource introuvable");
        level.min = req.body.min;
        level.max = req.body.max;
        level.value = req.body.value;
        level.save().then(result => {
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
        const level = await Level.findById(req.params.id);
        if (!level) throw new Error("Ressource introuvable");
        level.deleteOne({ _id: req.params.id }).then(result => {
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
            data: await Level.find()
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.findById = async (req, res) => {
    try {
        res.status(200).json({
            data: await Level.findById(req.params.id)
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}