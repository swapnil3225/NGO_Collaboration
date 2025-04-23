import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css';

const UserLoginPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/users/login', formData);
            alert('Login successful!');
            localStorage.setItem("userToken", response.data.token);
            navigate("/viewEvent");
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D")', // Add the URL of your background image here
            backgroundSize: 'cover', // Ensure the background covers the whole area
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#f4f4f4'
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
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background for contrast
                padding: '40px',
                borderRadius: '10px',
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
                maxWidth: '400px',
                margin: '100px auto',
                textAlign: 'center',
                animation: 'fadeIn 1s ease-in-out'
            }}>
                <h2 style={{ marginBottom: '30px', color: '#333', fontSize: '2rem' }}>User Login</h2>
                <form id="user-login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%', padding: '12px 15px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box'
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%', padding: '12px 15px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box'
                        }}
                    />
                    <button type="submit" style={{
                        backgroundColor: '#0073e6', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease', fontSize: '1rem', marginTop: '20px'
                    }}>Login</button>
                </form>
                <p style={{ marginTop: '20px', color: '#666', fontSize: '0.9rem' }}>Not registered? <a href="/userRegister" style={{ color: '#0073e6', textDecoration: 'none' }}>Create an account</a></p>
            </div>

            <footer style={{
                textAlign: 'center', padding: '20px 0', backgroundColor: '#333', color: '#fff', marginTop: 'auto'
            }}>
                <p>&copy; 2024 NGO Collaboration. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default UserLoginPage;