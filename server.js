const express = require('express');
const app = express();
const port = 3000;
const hbs = require('hbs');



// middleware hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// load static files
app.use(express.static(__dirname +'/public'));


// routing
app.get('/', (req, res) => res.render('home.hbs'));

app.get('/about', (req, res) => res.render('about.hbs'))

app.get('/contact', (req, res) => res.render('contact.hbs'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))






