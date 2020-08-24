const HistoryWatch = require('../models/HistoryWatch')
const User = require('../models/User');
const Movies = require('../models/Movies');
const Subscription = require('../models/Subscription');

module.exports = {
    // fungsi CRUD
    getAll: async (req, res) => {
        const result = await HistoryWatch.findAll({
            include: [User, Movies, Subscription],
            raw: true
        })
        
        if(result) {
            res.send({
                message: 'scs',
                result
            })
        }
        else {
            res.send({
                message: 'error'
            })
        }
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
    },
    getOne : (req, res) => {
        HistoryWatch.findOne({
            include: [User, Movies, Subscription], 
            where: {
                id_history:req.params.id
            }
        }).then(result => {
            if(result !== null) {
                res.send({
                    message: 'get one data',
                    status: 200,
                    result
                })
            } else {
                res.send({
                    message: `User dengan ID ${req.params.id} tidak ditemukan`,
                })
            }
           
        }).catch(error => {
            console.log(error);
            res.send({
                message: 'error',
            })
        })
    }
}