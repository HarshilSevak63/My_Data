const express = require('express');
const app = express();

app.set('viewengine', 'pug');
app.get('/', (req, res) => {
    res.render(__dirname + '/pugDemo.pug', { msg: 'Some message', amount: 5000 });
});

app.listen(5300, () => console.log('Listening at http://localhost:5300'));