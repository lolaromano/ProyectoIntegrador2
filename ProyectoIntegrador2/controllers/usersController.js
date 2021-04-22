let usersController = {

    login: (req, res) => {
        res.render ('login')
    }, 
    
    register: (req, res) => {
        res.render ('register')
    },

    profileEdit: (req, res) => {
        res.render ('profileEdit')
    },

    profile: (req, res) => {
        res.render ('profile')
    }

};

module.exports = usersController;