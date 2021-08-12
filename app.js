// modules
const express = require('express')
const app = express()
const path = require('path');
const port = 3000

// configs
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));


app.get('/', (req, res) => res.render('index'));

app.listen(port, () => console.log(`Running on port ${port}`))