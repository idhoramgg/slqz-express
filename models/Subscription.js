const db = require('../config/connection')
const Sequelize = require('sequelize');

const User = require('./User')

const Subscription = db.define('subscription', {
    id_subscription: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});
User.hasOne(Subscription, {
    foreignKey: 'id_user'
});
Subscription.belongsTo(User, {
    foreignKey: 'id_user',
    constraints: false
});

module.exports = Subscription