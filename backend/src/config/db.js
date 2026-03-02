const mongoose = require("mongoose");

// Fix for Node.js v18+ SRV DNS resolution issue
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

async function connectDB() {
  try {
    const uri = process.env.MONGO_URI;
    
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      family: 4,
      directConnection: false,
    });
    
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB connection error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = connectDB;