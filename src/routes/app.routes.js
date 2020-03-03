import express from "express";
import * as appController from "../controllers/app.contoller";
import * as userContoller from "../controllers/user.controller";

const router = express.Router();

router.get("/", appController.check, appController.handleResponse);
router.get("/sample", appController.sample, appController.handleResponse);
router.get("/user", userContoller.user);

export default router;
