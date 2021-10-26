const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://useraircnc:user@clusteraircnc.wuz3x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); // Indica o uso de JSON para as requisições
app.use(routes);

app.listen(3333);

// GET, POST, PUT, DELETE
// req.query = acessa req params (para filtros)
// req.body = acessa corpo da requisição (para editar, criar)
// req.params = acessa route params (para editar, deletar)


