import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HomePageMid = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center pt-4'>
        <h3>Based in Orange County, CA</h3>
      </div>
      <div className='d-flex justify-content-left mt-5'>
        <div className='col'>
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Reiciendis, itaque!Quia sapiente atque obcaecati in ad Quia sapiente atque obcaecati in ad </p>
        </div>
        <div className='col'></div>
       </div>
        <div className='d-flex justify-content-left relative'>
          <div className='col-8'>
            <img src="../../images/mid-img.jpg" />
          </div>
          <div className='col-4'>
            <img src="../../images/green-dot-box.svg" className='absolute-green-box'/>
          </div>
        </div>
      <div className='d-flex justify-content-left mt-5 mb-4'>
        <div className='col'>
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Reiciendis, itaque!Quia sapiente atque obcaecati in ad Quia sapiente atque obcaecati in ad </p>
        </div>
        <div className='col'></div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card card-shadow mb-5">
            <div className="card-body">
              <a href="#" className="btn btn-primary btn-red mb-4">Lorem Ipsum</a>
              <h5 className="card-title mb-4">Special title treatment</h5>
              <p className="card-text font-200">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className='d-flex'>
              <div className='col-10 text-right'>
                <p>Read More</p>
              </div>
              <div className='col-2 text-center'>
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card card-shadow mb-5">
            <div className="card-body">
              <a href="#" className="btn btn-primary btn-purple mb-4">Lorem Ipsum</a>
              <h5 className="card-title mb-4">Special title treatment</h5>
              <p className="card-text font-200">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className='d-flex'>
              <div className='col-10 text-right'>
                <p>Read More</p>
              </div>
              <div className='col-2 text-center'>
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card card-shadow mb-5">
            <div className="card-body">
              <a href="#" className="btn btn-primary btn-blue mb-4">Lorem Ipsum</a>
              <h5 className="card-title mb-4">Special title treatment</h5>
              <p className="card-text font-200">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className='d-flex'>
              <div className='col-10 text-right'>
                <p>Read More</p>
              </div>
              <div className='col-2 text-center'>
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default HomePageMid;
