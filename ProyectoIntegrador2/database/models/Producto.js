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


    Producto.associate = (models)=> {
        //relacion de muchos a muchos
        Producto.belongsToMany(models.Usuario, {
            as: 'Producto',
            through: 'Productos',
            foreignKey: 'producto_id',
            otherKey: 'usuario_id',
            timestamps: false,

        })

    }

    return Producto;

}