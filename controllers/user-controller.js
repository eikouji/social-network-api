const { Users } = require('../models/Users')

const userController = {
    // get all users //
    getAllUsers(req, res) {
        Users.find({})
        .populate({
            path: 'thoughts',
            select: '-_v'
        })
        .select('-_v')
        .then(dbUserData => res.json(dbUserData))
        // if thought doesn't exist, throw error //
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
    },

    // get User by Id with thoughts //
    getUserById({ params, res}, => {


        
    })
}