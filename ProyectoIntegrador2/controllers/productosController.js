let db = require('../database/models');
const op = db.Sequelize.Op;
let producto = db.Producto

let productosController = {

    index: (req, res) => {
        producto.findAll()

            .then((productos) => res.render('product', {
                productos
            }))
            .catch((err) => `Error: ${err}`)
    },

    productAdd: (req, res) => {
        producto.findAll()

            .then((productos) => res.render('productAdd', {
                productos
            }))
            .catch((err) => `Error: ${err}`)
    },

    allProducts: (req, res) => {
        producto.findAll()

            .then((productos) => res.render('allProducts', {
                productos
            }))
            .catch((err) => `Error: ${err}`)
    },

    show: (req, res) => {
        let primaryKey = req.params.id;
        producto.findByPk(primaryKey, { //devuelve promesa con resultados
                include: [{
                        association: 'Usuario'
                    },
                    {
                        association: 'Comentarios',
                        include: [{
                            association: "Usuarios"
                        }]
                    }
                ] //datos de la tabla de usuario y comentario
            })

            .then(producto => res.render('product', {
                producto
            })) //me lleva a la vista producto
            .catch(err => console.log(err))

    },

    detail: (req, res) => {
        db.Producto.findByPk(req.params.id)

            .then(resultado => {
                res.send(resultado)
            })
            .catch(err => console.log(err))
    },

    add: (req, res) => {
        db.Producto.findAll()

            .then(function (Productos) {
                return res.render('productAdd', {
                    Productos
                })
            })
            .catch(err => console.log(err))

    },

    store: (req, res) => {

        let producto = {
            imagen: req.body.imagen,
            usuario_id: req.body.usuario_id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fecha: req.body.fecha,
        }

        db.Producto.create(producto) //crea el producto y lo redirecciona a productos

            .then(() => res.redirect('/product'))
            .catch(err => console.log(err))
    },

    borrar: (req, res) => {
        let primaryKey = req.params.id;
        producto.borrar({
                where: {
                    id: primaryKey
                }
            })

            .then(() => res.redirect('/product'))
            .catch(err => console.log(err))
    },

    edit: (req, res) => {
        let primaryKey = req.params.id;
        producto.findByPk(primaryKey)

            .then(resultados => res.render('productEdit', {
                resultados
            }))
            .catch(err => console.log(err))
    },

    update: (req, res) => {
        let primaryKey = req.params.id; //recibimos el id, porque es lo que queremos actualizar
        let productoActualizar = req.body
        producto.update(
                productoActualizar, {
                    where: {
                        id: primaryKey
                    }
                })

            .then(() => res.redirect('/product'))
            .catch(err => console.log(err))

    },

    search: (req, res) => {

        producto.findAll({
                where: {
                    [op.or]: [{
                            Nombre: {
                                [op.like]: `%${req.query.search}%`
                            }
                        }, //buscamos los productos x el nombre
                        {
                            descripcion: {
                                [op.like]: `%${req.query.search}%`
                            }
                        }
                    ]
                }
            })
            //buscamos todas los productos que coinciden

            .then(productos => res.render('searchResults', {
                productos
            }))
            .catch(err => console.log(err))
    }


}



module.exports = productosController;