import React from 'react';

const Modal = () => {
  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Open Vertically Centered Scrollable Modal
        </button>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Scrollable Modal</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Some placeholder content...</p>
              <p>More content here to make it scrollable...</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;