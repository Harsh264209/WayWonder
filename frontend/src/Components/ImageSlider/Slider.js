
import React, { useState, useEffect } from 'react';
import {Typography} from '@mui/material'
import HeroText from '../HeroText/HeroText';
// import InputButton from '../InputButton';

const Slider = ({setCordinates,setPlaces}) => {
  const images = [
    // 'https://images.pexels.com/photos/18485666/pexels-photo-18485666/free-photo-of-smart-home-devices.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      "https://images.pexels.com/photos/11070632/pexels-photo-11070632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    'https://images.pexels.com/photos/7406498/pexels-photo-7406498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5239097/pexels-photo-5239097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index to show the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the interval (in milliseconds) as needed

    return () => {
      // Cleanup: clear the interval when the component is unmounted
      clearInterval(interval);
    };
  }, [currentIndex, images.length]);

  return (
    <div style={{ height: '100vh', overflow: 'hidden',position: 'relative' ,width:"100vpx"}}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          style={{
            width: '100vw',
            height: '100vh',
            marginTop:"10px",
            objectFit: 'fill',
            position: 'absolute',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}
{/* <HeroText/> */}
      {/* <InputButton setCordinates={setCordinates} setPlaces={setPlaces}/> */}
    </div>
  );
};

export default Slider;