// Backend/config/db.js
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('fleet-managementv1', 'postgres', 'pgadmin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Set to console.log to see SQL queries
});

// Function to authenticate the database connection
const authenticateDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Sync all models with the database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Use { force: true } to drop tables and recreate them
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the models:', error);
  }
};

// Export the sequelize instance and the authentication/sync functions
module.exports = {
  sequelize,  // Make sure this is included
  authenticateDatabase,
  syncDatabase,
};
