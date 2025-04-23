import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './style.css';
import axios from 'axios';

function NgoRegister() {
    // Define state for form fields
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        contactEmail: '',
        contactPhone: '',
        address: {
            street: '',
            city: '',
            state: '',
            zipCode: '',
            country: ''
        },
        username: '',
        password: '',
    });

    // Initialize useNavigate
    const navigate = useNavigate();

    // Handle input change
    const handleChange = (event) => {
        const { id, value } = event.target;

        if (id in formData.address) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                address: {
                    ...prevFormData.address,
                    [id]: value,
                }
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [id]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/ngos', formData);

            alert('Registration successful!');
            const { token } = response.data;
            // Storing the token in local storage
            localStorage.setItem("ngoToken", token);
            // Save token or handle login success
            navigate("/Event");
        } catch (error) {
            console.error('Error registering NGO:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundImage: 'url("https://allngoindia.wordpress.com/wp-content/uploads/2015/04/ngo-projects-wallpapers.jpg")', // Replace with the URL of your background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
                    <li style={{ margin: '0 15px' }}><a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</a></li>
                    <li style={{ margin: '0 15px' }}><a href="/users" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Users</a></li>
                    <li style={{ margin: '0 15px' }}><a href="/ngos" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>NGOs</a></li>
                    <li style={{ margin: '0 15px' }}><a href="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a></li>
                </ul>
            </nav>

            <div className="form-container" style={{
                backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', maxWidth: '500px', margin: '50px auto', animation: 'fadeIn 1s ease-in-out'
            }}>
                <h2 style={{ marginBottom: '30px', color: '#333', fontSize: '2rem', textAlign: 'center' }}>NGO Registration</h2>
                <form id="ngo-register-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input type="text" id="name" placeholder="NGO Name" value={formData.name} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <textarea id="description" placeholder="Description" value={formData.description} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '5px', border: '1px solid #ccc', resize: 'vertical', height: '100px' }}></textarea>
                    <input type="email" id="contactEmail" placeholder="Contact Email" value={formData.contactEmail} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="text" id="contactPhone" placeholder="Contact Phone" value={formData.contactPhone} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '5px', border: '1px solid #ccc' }} />

                    <h3 style={{ marginTop: '20px', marginBottom: '10px', color: '#0073e6', fontSize: '1.2rem', textAlign: 'left' }}>Address</h3>
                    <input type="text" id="street" placeholder="Street" value={formData.address.street} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="text" id="city" placeholder="City" value={formData.address.city} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="text" id="state" placeholder="State" value={formData.address.state} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="text" id="zipCode" placeholder="Zip Code" value={formData.address.zipCode} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="text" id="country" placeholder="Country" value={formData.address.country} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '5px', border: '1px solid #ccc' }} />

                    <h3 style={{ marginTop: '20px', marginBottom: '10px', color: '#0073e6', fontSize: '1.2rem', textAlign: 'left' }}>Account Details</h3>
                    <input type="text" id="username" placeholder="Username" value={formData.username} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <button type="submit" style={{ padding: '12px 20px', backgroundColor: '#0073e6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease', fontSize: '1rem', marginTop: '20px' }}>Register</button>
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

export default NgoRegister;