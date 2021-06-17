let data = require ('../data/productos');
let db = require ('../database/models');
const op = db.Sequelize.Op; 

let indexController = {

    index : function(req, res) {
        return res.render ('index', { productos: data})
    },

/*     search : function(req, res) {
        res.render ('searchResults')
    } */

}

module.exports = indexController;