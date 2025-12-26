//Contact us page with form (name, email, message) and submit button
import { useState } from 'react';
import API from './api';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async () => {
        try {
            const res = await API.post('/contact', null, {
                params: formData,
            });
            alert(res.data);
        } catch (error) {
            console.error("Contact form submission failed:");
        }
    }
    
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label><br />
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Email:</label><br />
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Message:</label><br />
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;