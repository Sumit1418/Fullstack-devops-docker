import { useState } from 'react';
import API from '../api';

const Contact = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/contact', null, {
                params: formData,
            });
            alert(res.data);
        }
        catch (error) {
            console.error("Contact form submission failed:");
        }
    }
    
    return (
        <div className="page">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label><br />
                    <input 
                        type="text" 
                        name="Name" 
                        value={formData.Name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Email:</label><br />
                    <input 
                        type="email" 
                        name="Email"
                        value={formData.Email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Message:</label><br />
                    <textarea 
                        name="Message" 
                        value={formData.Message} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Contact;