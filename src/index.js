const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const db = require('./config/db');

const app = express();
const route = require('./routes');

// >>> Handle static files
app.use(express.static(__dirname + '/public'));

// >>> Handle data post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// >>> Notify when localhost have change
// app.use(morgan('combined'));

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/resources/views');

route(app);

db.connectDB();

const port = 3000;
app.listen(port, () =>
  console.log(`Project runing at http://localhost:${port}`)
);
