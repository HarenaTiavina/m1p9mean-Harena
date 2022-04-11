const express = require("express");
const router = express.Router();
const roleController = require("../controller/roleController");
const TokenManager = require("../utils/tokenManager");

router.post("/", TokenManager.checkAdminToken, roleController.createRole);

router.get("/", roleController.findAll);
router.get("/:id", roleController.findById);

router.put("/:id", TokenManager.checkAdminToken, roleController.update);

module.exports = router;