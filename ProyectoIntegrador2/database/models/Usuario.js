module.exports = (sequelize, dataTypes)=>{

    let alias = 'Usuario'; // lo vamos a llamar x el controlador
    
    let cols = { //pones la data de cada columna
        id: {
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
            type: dataTypes.INTEGER 
        },
        nombre: {
            type: dataTypes.VARCHAR,
            
        },
        Email: {
            type: dataTypes.VARCHAR,
           
        },
        Password: {
            type: dataTypes.VARCHAR,
        
        },
        Telefono: {
            type: dataTypes.VARCHAR,
           
        },
        Fecha_De_Nacimiento: {
            type: dataTypes.DATE,
          
        },
      }; //van las columnas
    
    let config = {
        table: "Usuarios", //nombre de la tabla
        timestamps: false, 
        underscored: true // si los nombres de los campos se estan usando con guiones bajos
    }
   

    const Usuario = sequelize.define (alias, cols, config)
    return Usuario;

}