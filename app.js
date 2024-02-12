require('dotenv').config();
const express = require('express');
const app = express();
const Server = require('./models/server');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const svr = new Server();
svr.listen();
