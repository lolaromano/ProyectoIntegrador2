module.exports = (sequelize, dataTypes) => {

    let alias = 'User'; // lo vamos a llamar x el controlador

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
        email: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,

        },
        telefono: {
            type: dataTypes.STRING,
        },
        fechadenacimiento: {
            type: dataTypes.DATE,
        },
    }; //van las columnas

    let config = {
        //tableName: "Usuarios", //nombre de la tabla
        timestamps: false,
        underscored: true // si los nombres de los campos se estan usando con guiones bajos
    }

    const Usuario = sequelize.define(alias, cols, config)
    return Usuario;

}