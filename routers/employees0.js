const express = require('express');
const routes = express.Router();
const db = require('../db');

routes.get('/', (req, res) => {
  let coll = db.get().collection('employees');

  coll.find({}).toArray((err, employees) => {
    res.render('home', { employees: employees });
  });
});

module.exports = routes;
