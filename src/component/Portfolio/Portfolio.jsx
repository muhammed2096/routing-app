import React, { Component } from "react";
import img1 from "../imgs/poert1.png";
import img2 from "../imgs/port2.png";
import img3 from "../imgs/port3.png";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        {/* S T A R T - P O R T F O L I O - S E C T I O N  */}
        <div className="text-center ">
          <h2 className="pt-5">PORTFOLIO COMPONENT</h2>

          <div class="d-flex align-items-center justify-content-center mb-3">
            
            <i className="fa-solid fa-star"></i>
            
          </div>

          <div className="container vh-100">
            <div className="row pt-5">
              <div className="col-4  overflow-hidden position-relative  p-3">
                <img src={img1} alt="" className="w-100 rounded-3 " />
                
              </div>
              <div className="col-4  overflow-hidden position-relative p-3">
                <img src={img2} alt="" className="w-100 rounded-3 " />
                
              </div>
              <div className="col-4  overflow-hidden position-relative p-3">
                <img src={img3} alt="" className="w-100 rounded-3 " />
                
              </div>
              <div className="col-4  overflow-hidden position-relative p-3">
                <img src={img1} alt="" className="w-100 rounded-3 " />
                
              </div>
              <div className="col-4  overflow-hidden position-relative p-3">
                <img src={img2} alt="" className="w-100 rounded-3 " />
                
              </div>
              <div className="col-4  overflow-hidden position-relative p-3">
                <img src={img3} alt="" className="w-100 rounded-3 " />
                
              </div>
            </div>
          </div>
        </div>
        {/* E N D - P O R T F O L I O - S E C T I O N  */}
      </>
    );
  }
}
