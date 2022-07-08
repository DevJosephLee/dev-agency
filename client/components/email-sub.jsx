import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #1B1B1B;
  color: white;
  padding: 35px;
  border-radius: 23px;
`;

export default function EmailSub() {
  return (
    <div className="container mt-5 mb-5">
      <div className="mb-5">
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <StyledDiv>
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
