import express from "express";
import {
  createEvent,
  updateEvent,
  deleteEvent,
  applyToEvent,
  getAllEvents,
} from "../controllers/eventsController.js";
import authNGO from "../middlewares/authNGO.js"; // Middleware to protect routes
import authUser from "../middlewares/authUser.js";

const router = express.Router();

// Route to create a new event
router.post("/", authNGO, createEvent);

// Route to update an existing event
router.put("/:obj", authNGO, updateEvent);

// Route to delete an existing event
router.delete("/:obj", authNGO, deleteEvent);

// Route to apply to an event
router.post("/:eventId/apply", authUser, applyToEvent);

// Route to get all events
router.get("/", getAllEvents);

export { router as eventRoutes };
