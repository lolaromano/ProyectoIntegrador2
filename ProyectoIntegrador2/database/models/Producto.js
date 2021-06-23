module.exports = (sequelize, dataTypes)=>{

    let alias = 'Producto'; 
    
    let cols = { 
        id: {
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
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
            type: dataTypes.DATEONLY,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            unsigned: true,
        },
    }; 
    
    let config = {
        table: "Productos", 
        timestamps: false, 
        underscored: false, 
    }
   
   
    const Producto = sequelize.define (alias, cols, config)


    Producto.associate = (models)=> { //relacion de 1 a muchos
        Producto.belongsTo(models.Usuario, {
            as: 'Usuario',
            foreignKey: 'usuario_id',
        }),
        Producto.hasMany(models.Comentario, {
            as: 'Comentarios',
            foreignKey: 'producto_id',
        })

    }//muchos productos pueden pertenecer a 1 usuario

    return Producto;

}