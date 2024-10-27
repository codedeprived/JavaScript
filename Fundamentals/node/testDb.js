// Backend/testDb.js
const { authenticateDatabase, syncDatabase } = require('./db');
const Admin = require('./Admin'); // Import your model

const testDb = async () => {
  await authenticateDatabase(); // Authenticate DB connection
  await syncDatabase(); // Sync models with DB

  // Optionally create an admin for testing
  try {
    console.log('Admin created successfully.');
  } catch (error) {
    console.error('Error creating admin:', error);
  }
};

testDb();
