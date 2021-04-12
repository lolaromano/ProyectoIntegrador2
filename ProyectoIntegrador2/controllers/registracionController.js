let registracion = require ('../data/productos');

let registracionController = {

    index: (req, res) =>{
        res.render('register',{"register": registracion});
    },
}

module.exports = registarcionController;