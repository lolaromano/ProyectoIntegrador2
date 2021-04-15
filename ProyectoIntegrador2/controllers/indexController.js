let indexController = {

    index: (req, res) => {
        res.render ('index', {title: 'Mercado Liebre'})
    }

};

module.exports = indexController;