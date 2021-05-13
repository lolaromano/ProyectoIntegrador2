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
            type: dataTypes.VARCHAR,
        },
        Nombre: {
            type: dataTypes.VARCHAR,
        },
        descripcion: {
            type: dataTypes.VARCHAR,
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