import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'; // Ensure to use your CSS file

function UserViewEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchUserEvents();
    }, []);

    const fetchUserEvents = async () => {
        try {
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                alert('Please log in to view the events.');
                return;
            }

            const response = await axios.get('http://localhost:4000/api/events', {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            });

            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
            alert('Failed to load events. Please try again.');
        }
    };

    const handleApplyToEvent = async (eventId) => {
        const userToken = localStorage.getItem('userToken');
        if (!userToken) {
            alert('You need to be logged in to apply for an event.');
            return;
        }

        try {
            const response = await axios.post(`http://localhost:4000/api/events/${eventId}/apply`, {}, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error applying to event:', error);
            alert('Failed to apply for event.');
        }
    };

    return (
        <div className="user-view-events-container">
            <h1 className="text-center">Upcoming Events</h1>
            <div className="event-grid">
                {events.length === 0 ? (
                    <p>No events available.</p>
                ) : (
                    events.map(event => (
                        <div key={event._id} className="event-card">
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                            <p><strong>Date:</strong> {new Date(event.date).toDateString()}</p>
                            <p><strong>Location:</strong> {`${event.location.street}, ${event.location.city}, ${event.location.state}, ${event.location.zipCode}, ${event.location.country}`}</p>
                            <button className="apply-btn" onClick={() => handleApplyToEvent(event._id)}>Apply to Event</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default UserViewEvents;
