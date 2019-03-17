const express = require("express");
const router = express.Router();
const appController = require("../controllers/app.contoller");
const userContoller = require("../controllers/user.controller");

router.get("/", appController.check, appController.handleResponse);
router.get("/sample", appController.sample, appController.handleResponse);
router.get("/user", userContoller.user);

module.exports = router;
