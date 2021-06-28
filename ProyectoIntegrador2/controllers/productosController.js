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
                            association: "Usuarios",
                        }],

                    }
                ],
                order: [
                    ["Comentarios", "created_at", "desc"]
                ] //datos de la tabla de usuario y comentario
            })

            .then(producto => res.render('product', {
                producto
            })) //me lleva a la vista producto
            .catch(err => console.log(err))
    },

    add: (req, res) => {
        let producto = {
            Nombre: req.body.Nombre,
            descripcion: req.body.descripcion,
            Fecha: req.body.Fecha,
            imagen: `/images/jordan/${req.file.filename}`,
            created_at: new Date(),
            updated_at: new Date(),
            usuario_id: req.session.user.id
        }

        db.Producto.create(producto) //crea el producto y lo redirecciona a productos

            .then(() => res.redirect('/'))
            .catch(err => console.log(err))
    },

    borrar: (req, res) => {
        let primaryKey = req.params.id;
        db.Comentario.destroy({
                where: {
                    producto_id: primaryKey
                }
            })
            .then(() =>
                producto.destroy({
                    where: {
                        id: primaryKey
                    }
                })

                .then(() => res.redirect('/'))
            )

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

        let producto = {
            id: primaryKey,
            Nombre: req.body.Nombre,
            descripcion: req.body.descripcion,
            Fecha: req.body.Fecha,
            imagen: `/images/jordan/${req.file.filename}`,
            usuario_id: req.session.user.id,
        }
        db.Producto.update(
                producto, {
                    where: {
                        id: primaryKey
                    }
                })

            .then(() => res.redirect(`/products/detail/${primaryKey}`))
            .catch(err => console.log(err))

    },

    search: (req, res) => {
        producto.findAll({
                include: [{
                        association: "Usuario"
                    },
                    {
                        association: "Comentarios"
                    }
                ],
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
    },

    comentario: (req, res) => {
        if (req.session.user == undefined) {
            res.redirect('/login')

        } else {
            let comentario = {
                texto: req.body.texto,
                usuario_id: req.session.user.id, //fk
                producto_id: req.params.id, //fk
                created_at: new Date(),
                updated_at: new Date(), //forma de decirle que es la fecha actual
            }
            db.Comentario.create(comentario)

                .then(() => res.redirect(`/products/detail/${req.params.id}`))
                .catch(err => console.log(err))
        }


    }
}

//body en el post (oculto)
//params en get (url)

//render: recorra los datos de la vista
//redirect: redireccione a la ruta

module.exports = productosController;