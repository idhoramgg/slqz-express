const User = require('../models/User')

module.exports = {
    // fungsi CRUD
    getAll: (req, res) => {
        User.findAll({
            raw: true
        })
        .then(result => {
            res.send({
                message: 'Get All data',
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'internal server error',
                status: 500,
            })
        })
    },
    createUser: (req, res) => {
        User.create(req.body)
        .then(result => {
            res.send({
                message: "Create One user success",
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: "Internal server error",
                status: 500
            })
        })
    }
}