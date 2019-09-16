//console.log('Server running');
const express = require('express'); //gestor de servidor
const app = express(); // aplicación
const path = require('path'); //gestor de rutas

//settings
app.set('port',3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares (funciones ejecutadas antes del servidor)

//routes
app.use(require('./routes/index'));


//static files
app.use(express.static(path.join(__dirname,'public')));

//listening the server
app.listen(app.get('port'), () =>{
    console.log('server in port', app.get('port'));
});