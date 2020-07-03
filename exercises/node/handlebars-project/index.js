const express = require('express');

const app = express();
const port = 8080;

const hb = require('express-handlebars');
app.engine('handlebars', hb());
app.set('view engine', 'handlebars');

// data
const devils = require('./data.json');



app.use(express.static('./projects'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'My Portfolio',
        cohort: 'Caper',
        devils
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
    });
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})