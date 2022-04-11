const express = require("express");
const router = express.Router();
const levelController = require("../controller/levelController");
const TokenManager = require("../utils/tokenManager");

router.post("/", TokenManager.checkAdminToken, levelController.create);

router.get("/", levelController.findAll);
router.get("/:id", levelController.findById);

router.put("/:id", TokenManager.checkAdminToken, levelController.update);
router.delete("/:id", TokenManager.checkAdminToken, levelController.delete);

module.exports = router;