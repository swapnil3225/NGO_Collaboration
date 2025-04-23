import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:4000/api/ngos/login",
                formData
            );
            alert("Login successful!");
            const { token } = response.data;
            localStorage.setItem("ngoToken", token);
            navigate("/Event");
        } catch (error) {
            console.error("Error logging in:", error);
            alert(error.response?.data?.error || "Login failed. Please try again.");
        }
    };

    // Styles for the component
    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            margin: 0,
            padding: 0,
            backgroundImage: 'url("https://irp.cdn-website.com/3f4c882c/dms3rep/multi/Top+10+Genuine+Charity+Organizations+in+India+%281%29-21cf4d8a.webp")', // Add path to the background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        },
        nav: {
            backgroundColor: 'rgba(51, 51, 51, 0.8)',
            color: '#fff',
            padding: '10px 0',
            textAlign: 'center',
        },
        navUl: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
        },
        navLi: {
            margin: '0 15px',
        },
        navA: {
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 'bold',
        },
        formContainer: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
            maxWidth: '400px',
            margin: '100px auto',
            textAlign: 'center',
            animation: 'fadeIn 1s ease-in-out',
        },
        formH2: {
            marginBottom: '30px',
            color: '#333',
            fontSize: '2rem',
        },
        formInput: {
            width: '100%',
            padding: '12px 15px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxSizing: 'border-box',
        },
        formButton: {
            backgroundColor: '#0073e6',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            fontSize: '1rem',
            marginTop: '20px',
        },
        formP: {
            marginTop: '20px',
            color: '#666',
            fontSize: '0.9rem',
        },
        formA: {
            color: '#0073e6',
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.body}>
            <nav style={styles.nav}>
                <ul style={styles.navUl}>
                    <li style={styles.navLi}><a href="/" style={styles.navA}>Home</a></li>
                    <li style={styles.navLi}><a href="/users" style={styles.navA}>Users</a></li>
                    <li style={styles.navLi}><a href="/ngos" style={styles.navA}>NGOs</a></li>
                    <li style={styles.navLi}><a href="/contact" style={styles.navA}>Contact</a></li>
                </ul>
            </nav>

            <div style={styles.formContainer}>
                <h2 style={styles.formH2}>NGO Login</h2>
                <form id="ngo-login-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        style={styles.formInput}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={styles.formInput}
                    />
                    <button type="submit" style={styles.formButton}>Login</button>
                </form>
                <p style={styles.formP}>Not registered? <a href="/ngoRegister" style={styles.formA}>Create an account</a></p>
            </div>

            <footer style={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#333', color: '#fff', marginTop: 'auto' }}>
                <p>&copy; 2024 NGO Collaboration. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LoginPage;