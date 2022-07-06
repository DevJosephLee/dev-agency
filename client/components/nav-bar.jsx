import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  return (
    <div className="container d-flex align-items-center">
      <div className="col">
        <h1>Logo</h1>
      </div>
      <div className="col d-flex justify-content-between align-items-center">
        <a href="#" className="nav-links">Home</a>
        <a href="#" className="nav-links">About Us</a>
        <a href="#" className="nav-links">Services</a>
        <a href="#" className="nav-links">News</a>
        <Button variant="flat" href="#">Contact Us</Button>
      </div>
    </div>
  );
}
