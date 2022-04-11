const Client = require("../model/client");
const Tools = require("../utils/tools");
const TokenManager = require("../utils/tokenManager");
const jwt = require("jsonwebtoken");
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports.login = async (req, res) => {
    try {
        const client = await Client.findOne({ email: req.body.email });
        if (!client) throw new Error("Veuillez vérifier votre adresse email");
        if (!await Tools.comparePassword(req.body.password, client.password)) throw new Error("Veuillez vérifier votre mot de passe");
        delete client.password;
        res.status(200).json({
            token: TokenManager.generateToken(client),
            client
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports.create = async (req, res) => {
    try {
        const client = new Client({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            password: await Tools.hash(req.body.password)
        });
        client.save().then(result => {
            res.status(201).json({
                message: "Votre compte a bien été créé",
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
            data: await Client.find()
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.findById = async (req, res) => {
    try {
        res.status(200).json({
            data: await Client.findById(req.params.id)
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.update = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) throw new Error("Ressource introuvable");
        const data = jwt.verify(req.headers.authorization.split(" ")[1], PRIVATE_KEY);
        if (data.data._id != client._id) throw new Error("Vous n'avez pas accès à cette ressource");
        client.firstName = req.body.firstName;
        client.lastName = req.body.lastName;
        client.birthday = req.body.birthday;
        client.address = req.body.address;
        client.phoneNumber = req.body.phoneNumber;
        client.email = req.body.email;
        client.save().then(result => {
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