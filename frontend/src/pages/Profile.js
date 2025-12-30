import {useState} from 'react';
import API from '../api';

function Profile() {
    const [profileData, setProfileData] = useState({
        Username: '',
        Email: '',
        FullName: '',
    });

    const fetchProfile = async () => {
        try {
            const res = await API.get('/profile');
            setProfileData(res.data);
        } catch (error) {
            console.error("Failed to fetch profile data:");
        }
    }

    return (
        <div className="page">
            <h2>Profile Page</h2>
            <button onClick={fetchProfile}>Load Profile</button>
            <div>
                <p><strong>Username:</strong> {profileData.Username}</p>
                <p><strong>Email:</strong> {profileData.Email}</p>
                <p><strong>Full Name:</strong> {profileData.FullName}</p>
            </div>
        </div>
    );
}

export default Profile;

