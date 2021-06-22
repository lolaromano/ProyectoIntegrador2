let db = require ('../database/models');
const productos = require('../data/productos');
const op = db.Sequelize.Op; 

let indexController = {

    index : function(req, res) {
        db.Producto.findAll()
        .then (productos => res.render ('index', { productos})) 
        .catch((err)=> `Error: ${err}`)
    },
    
}

module.exports = indexController;