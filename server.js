const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require('body-parser')

const memories = require("./routes/memories");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use("/api/memories", memories);

const port = process.env.PORT || 500;

app.listen(port, console.log(`server logged on port: ${port}`));
