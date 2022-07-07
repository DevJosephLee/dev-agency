import React, { useState, useEffect } from 'react';
import NavBar from '../components/nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '@mui/material/Button';
import Footer from '../components/footer';

export default function Home(props) {
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
    <div>
      <NavBar />
      <div className="position-relative">
        <div className={useWindowSize().width > 991 ? 'container d-flex align-items-center' : 'container'}>
          <div className="col">
            <h3 className="mb-3">Welcome!</h3>
            <h1>We create websites for businesses</h1>
            <p className="lh-lg mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatum qui adipisci culpa dolore! Eveniet aliquam natus hic? Illo, ullam explicabo? Quisquam, magnam praesentium? Sint voluptates consectetur unde quo non.</p>
            <a className="btn-round" href="#">GET MORE DETAILS</a>
          </div>
          <div className="col">
            <img src="../../images/hero-image.svg" alt="hero-image" className="dropshadow"/>
          </div>
        </div>
        <div className={useWindowSize().width > 991 ? 'fixed' : 'd-none'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EEFDEE" fillOpacity="1" d="M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,160C672,171,768,245,864,240C960,235,1056,149,1152,112C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </div>
      <Footer />
    </div>
  );
}
