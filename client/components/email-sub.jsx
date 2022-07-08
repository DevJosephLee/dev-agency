import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const StyledDiv = styled.div`
  background-color: #1B1B1B;
  color: white;
  padding: 35px;
  border-radius: 23px;
`;

export default function EmailSub() {
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
    <div className="container mt-5 mb-5">
      <div className="mb-5">
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <StyledDiv className={useWindowSize().width > 991 ? 'd-flex align-items-center' : ''}>
        <div className="col">
          <h2>Stay in the loop</h2>
          <p>Subscribe to receive the latest news and updates about TDA.
            We promise not to spam you!</p>
        </div>
        <div className="col">
          <form>
            <div className="d-flex">
              <input className="p-2 w-75" type="text" placeholder="Enter email address"></input>
              <Button className="btn-flat w-25" variant="flat" style={{ color: 'black' }}>Continue</Button>
            </div>
          </form>
        </div>
      </StyledDiv>
    </div>
  );
}
