import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./src/db/connectdb.js";
import route from "./routes/route.js";
import bodyParser from "body-parser";
import client from "./cilent.js";
dotenv.config({
    path:"./.env"
})

const app = express()
const port = process.env.PORT || 8000
const DATABASE_URL = process.env.MONGO_DB



// cors policy
app.use(cors())

// Database connection
connectDB(DATABASE_URL)


// JSON
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
// Load Routes
app.use("/", route)



app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})