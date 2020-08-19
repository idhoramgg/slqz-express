const Sequelize = require('sequelize')

const db = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    database: 'impactbyte3',
    username:'root',
    password:'password'
})

module.exports = db