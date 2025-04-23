import mongoose from "mongoose";
import { usersRoutes } from "./routes/usersRoutes.js";
import { ngoRoutes } from "./routes/ngoRoutes.js";
import { eventRoutes } from "./routes/eventRoutes.js";
import express from "express";
import cors from "cors";

const app = express();

// Use CORS middleware
app.use(cors({
  origin: "http://localhost:3000" // Allow requests from this origin
}));

// Your existing middleware and routes
app.use(express.json());
app.use("/api/users", usersRoutes);
app.use("/api/ngos", ngoRoutes);
app.use("/api/events", eventRoutes);

// Start the server
mongoose.connect("mongodb://localhost:27017", { dbName: "ngo_db" })
  .then(() => {
    console.log("connected to DB successfully");
    app.listen(4000, "localhost", () => console.log("Listening to port 4000"));
  })
  .catch((err) => console.log(err));
