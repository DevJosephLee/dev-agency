import React from 'react';

export default function ProjectCards() {
  return (
    <div className="bg-f5 p-5">
      <div className="container d-flex justify-content-center">
        <div className="text-center w-50">
          <h4>Our Recent Projects</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque harum impedit adipisci porro et soluta repellendus.</p>
        </div>
      </div>
      <div className="container">
        <div className="project-card shadow d-flex align-items-center">
          <div className="col">
            <a href="#" className="d-flex justify-content-center">
              <img className="project-image" src="../../images/placeholder-image.png" alt="placeholder"></img>
            </a>
          </div>
          <div className="col container text-center p-5">
            <h5 className="mb-5">Project #1</h5>
            <a className="btn-round" href="#">Explore Project</a>
          </div>
        </div>
        <div className="project-card shadow d-flex align-items-center">
          <div className="col">
            <a href="#" className="d-flex justify-content-center">
              <img className="project-image" src="../../images/placeholder-image.png" alt="placeholder"></img>
            </a>
          </div>
          <div className="col container text-center p-5">
            <h5 className="mb-5">Project #1</h5>
            <a className="btn-round" href="#">Explore Project</a>
          </div>
        </div>
        <div className="project-card shadow d-flex align-items-center">
          <div className="col">
            <a href="#" className="d-flex justify-content-center">
              <img className="project-image" src="../../images/placeholder-image.png" alt="placeholder"></img>
            </a>
          </div>
          <div className="col container text-center p-5">
            <h5 className="mb-5">Project #1</h5>
            <a className="btn-round" href="#">Explore Project</a>
          </div>
        </div>
      </div>
    </div>
  );
}
