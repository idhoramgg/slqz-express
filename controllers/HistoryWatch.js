const HistoryWatch = require('../models/HistoryWatch')
const User = require('../models/User');
const Movies = require('../models/User');
const Subscription = require('../models/User');


module.exports = {
    // fungsi CRUD
    getAll: (req, res) => {
        HistoryWatch.findAll({
            include: User, Movies, Subscription,
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
    createHistory: (req, res) => {
        HistoryWatch.create(req.body)
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