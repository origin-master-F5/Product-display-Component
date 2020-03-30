const path = require('path');
const express = require('express');
const cors = require ('cors');
const morgan = require('morgan');
const httpProxy = require('http-proxy')
const apiProxy = httpProxy.createProxyServer();
const reviews = "http://127.0.0.1:3003"

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

app.all('/reviews/*', (req, res) => {
    console.log('working')
    apiProxy.web(req, res, { target: reviews });
})

app.listen(port, () => {
    console.log("Proxy is up and listening on port: " + port);
})

