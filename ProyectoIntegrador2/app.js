var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session') //requerimos session para configurarlo


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var loginRouter = require ('./routes/login');
var registerRouter = require ('./routes/register');


var db = require ('./database/models')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use (session({
 secret: "nuestro mensaje secreto", //herramienta q hacemos secreta la info de mi cliente (metodo d seguridad)
  resave: false,
  saveUninitialized: true //si no asignamos esto, va a aparecer un error porque son desactualizados
}));

//configuramos locals para pasar informacion a todas las vistas
app.use (function(req, res, next){
  if(req.session.user != undefined){ //valida que el usuario exista en sesion 
  res.locals.user = req.session.user //que guarde lo que teniamos en sesion 
  console.log(res.locals)
  }
  return next(); // sirve para que se ejecute el codigo completo
});

// lo creamos para el autologueo. cuando el usuario cierra sesion la prox ves que entre no tenga que volver a usar sus credenciales
// no jhace falta que se loguee, es automatico
app.use((req, res, next) => {
  if (req.cookies.userId != undefined && req.session.user == undefined){
    db.User.findByPk (req.cookies.userId) // que exista la cookie (que el usuario aprete 'recordame')
      .then(user=>{
        req.session.user = user //almacenamos en session el usuario encontrado
        res.locals.user = req.session.user //guardamos en locals el contenido e info del usuario para usarla en las vistas
      })
      .catch(error => console.log(error))
  }
    return next()
  })
  //si cierro el navegador y lo vuelvo a abrir, no me aparece mas mi usuario

  
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
