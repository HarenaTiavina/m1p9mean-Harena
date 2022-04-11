const express = require("express");
const router = express.Router();
const restaurantTypeController = require("../controller/restaurantTypeController");
const TokenManager = require("../utils/tokenManager");

router.post("/", TokenManager.checkAdminToken, restaurantTypeController.create);

router.get("/", restaurantTypeController.findAll);
router.get("/:id", restaurantTypeController.findById);

router.put("/:id", TokenManager.checkAdminToken, restaurantTypeController.update);
router.delete("/:id", TokenManager.checkAdminToken, restaurantTypeController.delete);

module.exports = router;