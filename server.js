const express = require('express')
const api = require('./api');

const app = express()
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.use('/api', api);