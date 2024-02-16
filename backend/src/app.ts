import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: process.env.ALLOWED_ORIGIN || "*" }));

// Change Size if needed
app.use(express.json({ limit: "20kb" }));

// Add `extend:true` if url will have nested objects
app.use(express.urlencoded({ extended: false }));

// Middleware Imports
// Routes Imports

// Routes Declarations
// app.use("/api/v1/leaves", clientAuthMiddleware, leaveRouter);

export { app };
