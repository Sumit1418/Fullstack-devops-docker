import { useState } from 'react';
import API from '../api';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/contact', formData);
            alert(res.data);
            setFormData({ name: '', email: '', message: '' });
        }
        catch (error) {
            console.error("Contact form submission failed:");
        }
    }
    
    return (
        <div className="page">
            <h1>Contact Us</h1>
            <form>
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} /><br />
                <input type="email" name="email" placeholder="Your Email" onChange={handleChange} /><br />
                <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea><br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Contact;