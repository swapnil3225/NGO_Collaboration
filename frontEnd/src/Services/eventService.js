import axios from "axios";

const API_URL = "/api/events"; // Adjust the API URL based on your backend route

// Get all events
export const getAllEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create an event
export const createEvent = async (eventData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, eventData, config);
  return response.data;
};

// Update an event
export const updateEvent = async (id, updatedData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}/${id}`, updatedData, config);
  return response.data;
};

// Delete an event
export const deleteEvent = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/${id}`, config);
  return response.data;
};

// Apply to an event
export const applyToEvent = async (eventId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/${eventId}/apply`, {}, config);
  return response.data;
};
