import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyProfile = () => {
    let [userData, setUserData] = useState({
        email:"",
        prof_pic:""
    });

    // let {email,prof_pic} =userData
    
    let userId = localStorage.getItem('USER_ID');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                let { data } = await axios.get(`http://localhost:8000/registeruser/${userId}`);
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [userId]);

    console.log(userId);

    return (
        <section>
            <h1>My Profile</h1>
            {userData ? (
                <div className="profile-info">
                    <p>Email: {userData.email}</p>
                    <img src={userData.prof_pic} alt="Profile Pic" />
                </div>
            ) : (
                userId ? <p>Loading user data...</p> : <p>Please log in to view your profile.</p>
            )}
        </section>
    );
};

export default MyProfile;
