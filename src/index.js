const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const db = require('./config/db');
const methodOverride = require('method-override');

const app = express();
const route = require('./routes');

// >>> Handle static files
app.use(express.static(__dirname + '/public'));

// >>> Handle data post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// >>> Notify when localhost have change
// app.use(morgan('combined'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// custome helper

app.engine(
  '.hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      index: (a, b) => a + b,
    },
  })
);
app.set('view engine', '.hbs');
app.set('views', __dirname + '/resources/views');

route(app);

db.connectDB();

const port = 3000;
app.listen(port, () =>
  console.log(`Project runing at http://localhost:${port}`)
);
