let productos = require ('../data/productos');
const users = require('../data/users');
let db = require ('../database/models');
const op = db.Sequelize.Op;

let productosController = {

    products: function (req, res) {
        let id = req.params.id;
        return res.render ('products', {productos: productos.lista, idSearch: id, users: users.lista})
    },

    productAdd: (req, res) => {
        let id = req.params.id;
        res.render ('productAdd', {productos: productos.lista, idSearch: id, users: users.lista})
    },

    allProducts: (req,res) => {
        return res.render ('allProducts', {productos: productos.lista})
    },

    store: (req, res)=>{
        
        let producto = {
            imagen: req.body.imagen,
            usuario_id: req.body.usuario_id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fecha: req.body.fecha,
        } 

        db.Producto.create(producto)
        //return res.redirect('/profile')
            .then(() => res.redirect('/productAdd'))
            .catch(err => console.log(err))
    },

    borrar: (req, res)=>{
        let primaryKey = req.params.id;
        movie.destroy({
            where: {
                id: primaryKey
            }
        })
        .then(()=> res.redirect('/movies'))
        .catch(err=> console.log(err))
    },

    destroy: (req, res)=>{
        let primaryKey = req.params.id;
        //console.log(primaryKey);
         movie.destroy({
            where: {
                id: primaryKey
            }
        })
        .then(()=> res.redirect('/movies'))
        .catch(err=> console.log(err))
    },

    edit: (req, res)=>{
        let primaryKey = req.params.id;
        movie.findByPk(primaryKey)
            .then(resultados => res.render('movieEdit', { resultados }))
            .catch(err => console.log(err))
    }, 

    update: (req, res)=>{   
        let primaryKey = req.params.id;
        let peliculaActualizar = req.body
        movie.update(
            peliculaActualizar, 
            {
                where: {
                    id: primaryKey
                }
            }
        )
            .then(()=> res.redirect('/movies'))
            .catch(err => console.log(err))
    }


}



module.exports = productosController;