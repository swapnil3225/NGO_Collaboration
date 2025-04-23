import Event from "../models/EventModel.js";
import User from "../models/UserModel.js";

// Retrieve all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
};

// Create a new event
export const createEvent = async (req, res) => {
  const { name, description, date, location } = req.body;
  const ngoId = req.ngo._id; // Assuming you have NGO ID from the auth middleware

  try {
    const event = await Event.create({ name, description, date, location, ngo: ngoId });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing event
export const updateEvent = async (req, res) => {
  const { obj } = req.params;
  const { name, description, date, location } = req.body;

  try {
    const event = await Event.findByIdAndUpdate(obj, { name, description, date, location }, { new: true, runValidators: true });
    if (!event) {
      return res.status(404).json({ error: "Event not found." });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an existing event
export const deleteEvent = async (req, res) => {
  const { obj } = req.params;

  try {
    const event = await Event.findByIdAndDelete(obj);
    if (!event) {
      return res.status(404).json({ error: "Event not found." });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Apply to an event
export const applyToEvent = async (req, res) => {
  const { eventId } = req.params;
  const userId = req.user.id; // Assuming you have user ID from the auth middleware

  try {
    // Find the event by ID
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: "Event not found." });
    }

    // Check if the user has already applied
    if (event.applicants.includes(userId)) {
      return res.status(400).json({ error: "You have already applied to this event." });
    }

    // Add the user to the applicants array
    event.applicants.push(userId);
    await event.save();

    res.status(200).json({ message: "Successfully applied to the event." });
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
};
