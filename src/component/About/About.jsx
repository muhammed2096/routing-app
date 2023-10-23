import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        {/* S T A R T - A B O U T - S E C T I O N  */}
        <div
          className=" text-white position-relative vh-100  text-center vh-100"
          style={{
            backgroundColor: "#1abc9cff",
          }}
        >
          <div
            className="homeContent"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50% , -50%)",
            }}
          >
            <h2 className="fs-1 fw-bold pt-4">ABOUT COMPONENT</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div
                className="line me-3"
                style={{ backgroundColor: "white" }}
              ></div>
              <i className="fa-solid fa-star"></i>
              <div
                className="line ms-3"
                style={{ backgroundColor: "white" }}
              ></div>
            </div>
            <div className="d-flex text-start ">
              <p className=" pe-5">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <div>
                <p className="ps-5">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* E N D  - A B O U T - S E C T I O N  */}
      </>
    );
  }
}
