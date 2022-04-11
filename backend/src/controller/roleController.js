const Role = require("../model/role");

module.exports.createRole = (req, res) => {
    try {
        const role = new Role({
            label: req.body.label,
            description: req.body.description
        });
        role.save().then(result => {
            res.status(201).json({
                message: "L'utilisateur a bien été enregistré",
                data: result
            });
        }).catch(error => {
            res.status(500).json({ error: error.message });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.findAll = async (req, res) => {
    try {
        res.status(200).json({
            data: await Role.find()
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.findById = async (req, res) => {
    try {
        res.status(200).json({
            data: await Role.findById(req.params.id)
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.update = async (req, res) => {
    try {
        const role = await Role.findById(req.params.id);
        if (!role) throw new Error("Ressource introuvable");
        role.label = req.body.label;
        role.description = req.body.description;
        role.save().then(result => {
            res.status(200).json({
                message: "Les modifications ont bien été enregistrés",
                data: result
            });
        }).catch(error => {
            res.status(500).json({ error: error.message });
        })
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}