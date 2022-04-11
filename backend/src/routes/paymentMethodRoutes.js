const express = require("express");
const router = express.Router();
const paymentMethodController = require("../controller/paymentMethodController");
const TokenManager = require("../utils/tokenManager");

router.post("/", TokenManager.checkAdminToken, paymentMethodController.createRole);

router.get("/", paymentMethodController.findAll);
router.get("/:id", paymentMethodController.findById);

router.put("/:id", TokenManager.checkAdminToken, paymentMethodController.update);

module.exports = router;