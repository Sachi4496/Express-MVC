const express = require('express');

const connect= require("./configs/db")

const port = 2456;
const app = express();
app.use(express.json());