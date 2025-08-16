import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar></Navbar>
      <main className="flex-grow-1">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
