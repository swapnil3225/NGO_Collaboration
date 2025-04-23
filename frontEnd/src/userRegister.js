import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function UserRegister() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        contactPhone: '',
        address: {
            street: '',
            city: '',
            state: '',
            zipCode: '',
            country: ''
        },
    });

    const navigate = useNavigate();

    // Handle input change
    const handleChange = (event) => {
        const { id, value } = event.target;

        // Check if the field is for the address
        if (id in formData.address) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                address: {
                    ...prevFormData.address,
                    [id]: value
                }
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [id]: value
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/users', formData);
            alert('Registration Successful! Redirecting to events page.');
            localStorage.setItem("userToken", response.data.token);
            navigate("/viewEvent");
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundImage: 'url("https://thumbs.dreamstime.com/b/rural-education-ngo-activities-teaching-young-indian-children-india-outdoors-temporary-classroom-boards-child-literacy-50806157.jpg")', // Add your background image path here
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
                    <li style={{ margin: '0 15px' }}><a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</a></li>
                    <li style={{ margin: '0 15px' }}><a href="/users" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Users</a></li>
                    <li style={{ margin: '0 15px' }}><a href="/ngos" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>NGOs</a></li>
                    <li style={{ margin: '0 15px' }}><a href="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a></li>
                </ul>
            </nav>

            <div className="form-container" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background for readability
                padding: '40px',
                borderRadius: '10px',
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
                maxWidth: '500px',
                margin: '50px auto',
                textAlign: 'center'
            }}>
                <h2 style={{ marginBottom: '30px', color: '#333', fontSize: '2rem' }}>User Registration</h2>
                <form id="user-register-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <input type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <input type="text" id="contactPhone" placeholder="Contact Phone" value={formData.contactPhone} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <input type="text" id="street" placeholder="Street" value={formData.address.street} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <input type="text" id="city" placeholder="City" value={formData.address.city} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <input type="text" id="state" placeholder="State" value={formData.address.state} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <input type="text" id="zipCode" placeholder="Zip Code" value={formData.address.zipCode} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <input type="text" id="country" placeholder="Country" value={formData.address.country} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <button type="submit" style={{ padding: '10px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}>Register</button>
                </form>
            </div>

            <footer style={{
                textAlign: 'center', padding: '20px 0', backgroundColor: '#333', color: '#fff', marginTop: 'auto'
            }}>
                <p>&copy; 2024 NGO Collaboration. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default UserRegister;