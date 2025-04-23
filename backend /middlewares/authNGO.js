import jwt from "jsonwebtoken";
import NGO from "../models/NgoModel.js";

const auth = async (req, res, next) => {
  // Check if the request headers contain the authorization key
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token not found" });
  }

  // Grab the token from headers (taking the "Bearer " string away)
  const token = authorization.split(" ")[1];

  try {
    // Decode and extract the user id from token
    const { _id } = jwt.verify(token, process.env.SECRET);
    // Save the NGO in request
    req.ngo = await NGO.findById(_id).select("_id");

    if (!req.ngo) {
      return res.status(401).json({ error: "NGO not found." });
    }

    // Go to the next function/middleware
    next();
  } catch (error) {
    console.error("Error in auth middleware:", error); // Log the error
    res.status(401).json({ error: "Invalid token" });
  }
};

export default auth;
