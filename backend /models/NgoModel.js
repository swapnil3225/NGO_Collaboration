import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const NGOSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  contactEmail: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  contactPhone: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Please fill a valid phone number']
  },
  address: {
    street: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true
    },
    zipCode: {
      type: String,
      required: true,
      trim: true,
      match: [/^\d{6}$/, 'Please fill a valid zip code']
    },
    country: {
      type: String,
      required: true,
      trim: true
    }
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const NGO = mongoose.model('NGO', NGOSchema);

export default NGO;
