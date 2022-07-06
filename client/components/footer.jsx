import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  display: block;
  background-color: #1B1B1B;
  color: white;
  padding: 25px 0;
`;
const Footer = () => {
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
  const windowSize = useWindowSize();
  return (
   <StyledDiv>
    <div className={windowSize.width > 991 ? 'container d-flex align-items-center' : 'container d-flex align-items-center flex-column' }>
      <div className={windowSize.width > 991 ? 'col d-flex flex-column gap-20' : 'col d-flex flex-column gap-20 align-items-center'}>
        <h1>Logo</h1>
        <h6>We create websites for small businesses.</h6>
        <br></br>
      </div>
      <div className='col d-flex flex-column align-items-center gap-20'>
        <a href="#" className='block footer-link'>Home</a>
        <a href="#" className='block footer-link'>About Us</a>
        <a href="#" className='block footer-link'>Services</a>
        <a href="#" className='block footer-link'>News</a>
        <br></br>
      </div>
      <div className={windowSize.width > 991 ? 'col d-flex flex-column gap-20 align-items-center' : 'col d-flex flex-column gap-20 align-items-center'}>
        <h5>Contact Us</h5>
        <p>hello@ariia.com</p>
        <p>949-000-0000</p>
      </div>
    </div>
    <div className="container d-flex align-items-center justify-content-center border-top">
      <p>Copyright ® 2022 Company All rights Reserved</p>
    </div>
   </StyledDiv>
  );
};

export default Footer;
