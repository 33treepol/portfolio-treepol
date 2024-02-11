import React, { useState, useEffect } from 'react';
import faceFront from '../img/front.png';

function TestOnly() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundPositionY = `calc(300% - ${scrollPosition * 0.5}px)`;

  return (
    <>
      <div style={{ height: '800px', backgroundColor: 'skyblue' }}></div>
      <div
        style={{
          height: '800px',
          backgroundImage: `url(${faceFront})`,
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'center',
          backgroundPositionY: backgroundPositionY,
          backgroundSize: '300px',
        }}
      ></div>
      <div style={{ height: '800px', backgroundColor: 'skyblue' }}></div>
    </>
  );
}

export default TestOnly;
