/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }]*/

const express        = require('express');
const logger         = require('morgan');
const path           = require('path');
const iTunes         = require('./models/itunes');
const favorites      = require('./models/favorites');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

const app            = express();
const PORT           = process.argv[2] || process.env.PORT || 3000;

// set up logging so that we can see what's happening
app.use(logger('dev'));

// set static assets path
app.use(express.static(path.join(__dirname, 'public')));

// set default templating engine
app.set('view engine', 'ejs');

// middleware to receive form inputs
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for method override
app.use(methodOverride('_method'));

app.get('/', favorites.getFavorites, (req, res) => {
  console.log(res.favorites);
  res.render('index', {
    results: res.results || [],
    favorites: res.favorites || []
  });
});

app.post('/search', favorites.getFavorites, iTunes.search, (req, res) => {
  res.render('index', {
    results: res.results || [],
    favorites: res.favorites || []
  });
});

app.post('/favorites', favorites.saveFavorite, (req, res) => {
  res.redirect('/');
});

app.delete('/favorites/:id', favorites.deleteFavorite, (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.warn('server up and running on port ', PORT);
});
