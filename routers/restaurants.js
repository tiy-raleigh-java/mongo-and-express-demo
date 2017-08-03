const express = require('express');
const routes = express.Router();
const db = require('../db');

routes.get('/', (req, res) => {
  let coll = db.get().collection('restaurants');

  coll.find({}).limit(25).toArray((err, restaurants) => {
    res.render('restaurants', { restaurants: restaurants });
  });
});

routes.get('/:search', (req, res) => {
  let coll = db.get().collection('restaurants');

  coll.find({ name: new RegExp(req.params.search, 'i') }).limit(25).toArray((err, restaurants) => {
    res.render('restaurants', { restaurants: restaurants });
  });
});

module.exports = routes;
