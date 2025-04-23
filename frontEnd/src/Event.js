import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const Event = () => {
    const [events, setEvents] = useState([]);
    const [editEventId, setEditEventId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        eventName: '',
        eventDescription: '',
        eventDate: '',
        eventLocation: {
            street: '',
            city: '',
            state: '',
            zipCode: '',
            country: ''
        }
    });

    const [newEventData, setNewEventData] = useState({
        eventName: '',
        eventDescription: '',
        eventDate: '',
        eventLocation: {
            street: '',
            city: '',
            state: '',
            zipCode: '',
            country: ''
        }
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/events', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
            alert('Failed to load events.');
        }
    };

    const handleInputChange = (e, setFormData) => {
        const { name, value } = e.target;
        if (name.startsWith('location')) {
            const field = name.split('.')[1];
            setFormData((prevData) => ({
                ...prevData,
                eventLocation: {
                    ...prevData.eventLocation,
                    [field]: value
                }
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleEditEvent = (event) => {
        setEditEventId(event._id);
        setEditFormData({
            eventName: event.name,
            eventDescription: event.description,
            eventDate: event.date.split('T')[0],
            eventLocation: {
                street: event.location.street,
                city: event.location.city,
                state: event.location.state,
                zipCode: event.location.zipCode,
                country: event.location.country
            }
        });
    };

    const handleUpdateEvent = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('ngoToken');

        const updatedEventData = {
            name: editFormData.eventName,
            description: editFormData.eventDescription,
            date: editFormData.eventDate,
            location: editFormData.eventLocation
        };

        try {
            const response = await axios.put(`http://localhost:4000/api/events/${editEventId}`, updatedEventData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEvents(events.map(event => event._id === editEventId ? response.data : event));
            setEditEventId(null);
            alert('Event updated successfully!');
        } catch (error) {
            console.error('Error updating event:', error);
            alert('Failed to update event.');
        }
    };

    const handleDeleteEvent = async (eventId) => {
        const token = localStorage.getItem('ngoToken');
        if (!window.confirm('Are you sure you want to delete this event?')) return;

        try {
            await axios.delete(`http://localhost:4000/api/events/${eventId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setEvents(events.filter(event => event._id !== eventId));
            alert('Event deleted successfully.');
        } catch (error) {
            console.error('Error deleting event:', error);
            alert('Failed to delete event.');
        }
    };

    const handleAddEvent = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('ngoToken');

        if (!token) {
            alert('You need to be logged in to create an event.');
            return;
        }

        const eventData = {
            name: newEventData.eventName,
            description: newEventData.eventDescription,
            date: newEventData.eventDate,
            location: {
                street: newEventData.eventLocation.street,
                city: newEventData.eventLocation.city,
                state: newEventData.eventLocation.state,
                zipCode: newEventData.eventLocation.zipCode,
                country: newEventData.eventLocation.country
            },
            ngo: localStorage.getItem('ngoId'),
        };

        try {
            const response = await axios.post('http://localhost:4000/api/events', eventData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEvents([...events, response.data]);
            setNewEventData({
                eventName: '',
                eventDescription: '',
                eventDate: '',
                eventLocation: {
                    street: '',
                    city: '',
                    state: '',
                    zipCode: '',
                    country: ''
                }
            });
            alert("Event added successfully!");
        } catch (error) {
            console.error('Error creating event:', error);
            alert("Failed to add event. Please check your authorization.");
        }
    };

    return (
        <div>
            <header>
                <h2>NGO Events</h2>
            </header>

            <section id="addEventForm">
                <h3>Add New Event</h3>
                <form onSubmit={handleAddEvent}>
                    <input
                        type="text"
                        name="eventName"
                        placeholder="Event Name"
                        value={newEventData.eventName}
                        onChange={(e) => handleInputChange(e, setNewEventData)}
                    />
                    <textarea
                        name="eventDescription"
                        placeholder="Event Description"
                        value={newEventData.eventDescription}
                        onChange={(e) => handleInputChange(e, setNewEventData)}
                    />
                    <input
                        type="date"
                        name="eventDate"
                        value={newEventData.eventDate}
                        onChange={(e) => handleInputChange(e, setNewEventData)}
                    />
                    <input
                        type="text"
                        name="location.street"
                        placeholder="Street"
                        value={newEventData.eventLocation.street}
                        onChange={(e) => handleInputChange(e, setNewEventData)}
                    />
                    <input
                        type="text"
                        name="location.city"
                        placeholder="City"
                        value={newEventData.eventLocation.city}
                        onChange={(e) => handleInputChange(e, setNewEventData)}
                    />
                    <input
                        type="text"
                        name="location.state"
                        placeholder="State"
                        value={newEventData.eventLocation.state}
                        onChange={(e) => handleInputChange(e, setNewEventData)}
                    />
                    <input
                        type="text"
                        name="location.zipCode"
                        placeholder="Zip Code"
                        value={newEventData.eventLocation.zipCode}
                        onChange={(e) => handleInputChange(e, setNewEventData)}
                    />
                    <input
                        type="text"
                        name="location.country"
                        placeholder="Country"
                        value={newEventData.eventLocation.country}
                        onChange={(e) => handleInputChange(e, setNewEventData)}
                    />
                    <button type="submit">Add Event</button>
                </form>
            </section>

            <section id="eventList">
                <h3>Current Events</h3>
                <div id="events" className="event-grid">
                    {events.map((event) => (
                        <div key={event._id} className="event-card">
                            {editEventId === event._id ? (
                                <form onSubmit={handleUpdateEvent}>
                                    <input
                                        type="text"
                                        name="eventName"
                                        placeholder="Event Name"
                                        value={editFormData.eventName}
                                        onChange={(e) => handleInputChange(e, setEditFormData)}
                                    />
                                    <textarea
                                        name="eventDescription"
                                        placeholder="Event Description"
                                        value={editFormData.eventDescription}
                                        onChange={(e) => handleInputChange(e, setEditFormData)}
                                    />
                                    <input
                                        type="date"
                                        name="eventDate"
                                        value={editFormData.eventDate}
                                        onChange={(e) => handleInputChange(e, setEditFormData)}
                                    />
                                    <input
                                        type="text"
                                        name="location.street"
                                        placeholder="Street"
                                        value={editFormData.eventLocation.street}
                                        onChange={(e) => handleInputChange(e, setEditFormData)}
                                    />
                                    <input
                                        type="text"
                                        name="location.city"
                                        placeholder="City"
                                        value={editFormData.eventLocation.city}
                                        onChange={(e) => handleInputChange(e, setEditFormData)}
                                    />
                                    <input
                                        type="text"
                                        name="location.state"
                                        placeholder="State"
                                        value={editFormData.eventLocation.state}
                                        onChange={(e) => handleInputChange(e, setEditFormData)}
                                    />
                                    <input
                                        type="text"
                                        name="location.zipCode" 
                                        placeholder="Zip Code"
                                        value={editFormData.eventLocation.zipCode}
                                        onChange={(e) => handleInputChange(e, setEditFormData)}
                                    />
                                    <input
                                        type="text"
                                        name="location.country"
                                        placeholder="Country"
                                        value={editFormData.eventLocation.country}
                                        onChange={(e) => handleInputChange(e, setEditFormData)}
                                    />
                                    <button type="submit">Update Event</button>
                                </form>
                            ) : (
                                <div>
                                    <h4>{event.name}</h4>
                                    <p>{event.description}</p>
                                    <p>{event.date.split('T')[0]}</p>
                                    <p>{`${event.location.street}, ${event.location.city}, ${event.location.state}, ${event.location.zipCode}, ${event.location.country}`}</p>
                                    <button className="event-link" onClick={() => handleEditEvent(event)}>Edit</button>
                                    <button className="delete-link"onClick={() => handleDeleteEvent(event._id)}>Delete</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Event;
