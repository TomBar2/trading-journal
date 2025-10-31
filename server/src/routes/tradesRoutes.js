import express from "express";
import * as tradesController from "../controllers/tradesController.js";

const tradesRouter = express.Router();

// GET requests
tradesRouter
    .get("/", tradesController.getTrades)
    .get("/:id", tradesController.getTradeById)

// POST requests
tradesRouter
    .post("/createTrade", tradesController.createTrade)

// PUT requests
tradesRouter
    .put("/:id", tradesController.updateTrade)

// Delete Requests
tradesRouter
    .delete("/:id", tradesController.deleteTrade)

export default tradesRouter;