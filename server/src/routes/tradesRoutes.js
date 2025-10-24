import express from "express";
import * as tradesController from "../controllers/tradesController.js";

const tradesRouter = express.Router();

// GET requests
tradesRouter.get("/", tradesController.getTrades);
tradesRouter.get("/:id", tradesController.getTradeById);

// POST requests
tradesRouter.post("/createTrade", tradesController.createTrade);

export default tradesRouter;