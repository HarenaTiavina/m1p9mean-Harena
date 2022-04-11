const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const TokenManager = require("../utils/tokenManager");

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.array("files"), userController.upload);

router.post("/", TokenManager.checkAdminToken, userController.create);
router.post("/login", userController.login);

router.get("/", TokenManager.checkAdminToken, userController.findAll);
router.get("/:id", TokenManager.checkAdminToken, userController.findById);

router.put("/:id", TokenManager.checkAdminToken, userController.update);

module.exports = router;