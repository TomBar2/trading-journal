import express from "express"
import * as usersController from "../controllers/usersController.js"

const usersRouter = express.Router()

// GET requests
usersRouter
    .get("/", usersController.getUsers)
    .get("/:id", usersController.getUserById)
    .get("/:id/trades", usersController.getUserTrades)

// POST requests
usersRouter.post("/createUser", usersController.createUser)

// PUT requests
// usersRouter.put("/:id", usersController.createUser);

// Delete Requests
usersRouter.delete("/:id", usersController.deleteUser)

export default usersRouter
