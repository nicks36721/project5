const express = require('express');
const app = express();
const path = require('path');

const ejs = require('ejs')


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Route for rendering the index page
app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.get('/register', function (req, res) {
  res.render('register');
});

// Start the server
app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});
