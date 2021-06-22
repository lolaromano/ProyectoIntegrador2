let data = require ('../data/productos');
let db = require ('../database/models');
const op = db.Sequelize.Op; 

let indexController = {

    index : function(req, res) {
        return res.render ('index', { productos: data})
    },
    
}

module.exports = indexController;