import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import usersRouter from "./routes/usersRouter.js";
import tradesRouter from "./routes/tradesRoutes.js";
import statsRouter from "./routes/statsRoutes.js";

dotenv.config(); // Load variables from .env file into process.env
const port = process.env.PORT;

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Whenever the server receives a request with JSON body, parse it into a JavaScript object - req.body

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Any request whose path starts with /api/x should be handled by the routes defined in xRouter
app.use("/api/users", usersRouter);
app.use("/api/trades", tradesRouter);
app.use("/api/stats", statsRouter);

// Server is now ready to get requests
app.listen(port, () => {
  console.log(`Server started on port: http://localhost:${port}`);
});
