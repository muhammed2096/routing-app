import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export class Layout extends Component {
  render() {
    return (
      <>
        {/* S T A R T - N A V B A R - S E C T I O N  */}
       <Navbar/>
        {/* E N D - N A V B A R - S E C T I O N  */}
        <Outlet />
        {/* S T A R T - F O O T E R - S E C T I O N  */}
        <Footer/>
        {/*E N D - F O O T E R - S E C T I O N  */}
      </>
    );
  }
}

export default Layout;
