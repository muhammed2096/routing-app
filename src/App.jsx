import React, { Component } from "react";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'', element: <Layout />, children: [
    {index:true, element: <Home />},
    {path:'about', element: <About/>},
    {path:'portfolio', element: <Portfolio />},
    {path:'contact', element: <Contact />},
  ]}
])

export default class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}
