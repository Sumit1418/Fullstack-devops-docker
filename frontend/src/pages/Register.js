import {useState} from 'react';
import API from '../api';
import { Navigate } from 'react-router-dom';

function Register() {
    const [formData, setUser] = useState({
        username: "",
        password: "",
        email: "",
    });
    const handleChange = (e) => {
        setUser({ ...formData, [e.target.name]: e.target.value });
    }

    const register = async () => {

        try {
            const res = await API.post('/register', formData);
            alert(res.data);
            Navigate('/login');
        } catch (error) {
            console.error("Registration failed:");
        }
    }
    
    return (
        <div className="page">
            <h2>Register</h2>
            <form>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} /><br />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
            <button onClick={register}>Register</button>
        </form>
        </div>
    );
}

export default Register;
