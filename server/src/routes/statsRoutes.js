import express from "express";
import * as statsController from "../controllers/statsController.js";

const statsRouter = express.Router();

// GET requests
statsRouter.get("/:id", statsController.getAvgReturnById);

export default statsRouter;
