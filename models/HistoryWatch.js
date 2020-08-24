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
HistoryWatch.belongsTo(User, {
    foreignKey: 'id_user',
    constraints: false
});


Movies.hasMany(HistoryWatch, {
    foreignKey: 'id_movie'
});
HistoryWatch.belongsTo(Movies, {
    foreignKey: 'id_movie',
    constraints: false
});

Subscription.hasMany(HistoryWatch, {
    foreignKey: 'id_subscription'
});
HistoryWatch.belongsTo(Subscription, {
    foreignKey: 'id_subscription',
    constraints: false
});

module.exports = HistoryWatch
