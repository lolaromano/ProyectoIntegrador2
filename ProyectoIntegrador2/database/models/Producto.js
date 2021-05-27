module.exports = (sequelize, dataTypes)=>{

    let alias = 'Producto'; 
    
    let cols = { 
        id: {
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
            type: dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.STRING,
        },
        Nombre: {
            type: dataTypes.STRING,
        },
        descripcion: {
            type: dataTypes.STRING,
        },
        Fecha: {
            type: dataTypes.DATE,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            unsigned: true,
        },
    }; 
    
    let config = {
        table: "Productos", 
        timestamps: false, 
        underscored: true 
    }
   
   
    const Producto = sequelize.define (alias, cols, config)
    return Producto;

}