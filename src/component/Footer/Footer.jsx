import React from "react";
import { Link } from "react-router-dom";


function Footer(){
    return(
        <>
        <footer>
          <div className="container-fluid">
            <div
              style={{
                backgroundColor: "#2c3e50ff",
                padding: "80px 100px",
              }}
              className="row text-white text-center "
            >
              <div className="col-4 ">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="col-4">
                <h3>AROUND THE WEB</h3>
                <div className="icons">
                <Link className="text-white mx-2" to="#"><i class="fa-brands fa-facebook"></i></Link>
                <Link className="text-white mx-2" to="#"><i class="fa-brands fa-twitter"></i></Link>
                <Link className="text-white mx-2" to="#"><i class="fa-brands fa-linkedin"></i></Link>
                <Link className="text-white mx-2" to="#"><i class="fa-solid fa-globe"></i></Link>
                </div>
              </div>
              <div className="col-4">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
              
            </div>
           
          </div>
           <div className="bg-dark text-center text-white w-100 p-3">
            <p className="w-100">Copyright © Your Website 2021</p>
          </div>
        </footer>
        </>
    )
}

export default Footer;