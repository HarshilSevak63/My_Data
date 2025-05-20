// We can not write set/send after write.//
// Local Middelware Use-> Autheticate User, Data validation

const express = require('express');
const app = express();
function mid(req, res, next) {
    console.log('Global Middelware is called.');
    res.set('Content-Type', 'text/html');
    res.write('Global Middelware function.\n');
    next();
}

function midl(req, res, next) {
    console.log('Loacal Middelware is called.');
    res.write('Local Middelware function.');
    next();
    // res.write('After next');
    // res.end();
}

app.use(mid);

app.get('/', (req, res) => {
    res.write("<h2>In Home Page</h2>");
    res.end();
});

app.get('/about', midl, (req, res) => {
    res.write("<h2>In About Page</h2>");
    res.end();
});

app.get('/product', (req, res, next) => {
    res.write("<h2>First Line</h2>");
    next();
});

app.get('/product', (req, res, next) => {
    res.write("<p>Second Line</p>");
    next();
});

app.get('/product', (req, res) => {
    res.write("<p>Last Line</p>");
    res.send();
});

app.listen(3000, () => console.log('Listening at http://localhost:3000'));
