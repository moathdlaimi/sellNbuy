const express = require('express');
const data_pool = require('./database');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));


app.get('/', async(req,res) => {
    res.json('Welcome to Sell N\' Buy ')
});


const mainController = require('./controllers/main.js');
app.use('/main', mainController);

app.listen(port, () => {
    console.log('Listening to Port', port)
});