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
    
        try {

            const user = await collection.findOne({ username });
    
            if (user) {

                const isPasswordValid = await bcrypt.compare(password, user.password);
    
                if (isPasswordValid) {

                    res.status(200).send('Inicio de sesión exitoso');
                    console.log("Inicio de sesión exitoso");

                } else {

                    res.status(401).send('Credenciales inválidas');
                    console.log("Credenciales inválidas");
                }

            } else {
                
                res.status(404).send('Usuario no encontrado');
                console.log("Usuario no encontrado");

            }
            
        } catch (error) {
            
            console.error(error);
            res.status(500).send('Error en el servidor');
        }
    });
});


function onServerStart() {
    console.log('Servidor Corriendo en el Puerto 3000');
}

app.listen(3000, onServerStart);
