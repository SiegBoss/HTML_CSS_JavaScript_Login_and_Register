const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const app = express();
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/login_and_register');
const db = mongoose.connection;

mongoose.connection.on('error', (err) => {

    console.error('Error de Conexión:', err);

});

db.once('open', function () {

    console.log("Conexión a la Base de Datos Exitosa");

    const schema = new mongoose.Schema({

        username: String,
        password: String,
        email: String,

    }); 

    const collection = mongoose.model('users', schema);

    app.post('/addData', async (req, res) => {

        const data = req.body;
        const dato = new collection(data);

        try {

            await dato.save();
            console.log("Usuario Registrado Exitosamente");
            res.status(200).send('Usuario Registrado Exitosamente');


        } catch (err) {

            console.log(err);
            res.status(500).send('Error al Registrar el Usuario');
        }
    });

});


function onServerStart() {
    console.log('Servidor Corriendo en el Puerto 3000');
}

app.listen(3000, onServerStart);
