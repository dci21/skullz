import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import './tombstone.css'
import ghost from '../../assets/images/ghost.png';




const Tombstone = () => {

    const [showImage, setShowImage] = useState(false);

    const handleInspectClick = () => {
    setShowImage(true);
    };

    const handleInspectClose = () => {
    setShowImage(false);
    };


    return (
        <div className="tombstone-container">
            <Navbar />
            <div className='tombstone-content'>
                {!showImage && (
                    <button className="inspect-button" onClick={handleInspectClick}>
                    Inspect
                    </button>
                )}
                {showImage && (
                    <div className="image-overlay">
                        <img src={ghost} alt="Image" className="overlay-image" />
                        <p className="overlay-text">
                            Wassup brothaa
                            <br />
                            <br />
                            i’m a hungry ghost<br />
                            <br />
                            Wanna Feed me?<br />
                        </p>
                        <button className='inspect-button-close' onClick={handleInspectClose}>Close</button>
                    </div>
                )}
            </div>  
        </div>
    );

    
};

export default Tombstone;