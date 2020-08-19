const db = require('../config/connection')
const Sequelize = require('sequelize');

const User = require('./User')
const Movies = require('./Movies')
const Subscription = require('./Subscription')

const HistoryWatch = db.define('history_watch', {
    id_history: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})

User.hasMany(HistoryWatch, {
    foreignKey: 'id_user'
});
Movies.hasMany(HistoryWatch, {
    foreignKey: 'id_movie'
});
Subscription.hasMany(HistoryWatch, {
    foreignKey: 'id_subscription'
});

// ------------------------------------ //

HistoryWatch.belongsTo(User, {
    foreignKey: 'id_user',
    constraints: false
});
HistoryWatch.belongsTo(Movies, {
    foreignKey: 'id_movie',
    constraints: false
});
HistoryWatch.belongsTo(Subscription, {
    foreignKey: 'id_subscription',
    constraints: false
});

module.exports = HistoryWatch
