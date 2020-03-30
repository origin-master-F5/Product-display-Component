const Router = require('express').Router();
const axios = require('axios');

// PROXY

// Product Display

Router.route('/')
  .get((req, res) => {
      axios.get("http://localhost:3002/product")
      .then(response => {
          res.status(200).json(response.data);
      })
      .catch(err => res.send(err))
     });

Router.route('/sku/:sku')
  .get((req, res) => {
    axios.get(`http://localhost:3002/product/sku/${req.params.sku}`)
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch(err => res.send(err))
    });
   
Router.route('/name/:name')
  .get((req, res) => {
    axios.get(`http://localhost:3002/product/name/${req.params.name}`)
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch(err => res.send(err))
    });



module.exports = Router;
