let productos = require ('../data/productos');
const users = require('../data/users');
let db = require ('../database/models');
const op = db.Sequelize.Op;
let producto = db.Producto

let productosController = {

    index: (req,res) => {
        producto.findAll()
        .then((resultados)=> res.render('products', { resultados }))
        .catch((err)=> `Error: ${err}`)
    },

    products: function (req, res) {
        let id = req.params.id;
        res.render ('products', {productos: productos.lista, idSearch: id, users: users.lista})
    },

    productAdd: (req, res) => {
        let id = req.params.id;
        res.render ('productAdd', {productos: productos.lista, idSearch: id, users: users.lista})
    },

    allProducts: (req,res) => {
        return res.render ('allProducts', {productos: productos.lista})
    },

    show: (req, res) =>{
        let primaryKey = req.params.id;
         producto.findByPk(primaryKey, { //devuelve promesa
             include: [
                 {association: 'Usuario'}, 
                 {association: 'Comentario'}
                ] //datos de la tabla de usuario y comentario
         })
            .then(resultados => res.render('products', {resultados})) //me lleva a la vista producto
            .catch (error => {
                console.log(error)
                res.send('error')
            })
        
    },

    detail: (req,res)=> {
        db.Producto.findByPk (req.params.id)
            .then (resultado => {
                res.send (resultado)
            })
            .catch (error => {
                console.log(error)
                res.send('error')
            })
    },

    add: (req,res)=> {
        return res.render('productAdd')    
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
            .then(() => res.redirect('/products'))
            .catch(err => console.log(err))
    },

    borrar: (req, res)=>{
        let primaryKey = req.params.id;
        producto.borrar({
            where: {
                id: primaryKey
            }
        })
        .then(()=> res.redirect('/products'))
        .catch(err=> console.log(err))
    },

    edit: (req, res)=>{
        let primaryKey = req.params.id;
        producto.findByPk(primaryKey)
            .then(resultados => res.render('productEdit', {resultados}))
            .catch(err => console.log(err))
    }, 

    update: (req, res)=>{   
        let primaryKey = req.params.id;//recibimos el id, porque es lo que queremos actualizar
        let productoActualizar = req.body 
        producto.update(
            productoActualizar, 
            {
                where: {
                    id: primaryKey 
                }
            }
        )
            .then(()=> res.redirect('/products'))
            .catch(err => console.log(err))
            
    },
     search: (req,res)=> {
        producto.findAll({
            where: [
                { Nombre: {[op.like]: `%${req.query.search}%`}} //buscamos los productos x el nombre
             ]
        })//buscamos todas los productos que coinciden
          .then(productos => res.render('searchResults',{productos}))
          .catch(err => console.log(err))
    } 


}



module.exports = productosController;