module.exports = (sequelize, dataTypes)=>{

    let alias = 'Comentario'; 
    
    let cols = { 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER 
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
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
        underscored: false, 
    }
   
    const Comentario = sequelize.define (alias, cols, config)
    
    Comentario.associate = (models)=> { //relacion de muchos a 1 'has many'
        Comentario.belongsTo(models.Usuario, {
            as:'Usuarios', //nombre que querramos
            foreignKey: 'usuario_id'
        })
    }
    return Comentario;

}