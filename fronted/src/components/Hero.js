import React from 'react';

const Hero = () => {
  return (
    <div className="container my-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome to My Website</h1>
          <p className="col-md-8 fs-4">This is a simple hero unit, a jumbotron-style component for showcasing content.</p>
          <button className="btn btn-primary btn-lg" type="button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
