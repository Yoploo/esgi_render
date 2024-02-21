const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
   process.env.DATABASE_URL, // Database URL
  //DATABASE_NAME, // Database name
  //DATABASE_USER, // User
  //DATABASE_PASSWORD, // Password
  {
    //host: //HOST_NAME, // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
