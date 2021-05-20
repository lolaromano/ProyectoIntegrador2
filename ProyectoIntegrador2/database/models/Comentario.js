module.exports = (sequelize, dataTypes)=>{

    let alias = 'Comentario'; 
    
    let cols = { 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER 
        },
        texto: {
            type: dataTypes.STRING,
        },
        creacion: {
            type: dataTypes.DATE,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            unsigned: true,
        },
        producto_id: {
            type: dataTypes.INTEGER,
            unsigned: true,
        },
    };
    
    let config = {
        table: "Comentarios", 
        timestamps: false, 
        underscored: true 
    }
   
    const Comentario = sequelize.define (alias, cols, config)
    return Comentario;

}