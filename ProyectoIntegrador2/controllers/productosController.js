let productos = require ('../data/productos');

let productosController = {
    productos: function (req, res) {
        res.render ('productos', {productos:productos})
    },
    
    productAdd: (req, res) => {
        res.render ('productAdd')
    },

    nombre: (req,res) =>{
        let nombre = req.params.nombre;
        let respuesta = [];
        for (let i = 0; i < productos.lista.length; i+=1) {
            if (productos[i].nombre == nombre) {
                respuesta.push(productos[i]);
            }
        };

        res.render('nombre', { productos:respuesta})
}, 

    modelo: (req,res) =>{
        let modelo = req.params.modelo;
        let respuesta = [];
        for (let i = 0; i < productos.lista.length; i+=1) {
            if (productos[i].modelo == modelo) {
                respuesta.push(productos[i]);
            }
        };
        res.render('modelo', { productos:respuesta})
    }, 

}

module.exports = productosController 