import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../navbar/Navbar';
import skull from '../../assets/images/skull.png';
import './main.css';

const Main = () => {
    const navigate = useNavigate(); 

    const [showImage, setShowImage] = useState(false);

    const handleButton1Click = () => {
    setShowImage(true);
    };

    const handleClose1Click = () => {
    setShowImage(false);
    };

    const handleButton2Click = () => {
    navigate('/tombstone');
    };

    return (
    <div className="main-container">
        <Navbar />
        <div className="main-content">
        {!showImage && (
            <button className="main-button-1" onClick={handleButton1Click}>
            Button 1
            </button>
        )}
        {showImage && (
            <div className="image-overlay">
            <img src={skull} alt="Image" className="overlay-image" />
            <p className="overlay-text">
                Well, well, well<br />
                <br />
                who do we have there?<br />
                i’m Skullz<br />
                and this is Skullz Gamz,<br />
                and you’re NOT welcomed<br />
                <br />
                Crrrkk<br />
                <br />
                u think i don’t know why you came here?<br />
                u really wanna play some mind gamz wi’me?<br />
                <br />
                if u think you got what it takes to play my gamz, come on in.<br />
                Be ready to lose your $SOUL, and your dignity<br />
                <br />
                Crrrkk<br />
                <br />
                c u on the other side bonehead!
            </p>
            <button className='main-button-close' onClick={handleClose1Click}>Close</button>
            </div>
        )}
        
        <button className="main-button-2" onClick={handleButton2Click}>Button 2</button>
        <button className="main-button-3">Button 3</button>
        </div>
    </div>


    );
};

export default Main;
