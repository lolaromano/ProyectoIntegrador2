module.exports = (sequelize, dataTypes) => {

    let alias = 'Usuario'; // lo vamos a llamar x el controlador

    let cols = { //pones la data de cada columna
        id: {
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING,
        },
        Email: {
            type: dataTypes.STRING,
        },
        Password: {
            type: dataTypes.STRING,

        },
        Telefono: {
            type: dataTypes.STRING,
        },
        FechaDeNacimiento: {
            type: dataTypes.DATE,
        },
    }; //van las columnas

    let config = {
        tableName: "Usuarios", //nombre de la tabla
        timestamps: false,
        underscored: false // si los nombres de los campos se estan usando con guiones bajos
    }

    const Usuario = sequelize.define(alias, cols, config)

    Usuario.associate = (models)=> {
        //relacion de 1 a muchos(belongs to)
        Usuario.hasMany(models.Comentario, {
            as:'Comentarios', 
            foreignKey: 'usuario_id'
        })
         //relacion de muchos a muchos 
        Usuario.belongsToMany(models.Producto, {
            as: 'Productos',
            through: 'Usuarios',
            foreignKey: 'usuario_id',
            otherKey: 'producto_id',
            timestamps: false,

        })
    

    }
    return Usuario;

}