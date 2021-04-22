let data = require ('../data/productos');

let indexController = {

    index: (req, res) => {
        res.render ('index', {productos:data})
    },

    search : (req, res) => {
        res.render ('searchResults')
    }

};

module.exports = indexController;