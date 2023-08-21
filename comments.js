// Create web server application
const express = require('express');
const bodyParser = require('body-parser');

// Create application object
const app = express();

// Set port
const port = 3000;

// Configure application
app.use(bodyParser.urlencoded({extended: true}));

// Set view directory
app.set('views', __dirname + '/views');

// Set view engine
app.set('view engine', 'ejs');

// Set public directory
app.use(express.static(__dirname + '/public'));

// Set routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/comments', (req, res) => {
    res.render('comments');
});

app.post('/comments', (req, res) => {
    console.log(req.body);
    res.redirect('/comments');
});

// Start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});