import React, { useState, useEffect } from 'react';

function Dashboard() {
    const [userData, setUserData] = useState({});
    // Fetch user data from your backend here

    useEffect(() => {
        // Fetch user data from your backend and set it in userData state
    }, []);

    return (
        <div className="dashboard">
            <h2>User Dashboard</h2>
            <div className="user-info">
                <p>Welcome, {userData.username}</p>
                <p>Email: {userData.email}</p>
            </div>
            <div className="actions">
                {/* Add navigation links to other parts of your app */}
            </div>
        </div>
    );
}

export default Dashboard;
