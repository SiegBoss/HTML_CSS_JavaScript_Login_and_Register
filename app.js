const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const app = express();
app.use(express.json());
app.use(express.static('public'));


mongoose.connect('mongodb://localhost/login_and_register');
const db = mongoose.connection;


const saltRounds = 10;


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

    app.post('/register', async (req, res) => {

        const data = req.body;
        data.password = await bcrypt.hash(data.password, saltRounds);
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

    app.post('/login', async (req, res) => {

        const { username, password } = req.body;
        const user = await collection.findOne({ username });
    
        if (!user) {

            console.log('Usuario no encontrado');
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }
    
        const match = await bcrypt.compare(password, user.password);
    
        if (!match) {

            console.log('Contraseña incorrecta');
            return res.status(400).json({ error: 'Contraseña incorrecta' });

        }
        
        console.log('Inicio de sesión exitoso');
        res.status(200).send('Inicio de sesión exitoso');
    });

});


function onServerStart() {
    console.log('Servidor Corriendo en el Puerto 3000');
}

app.listen(3000, onServerStart);
