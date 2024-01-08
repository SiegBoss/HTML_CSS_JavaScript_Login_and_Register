# Sistema de Inicio de Sesión y Registro con Node.js, Express y MongoDB

Este proyecto es un sistema de inicio de sesión y registro que permite a los usuarios realizar algunas operaciones (Registro e Inicio de Sesión) a través de una interfaz web.
La parte del frontend está desarrollada con HTML, CSS y JavaScript, mientras que la lógica del backend se ha implementado utilizando Node.js, Express y Mongoose para interactuar con una base de datos MongoDB. Además, se encripta la contraseña para una mayor seguridad y se comprueba si el usuario existe y si la contraseña es correcta.


## Estructura del Proyecto

El proyecto está organizado en los siguientes archivos:

- `app.js` : Archivo principal del servidor Node.js que utiliza Express para manejar las solicitudes HTTP y las operaciones de registro e inicio de sesión en la base de datos.
- `index.html` : Archivo HTML que contiene la interfaz de usuario para interactuar con el sistema.
- `index.css` : Archivo CSS que define los estilos y el diseño de la interfaz de usuario.
- `index.js` : Archivo JavaScript que proporciona la interactividad y la lógica del frontend.


## Tecnologías Utilizadas

### Frontend:

- HTML: Para la estructura y los elementos de la página web.
- CSS: Para dar estilo y diseño a la interfaz de usuario.
- JavaScript: Para la lógica y la interactividad de la página web.

### Backend:

- Node.js: Entorno de ejecución para JavaScript en el servidor.
- Express: Framework de Node.js para construir aplicaciones web.
- Mongoose: Base de datos NoSQL y ODM (Object Data Modeling) para almacenar y gestionar los datos de los usuarios.
- bcrypt : Para encriptación de las contraseñas 


## Funcionalidades

El sistema de inicio de sesión y registro permite realizar las siguientes operaciones:

- Registro de usuario: Los usuarios pueden agregar su nombre, edad, correo, número y género a la base de datos.
- Inicio de sesión: Comprueba si el usuario existe y si la contraseña es correcta.
- Redirección: Si la contraseña es correcta, redirige al usuario a otra página.


## Licencia
Este proyecto sigue la licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles sobre los términos de uso y distribución.


------------------------------


# Login and Registration System with Node.js, Express, and MongoDB

This project is a login and registration system that allows users to perform some operations (Registration and Login) through a web interface. The frontend part is developed with HTML, CSS, and JavaScript, while the backend logic has been implemented using Node.js, Express, and Mongoose to interact with a MongoDB database. In addition, the password is encrypted for greater security, and it checks if the user exists and if the password is correct.


## Project Structure

The project is organized into the following files:

- `app.js` : Main Node.js server file that uses Express to handle HTTP requests and registration and login operations in the database.
- `index.html` : HTML file that contains the user interface to interact with the system.
- `index.css` : CSS file that defines the styles and design of the user interface.
- `index.js` : JavaScript file that provides interactivity and frontend logic.


## Technologies Used

### Frontend:
- HTML: For the structure and elements of the web page.
- CSS: To style and design the user interface.
- JavaScript: For the logic and interactivity of the web page.

### Backend:
- Node.js: Execution environment for JavaScript on the server.
- Express: Node.js framework for building web applications.
- Mongoose: NoSQL database and ODM (Object Data Modeling) to store and manage user data.
- bcrypt : For password encryption


## Functionalities

The login and registration system allows the following operations:

- User registration: Users can add their name, age, email, number, and gender to the database.
- Login: Checks if the user exists and if the password is correct.
- Redirection: If the password is correct, it redirects the user to another page.

## License

This project follows the MIT license. Check the `LICENSE` file for more details about the terms of use and distribution.