import NGO from "../models/NgoModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

// Function to create a JWT token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "10d" });
};

// Register a new NGO
export const registerNGO = async (req, res) => {
  const {
    name,
    description,
    contactEmail,
    contactPhone,
    address,
    username,
    password,
  } = req.body;

  // Check if all fields are provided
  if (
    !name ||
    !description ||
    !contactEmail ||
    !contactPhone ||
    !address ||
    !username ||
    !password
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Check if the email is already taken
  const emailExists = await NGO.findOne({ contactEmail });
  if (emailExists) {
    return res.status(400).json({ error: "Email is already taken" });
  }

  // Check if the username is already taken
  const usernameExists = await NGO.findOne({ username });
  if (usernameExists) {
    return res.status(400).json({ error: "Username is already taken" });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10); // Ensure consistent salt rounds
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    // Create a new NGO
    const ngo = await NGO.create({
      name,
      description,
      contactEmail,
      contactPhone,
      address,
      username,
      password: hashedPassword,
    });

    // Create a token for the new NGO
    const token = createToken(ngo._id);

    // Send the response with the username and token
    res.status(200).json({ username, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login an existing NGO
export const loginNGO = async (req, res) => {
  const { username, password } = req.body;

  // Check if all fields are provided
  if (!username || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Find the NGO by username
  const ngo = await NGO.findOne({ username });
  if (!ngo) {
    return res.status(400).json({ error: "Incorrect username." });
  }

  // Compare the provided password with the stored hashed password
  const isMatch = await bcrypt.compare(password, ngo.password);
  if (!isMatch) {
    return res.status(400).json({ error: "Incorrect password." });
  }

  try {
    // Create a token for the NGO
    const token = createToken(ngo._id);

    // Send the response with the username and token
    res.status(200).json({ username, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update NGO Profile
export const updateNGO = async (req, res) => {
  const { name, description, contactEmail, contactPhone, address } = req.body;
  const ngoId = req.ngo.id; // Assuming you have NGO ID from the auth middleware

  // Check if all fields are provided
  if (!name || !description || !contactEmail || !contactPhone || !address) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Find the NGO by ID and update the profile
    const updatedNGO = await NGO.findByIdAndUpdate(
      ngoId,
      { name, description, contactEmail, contactPhone, address },
      { new: true, runValidators: true }
    );

    if (!updatedNGO) {
      return res.status(404).json({ error: "NGO not found." });
    }

    // Send the response with the updated NGO details
    res.status(200).json(updatedNGO);
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
};

// Function to get NGO details
export const getNGODetails = async (req, res) => {
  const ngoId = req.ngo._id; // Assuming you have NGO ID from the auth middleware

  if (!ngoId) {
    return res.status(400).json({ error: "NGO ID is required" });
  }

  try {
    const ngo = await NGO.findById(ngoId);
    if (!ngo) {
      return res.status(404).json({ error: "NGO not found." });
    }
    res.status(200).json(ngo);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
};

