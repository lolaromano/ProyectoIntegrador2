let db = require('../database/models');
const productos = require('../data/productos');
const op = db.Sequelize.Op;

let indexController = {

    index: function (req, res) {
        db.Producto.findAll({
                order: [
                    ["updated_at", "desc"]
                ],
                include: [{
                        association: "Usuario"
                    },
                    {
                        association: "Comentarios"
                    }
                ]
            })
            .then(productos => { //productos tiene todos los porductos ordenados por el ult agregado
                db.Producto.findAll({
                        include: [{
                                association: "Usuario"
                            },
                            {
                                association: "Comentarios"
                            }
                        ],
                        order: [
                            ["Comentarios", "updated_at", "desc"]
                        ], //Cuando hay 3 strings el 1 se refiere a la tabla 
                    })
                    .then(comentarios => { //comentarios tiene todos los productos ordenados por el ult comentado
                        res.render('index', {
                            productos,
                            comentarios
                        })
                    })
            })

            .catch((err) => `Error: ${err}`)
    },

}

module.exports = indexController;