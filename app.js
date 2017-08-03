const express = require('express');
const db = require('./db');
const exphbs = require('express-handlebars');
const employeesRoutes = require('./routers/employees');
const restaurantsRoutes = require('./routers/restaurants');

let app = express();

// Connection URL
let url = 'mongodb://localhost:27017/newdb';

// tell express to use handlebars
app.engine('handlebars', exphbs());
app.set('views', './views');
app.set('view engine', 'handlebars');

// add the routes
app.use('/', employeesRoutes);
app.use('/restaurants', restaurantsRoutes);

// start the app
db.connect(url, (err, connection) => {
  if (!err) console.log('connected to mongo');

  app.listen(3000, () => console.log('up and running'));
});
