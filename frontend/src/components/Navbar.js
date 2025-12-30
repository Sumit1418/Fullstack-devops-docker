import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <h2 className="navbar-logo">Docker Fullstack</h2>

            <div className="navbar-links">
                {!isLoggedIn ? (
                    <>
                        <Link to="/login">Login </Link>
                        <Link to="/register">Register</Link>
                    </>
                ) : (
                    <>
                        <Link to="/profile">Profile</Link>
                        <Link to="/Contact">Contact</Link>
                        <button onClick={logout} className='logout-btn'>Logout</button>
                    </>
                )}  
            </div>
        </nav>
    );
}

export default Navbar;
            