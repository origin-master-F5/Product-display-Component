const path = require('path');
const express = require('express');
const cors = require ('cors');
const morgan = require('morgan');
const axios = require('axios');
const Router = require('./controller');
const port = 3000;

let app = express();
//PROXY
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/product', Router);

app.listen(port, () => {
    console.log("Proxy is up and listening on port: " + port);
})