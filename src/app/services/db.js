const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("nodejs_login1", "root", "Motortools$01",{
    host: "64.225.52.96",
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.sequelize = sequelize
module.exports = db