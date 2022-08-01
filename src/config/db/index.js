const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/24hDev');
    console.log('Connected successfully!');
  } catch (error) {
    console.log('Connect failed:', error);
  }
}

module.exports = { connectDB };
