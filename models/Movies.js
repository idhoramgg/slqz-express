const db = require('../config/connection')
const Sequelize = require('sequelize');

const Movies = db.define('movies', {
    id_movie: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    url_trailer: {
        type:Sequelize.STRING(200),
        allowNull: false
    }
})

module.exports = Movies