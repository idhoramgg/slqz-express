const db = require('../config/connection')
const Sequelize = require('sequelize');

const User = db.define('user', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    // options
});

module.exports = User;