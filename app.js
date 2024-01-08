//Instalar dependencias | Install dependencies

// Express : Sirve para crear el servidor | Used to create the server
const express = require('express');
// Mongoose : Sirve para conectarse a la base de datos | Used to connect to the database
const mongoose = require('mongoose');
// Bcrypt : Sirve para encriptar la contraseña | Used to encrypt the password
const bcrypt = require('bcrypt');

// express() : Crea el servidor | Creates the server
const app = express();
// json() : Permite el envío de datos en formato JSON | Allows the sending of data in JSON format
app.use(express.json());
// static() : Permite el envío de archivos estáticos | Allows the sending of static files
app.use(express.static('public'));
// connect() : Conecta a la base de datos | Connects to the database
mongoose.connect('mongodb://localhost/login_and_register');
// connection : Guarda la conexión en una variable | Saves the connection in a variable
const db = mongoose.connection;
// saltRounds : Número de veces que se encripta la contraseña | Number of times the password is encrypted
const saltRounds = 10;

// on() : Muestra un mensaje en caso de error | Shows an error message
mongoose.connection.on('error', (err) => {

    console.error('Error de Conexión:', err);

});

// once() : Muestra un mensaje en caso de éxito | Shows a success message
db.once('open', function () {

    console.log("Conexión a la Base de Datos Exitosa");

    // Schema : Esquema de la base de datos | Database schema
    const schema = new mongoose.Schema({

        username: String,
        password: String,
        email: String,

    }); 

    //  model() : Crea una colección en la base de datos | Creates a collection in the database
    const collection = mongoose.model('users', schema);

    // Recibe los datos del formulario de registro y guarda un nuevo usuario en la base de datos | Receives the data from the registration form and saves a new user in the database
    app.post('/register', async (req, res) => {

        //req.body : Guarda los datos del formulario en una variable | Saves the form data in a variable
        const data = req.body;
        // bcrypt.hash() : Encripta la contraseña | Encrypts the password
        data.password = await bcrypt.hash(data.password, saltRounds);
        // collection() : Guarda los datos en la base de datos | Saves the data in the database
        const dato = new collection(data);

        // try{} catch(){} : Muestra un mensaje en caso de éxito o error | Shows a success or error message
        try {

            // save() : Guarda los datos en la base de datos | Saves the data in the database
            await dato.save();
            console.log("Usuario Registrado Exitosamente");
            // send() : Muestra un mensaje en caso de éxito | Shows a success message
            res.status(200).send('Usuario Registrado Exitosamente');

        } catch (err) {

            console.log('Error al Registrar el Usuario');
            res.status(500).send('Error al Registrar el Usuario');

        }
    });

    // Recibe los datos del formulario de inicio de sesión y verifica las credenciales del usuario | Receives the data from the login form and verifies the user's credentials
    app.post('/login', async (req, res) => {
        
        // req.body : Guarda los datos del formulario en una variable | Saves the form data in a variable
        const { username, password } = req.body;
        // findOne() : Busca un usuario en la base de datos | Searches for a user in the database
        const user = await collection.findOne({ username });
    
        // Verifica si el usuario existe | Checks if the user exists
        if (!user) {

            console.log('Usuario no encontrado');
            return res.status(400).json({ error: 'Usuario no encontrado' });

        }
    
        // compare() : Compara la contraseña ingresada con la contraseña en la base de datos | Compares the entered password with the password in the database
        const match = await bcrypt.compare(password, user.password);
    
        // Verifica si la contraseña es correcta | Checks if the password is correct
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
