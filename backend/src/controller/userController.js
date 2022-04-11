const User = require("../model/user");
const Role = require("../model/role");
const Tools = require("../utils/tools");
const TokenManager = require("../utils/tokenManager");
const { uploadToFirebase, convertToBASE64 } = require("../service/uploadService");

module.exports.create = async (req, res) => {
    try {
        const role = await Role.findById(req.body.role);
        if (!req.body.restaurant && !["Administrateur", "Livreur"].includes(role.label)) throw new Error("Veuillez spécifier le restaurant rattaché à cet utilisateur");
        let user = new User({
            role: req.body.role,
            restaurant: req.body.restaurant === "" ? null : req.body.restaurant,
            name: req.body.name,
            email: req.body.email,
            password: await Tools.hash(req.body.password ?? "123456")
        });
        user.save().then(result => {
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

module.exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).populate("role").populate("restaurant");
        if (!user) throw new Error("Veuillez vérifier votre adresse email");
        if (!await Tools.comparePassword(req.body.password, user.password)) throw new Error("Veuillez vérifier votre mot de passe");
        delete user.password;
        res.status(200).json({
            token: TokenManager.generateToken(user),
            user
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports.findById = async (req, res) => {
    try {
        res.status(200).json({
            data: await User.findById(req.params.id).populate("role").populate("restaurant")
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.findAll = async (req, res) => {
    try {
        const query = Tools.buildQuery(req.query);
        const sort = { [req.query.orderBy ? req.query.orderBy : "_id"]: req.query.order ? Number.parseInt(req.query.order) : 1 };
        const limit = req.query.limit ? Number.parseInt(req.query.limit) : 0;
        const skip = req.query.page ? (req.query.page - 1) * limit : 0;
        const count = await User.count(query);
        let countPage = Math.floor(count / limit);
        if (count % limit > 0) countPage++;
        res.status(200).json({
            data: await User.find(query).populate("role").populate("restaurant").sort(sort).limit(limit).skip(skip),
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

module.exports.update = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) throw new Error("Ressource introuvable");
        user.name = req.body.name;
        user.email = req.body.email;
        user.role = req.body.role;
        user.restaurant = req.body.restaurant;
        user.save().then(result => {
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

module.exports.upload = async (req, res) => {
    res.send(convertToBASE64(req.files));
}