import dotenv from "dotenv"; 
dotenv.config(); // Load .env file before other imports

import path from "path";
import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

const app = express();

// Middleware
app.use(express.json()); // Accept JSON data in requests

// Constants
const __dirname = path.resolve();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/products", productRoutes);

// Serve Frontend in Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
