require('dotenv').config()
const Sequelize = require('sequelize')

//Konifgurasi database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorAliases: false,
    timezone: '+07:00',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
})

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./user.model')(sequelize, Sequelize)
db.role = require('./role.model')(sequelize, Sequelize)
db.department = require('./department.model')(sequelize, Sequelize)


db.role.hasMany(db.user)
db.user.belongsTo(db.role)

db.department.hasMany(db.role)
db.role.belongsTo(db.department)

module.exports = db