const mongoose = require('mongoose');

const username = encodeURIComponent("sagarbabus");
const password = encodeURIComponent("1922@guruvu");

const connectDB = async () => {
  try {
    const mongoURI = `mongodb+srv://${username}:${password}@cluster0.xphhmog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
