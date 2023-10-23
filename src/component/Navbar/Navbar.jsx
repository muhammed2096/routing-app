import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
         <nav>
          <div
            className="navBarLogo  p-4"
            style={{ backgroundColor: "#2c3e50ff" }}
          >
            <div className="container d-flex justify-content-between  align-items-center ">
              <Link
                className="text-decoration-none text-white fs-2 fw-bold"
                to=""
              >
                START FRAMEWORK
              </Link>
              <div className="navBarContent">
                <ul className="d-flex my-auto list-unstyled  fw-bold">
                  <li className="pe-4">
                    <Link
                      className="text-decoration-none text-white"
                      to="/about"
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li className="pe-4">
                    <Link
                      className="text-decoration-none text-white"
                      to="/portfolio"
                    >
                      PORTFOLIO
                    </Link>
                  </li>
                  <li className="pe-4">
                    <Link
                      className="text-decoration-none text-white"
                      to="/contact"
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        </>
    )
}


export default Navbar;