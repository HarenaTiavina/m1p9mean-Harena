const express = require("express");
const router = express.Router();
const restaurantController = require("../controller/restaurantController");
const TokenManager = require("../utils/tokenManager");

router.post("/", TokenManager.checkAdminToken, restaurantController.create);

router.get("/", restaurantController.findAll);
router.get("/:id", restaurantController.findById);

router.put("/:id", TokenManager.checkAdminToken, restaurantController.update);

module.exports = router;