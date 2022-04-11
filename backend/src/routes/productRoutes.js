const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const TokenManager = require("../utils/tokenManager");

router.post("/", TokenManager.checkUserToken, productController.create);

router.get("/", productController.findAll);
router.get("/:id", productController.findById);

router.put("/:id", TokenManager.checkUserToken, productController.update);
router.put("/status/:id", TokenManager.checkUserToken, productController.updateStatus);

router.delete("/:id", TokenManager.checkUserToken, productController.delete);

module.exports = router;