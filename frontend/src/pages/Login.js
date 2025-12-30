import { useNavigate } from 'react-router-dom';


import { useState } from 'react';
import API from '../api';

function Login() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        Username: "",
        Password: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/login', data );
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);
            alert(res.data.message);
            navigate('/profile', { replace: true });
            
        } catch (error) {
            console.error("Login failed:");
        }
    }
    
    return (
        <div className="page">
            <h2>Login Updated</h2>
            <form>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} /><br />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
                <button onClick={login}>Login</button>
            </form>
        </div>
    );
}

export default Login;
