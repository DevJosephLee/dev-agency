import React, { useState, useEffect } from 'react';

export default function HomePageMid2() {
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

  let paddingAdj;
  const viewportWidth = useWindowSize().width;
  if (viewportWidth > 1270) {
    paddingAdj = { padding: '0 12.5rem' };
  } else if (viewportWidth > 1163) {
    paddingAdj = { padding: '0 10rem' };
  } else if (viewportWidth > 991) {
    paddingAdj = { padding: '0 7.5rem' };
  }

  return (
    <div className={useWindowSize().width > 991 ? 'd-flex align-items-center bg-eefdee' : 'bg-eefdee'}>
      <div className={useWindowSize().width > 991 ? 'w-50' : 'container pt-5 pb-5'} style={paddingAdj}>
        <h1 className="mb-3">Lorem Ipsum is simply dummy text of the printing and.</h1>
        <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis inventore magni veritatis? Quo repudiandae magnam harum, veniam cum dignissimos fugiat, consectetur, facere sequi alias nam ea cumque iure quis quidem!</p>
        <a className="btn-round" href="#">Get in touch</a>
      </div>
      <div className={useWindowSize().width > 991 ? 'w-50' : 'w-100'}>
        <img src="../../images/mid-img-2.png" />
      </div>
    </div>
  );
}
