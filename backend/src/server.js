const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Salatiel:Salatiel@aircnc.zwdl5.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})

//GET, PUT, POST, DELETE
//req.query = acessar query params (para filtros )
//req.params = acessar route params (edição e delete)
//req.body = acessar corpo da requisição (para criazção e edição)

app.use(cors());
//comando necessário para ter a leitura do body, como se fosse um plugin
app.use(express.json());
app.use(routes);


app.listen(3333);
