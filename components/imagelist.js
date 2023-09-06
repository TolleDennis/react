import React, { useState, useEffect } from 'react';

function PictureList() {
    const [pictures, setPictures] = useState([]);
    // Fetch pictures from your blockchain and set them in the pictures state

    useEffect(() => {
        // Fetch pictures from your blockchain and set them in the pictures state
    }, []);

    return (
        <div>
            <h2>Picture List</h2>
            <ul>
                {pictures.map((picture, index) => (
                    <li key={index}>
                        {/* Display picture information */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PictureList;

