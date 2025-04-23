import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

/************************************ Creating JWT token ************************************/
const createToken = (_id) => {
  // Creating a new signature
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "10d" });
};

/************************************ Register User ************************************/
const registerUser = async (req, res) => {
  // Grab data from request body
  const { name, email, password, contactPhone, address } = req.body;

  // Check the fields are not empty
  if (!name || !email || !password || !contactPhone || !address) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Check if email already exists
  const exist = await User.findOne({ email });
  if (exist) {
    return res.status(400).json({ error: "Email is already taken" });
  }

  // Hash the password
  const salt = await bcrypt.genSalt();
  const hashed = await bcrypt.hash(password, salt);

  try {
    // Register the user
    const user = await User.create({ name, email, password: hashed, contactPhone, address });
    // Create the JsonWebToken
    const token = createToken(user._id);
    // Send the response
    res.status(200).json({ email, token });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

/************************************ Login User ************************************/
const loginUser = async (req, res) => {
  // Grab data from request body
  const { email, password } = req.body;

  // Check the fields are not empty
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Check if email already exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Incorrect email." });
  }

  // Check password
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ error: "Incorrect password." });
  }

  try {
    // Create the JsonWebToken
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/************************************ Get User Details ************************************/
export const getUserDetails = async (req, res) => {
  const userId = req.user._id;  // Assuming you have user ID from the auth middleware

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
};


/************************************ Update User ************************************/
const updateUser = async (req, res) => {
  const { name, email, contactPhone, address } = req.body;

  // Check if all fields are provided
  if (!name || !email || !contactPhone || !address) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Find the user by ID and update the profile
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name, email, contactPhone, address },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error); // Log the error
    res.status(500).json({ error: "Server error." });
  }
};



export { registerUser, loginUser, updateUser };
