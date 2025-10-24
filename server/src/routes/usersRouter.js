import express from "express";
import * as usersController from "../controllers/usersController.js"

const usersRouter = express.Router();

// GET requests
usersRouter.get("/", usersController.getUsers);
usersRouter.get("/:id", usersController.getUserById);

// POST requests
usersRouter.post("/createUser", usersController.createUser);

// Delete Requests
usersRouter.delete("/", usersController.deleteUser);

export default usersRouter;