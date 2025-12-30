import { useState } from 'react';
import API from '../api';

function Login() {
    const [data, setData] = useState({
        Username: "",
        Password: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const login = async () => {
        try {
            const res = await API.post('/login', null, {
                params: data,
            });
            alert(res.data);
            
        } catch (error) {
            console.error("Login failed:");
        }
    }
    
    return (
        <div className="page">
            <h2>Login Updated</h2>
            <input type="text" name="Username" placeholder="Username" onChange={handleChange} /><br />
            <input type="password" name="Password" placeholder="Password" onChange={handleChange} /><br />
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;
