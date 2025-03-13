const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGO_URL = "mongodb://127.0.0.1:27017/blogdb";

// Database Connection with Error Handling
async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");
    } catch (err) {
        console.error("Database Connection Error:", err);
    }
}
main();
// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running and MongoDB is connected!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
