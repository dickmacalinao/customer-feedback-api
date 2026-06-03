// require("dotenv").config();
import express, { json, urlencoded } from "express";
import cors from "cors";
// const userRoutes = require("./routes/users");
import categoryRoutes from "./routes/category.js";
import feedbackRoutes from "./routes/feedback.js";
// const questionRoutes = require("./routes/questions");
import apiDocsRouter from "./routes/apiDocs.js";

// Imitialize database pool
import { postgresDb } from './config/postgres.js';
import connectDB from "./config/mongodb.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
await connectDB();

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Sample Logging
const myLogger = (req, res, next) => {
  // console.log('Request URL:', req.originalUrl);
  // console.log('Request Type:', req.method);
  // console.log('Request Header:', req.headers);
  next();
};

app.use(myLogger);

// ─── Routes ───────────────────────────────────────────────────────────────────
/*
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Express API is running!",
    version: "1.0.0",
    endpoints: {
      health: "GET /health",
      users: "GET /api/users",
      userById: "GET /api/users/:id",
      createUser: "POST /api/users",
      updateUser: "PUT /api/users/:id",
      deleteUser: "DELETE /api/users/:id",
    },
  });
});
*/

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// app.use("/api/users", userRoutes);

//TODO: Add validation that Request Header customer-slug is mandatory

app.use("/api", categoryRoutes);

app.use("/api", feedbackRoutes);

// app.use("/api/questions", questionRoutes);

app.use("/api-docs", apiDocsRouter);


// ─── 404 Handler ──────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ─── Global Error Handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV || "development"}`);
});