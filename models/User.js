const db = require('../config/connection');
const Sequelize = require('sequelize');


const User = db.define('users', {
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: {
            is: /^[0-9a-z]{64}$/i
        }
    },
    address: {
        type: Sequelize.STRING(200),
        allowNull: true
    }
}, {
    // options
});

module.exports = User;