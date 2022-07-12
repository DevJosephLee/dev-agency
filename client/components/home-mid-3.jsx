import React, { useState, useEffect } from 'react';

export default function HomePageMid3() {
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
      // Add event listener
      window.addEventListener('resize', handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  return (
    <div className={useWindowSize().width > 991 ? 'bg-f5' : 'bg-f5 pt-5 pb-5'}>
      <div className={useWindowSize().width > 991 ? 'container d-flex align-items-center' : ''}>
        <div className={useWindowSize().width > 991 ? 'w-50 pt-5 pb-5 pe-5' : 'd-none'}>
          <img src="../../images/mid-img-3.png"></img>
        </div>
        <div className={useWindowSize().width > 991 ? 'w-50 container' : 'container pb-5'}>
          <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quas ducimus, exercitationem ab molestias tempore aliquam aperiam. Totam delectus quo minus. Aliquam nemo itaque magnam tempora beatae exercitationem asperiores doloremque!</p>
        </div>
        <div className={useWindowSize().width > 991 ? 'container d-none' : 'container'}>
          <img src="../../images/mid-img-3.png" />
        </div>
      </div>
    </div>
  );
}
