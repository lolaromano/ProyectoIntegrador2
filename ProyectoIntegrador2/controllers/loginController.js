let login= require ('../data/productos');

let loginController = {

    index: (req, res) =>{
        res.render('login',{"login": login});
    },
}

module.exports = loginController ;