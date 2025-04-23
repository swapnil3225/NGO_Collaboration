import mongoose from "mongoose";

// Creating user schema using Mongoose Schema class
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactPhone: {
      type: String,
      required: true,
      trim: true,
      match: [/^\d{10}$/, 'Please fill a valid phone number'],
    },
    address: {
      street: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
      zipCode: {
        type: String,
        required: true,
        trim: true,
        match: [/^\d{6}$/, 'Please fill a valid zip code'],
      },
      country: {
        type: String,
        required: true,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

// Creating a model from schema
const User = mongoose.model("User", UserSchema);

export default User;
