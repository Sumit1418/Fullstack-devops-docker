import {useState} from 'react';
import API from './api';

function Register() {
    const [username, setUser] = useState({
        Username: "",
        Password: "",
        Email: "",
    });
    const handleChange = (e) => {
        setUser({ ...username, [e.target.name]: e.target.value });
    }

    const register = async () => {
        try {
            const res = await API.post('/register', null, {
                params: username,
            });
            alert(res.data);
        } catch (error) {
            console.error("Registration failed:");
        }
    }
    
    return (
        <div>
            <h2>Register</h2>
            <input type="text" name="Username" placeholder="Username" onChange={handleChange} /><br />
            <input type="password" name="Password" placeholder="Password" onChange={handleChange} /><br />
            <input type="email" name="Email" placeholder="Email" onChange={handleChange} /><br />
            <button onClick={register}>Register</button>
        </div>
    );
}

export default Register;
