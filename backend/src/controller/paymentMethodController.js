const PaymentMethod = require("../model/paymentMethod");

module.exports.createRole = (req, res) => {
    try {
        const paymentMethod = new PaymentMethod({
            label: req.body.label,
            description: req.body.description,
            image: req.body.image,
        });
        paymentMethod.save().then(result => {
            res.status(201).json({
                message: "La méthode de paiement a bien été enregistré",
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
            data: await PaymentMethod.find()
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.findById = async (req, res) => {
    try {
        res.status(200).json({
            data: await PaymentMethod.findById(req.params.id)
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.update = async (req, res) => {
    try {
        const paymentMethod = await PaymentMethod.findById(req.params.id);
        if (!paymentMethod) throw new Error("Ressource introuvable");
        paymentMethod.label = req.body.label;
        paymentMethod.description = req.body.description;
        paymentMethod.image = req.body.image;
        paymentMethod.save().then(result => {
            res.status(200).json({
                message: "Les modifications ont bien été enregistrés",
                data: result
            });
        }).catch(error => {
            res.status(500).json({ error: error.message });
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}