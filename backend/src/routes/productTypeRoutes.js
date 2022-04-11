const express = require("express");
const router = express.Router();
const productTypeController = require("../controller/productTypeController");
const TokenManager = require("../utils/tokenManager");

router.post("/", TokenManager.checkAdminToken, productTypeController.create);

router.get("/", productTypeController.findAll);
router.get("/:id", productTypeController.findById);

router.put("/:id", TokenManager.checkAdminToken, productTypeController.update);
router.delete("/:id", TokenManager.checkAdminToken, productTypeController.delete);

module.exports = router;