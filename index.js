const express = require("express");
const app = express();
require("dotenv").config();
const { generateFile } = require("./controller/generateFile");
const { executeCpp } = require("./controller/executeCpp");
const cors = require("cors");
let corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
module.exports = {generateFile,executeCpp};