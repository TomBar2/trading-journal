import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from "./db/connection.js";
import prisma from "./db/prismaClient.js";

// Loads variables from .env file into process.env
dotenv.config();
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
   res.send("Server is running");
});


// Server is now ready to get requests
app.listen(process.env.PORT, () =>{
 console.log(`Server started on port: http://localhost:${port}`);
});

