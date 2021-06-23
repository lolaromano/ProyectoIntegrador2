module.exports = (sequelize, dataTypes) => {

    let alias = 'Usuario'; // lo vamos a llamar x el controlador

    let cols = { //pones la data de cada columna
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
            type: dataTypes.DATEONLY,
        },
        imagen: {
            type: dataTypes.STRING,
        }
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
        Usuario.hasMany(models.Producto, { //relacion de muchos a 1 'has many'
            as: 'Productos',
            foreignKey: 'usuario_id',
        })
    

    }
    return Usuario;

}