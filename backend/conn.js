const mongoose = require('mongoose');
const url = process.env.DB_USER
async function connectToMongoDB() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

module.exports = connectToMongoDB;
